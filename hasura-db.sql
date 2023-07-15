SET check_function_bodies = false;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.auction_metadata (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    index integer DEFAULT 0 NOT NULL,
    nostr_event_id text,
    price bigint NOT NULL,
    signed_psbt text NOT NULL,
    scheduled_time bigint NOT NULL,
    end_time bigint NOT NULL,
    auction_id uuid NOT NULL
);
CREATE TABLE public.auction_status (
    value text NOT NULL
);
CREATE TABLE public.dutch_auction (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    auction_id uuid DEFAULT gen_random_uuid() NOT NULL,
    inscription_id text NOT NULL,
    seconds_between_each_decrease integer DEFAULT 600 NOT NULL,
    status text DEFAULT 'PENDING'::text NOT NULL,
    decrease_amount integer DEFAULT 0 NOT NULL,
    ordinals_address text,
    current_price integer DEFAULT 0 NOT NULL,
    start_time bigint NOT NULL,
    txid text,
    vout integer DEFAULT 0 NOT NULL,
    reserve_price integer DEFAULT 0 NOT NULL,
    initial_price integer DEFAULT 0 NOT NULL,
    "scheduled_ISO_date" timestamp with time zone DEFAULT now(),
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);
INSERT INTO public.auction_status VALUES ('SPENT');
INSERT INTO public.auction_status VALUES ('RUNNING');
INSERT INTO public.auction_status VALUES ('PENDING');
INSERT INTO public.auction_status VALUES ('FINISHED');
INSERT INTO public.auction_status VALUES ('STOPPED');
INSERT INTO public.dutch_auction VALUES ('bba31492-f204-4a76-9d00-0284db7cbb83', 'c4350b78-2b5d-46cb-b1d8-3eca34268383', '25e927ffd8fb4195ce04df5b72636487b29b5868563960bce6ac5f7539a5e48bi0', 600, 'SPENT', 5000, 'bc1pvvwgz26pc4drenffnytnd6xfdvy0eehdztuz8338q5a54h9s7pyssssh9a', 0, 1688681400000, '5ae9c4a08903a91271ea1d436e157efc890ec4d4c5377cc9c36b81f8a2635e7b:0', 0, 5000, 20000, '2023-07-06 22:10:00+00', '2023-07-15 02:26:00.675651+00', '2023-07-15 04:34:23.177236+00');
INSERT INTO public.dutch_auction VALUES ('7eb5257b-8d4a-4464-aa5f-746537f06e07', '5b384711-5a21-4682-acb3-47e4f55dbab8', '25e927ffd8fb4195ce04df5b72636487b29b5868563960bce6ac5f7539a5e48bi0', 600, 'PENDING', 5000, 'bc1pvvwgz26pc4drenffnytnd6xfdvy0eehdztuz8338q5a54h9s7pyssssh9a', 0, 1688681400000, '5ae9c4a08903a91271ea1d436e157efc890ec4d4c5377cc9c36b81f8a2635e7b:0', 0, 5000, 20000, '2023-07-06 22:10:00+00', '2023-07-15 04:35:57.308501+00', '2023-07-15 04:35:57.308501+00');
INSERT INTO public.dutch_auction VALUES ('9a6b1672-8699-4ef9-a912-b579f0a935ca', 'f22ffde4-513e-46c4-87c5-822540c3504c', '25e927ffd8fb4195ce04df5b72636487b29b5868563960bce6ac5f7539a5e48bi0', 600, 'STOPPED', 5000, 'bc1pvvwgz26pc4drenffnytnd6xfdvy0eehdztuz8338q5a54h9s7pyssssh9a', 0, 1688681400000, '5ae9c4a08903a91271ea1d436e157efc890ec4d4c5377cc9c36b81f8a2635e7b:0', 0, 5000, 20000, '2023-07-06 22:10:00+00', '2023-07-15 04:37:53.989187+00', '2023-07-15 04:37:53.989187+00');
INSERT INTO public.dutch_auction VALUES ('88bb6a16-a8fe-46e5-8d38-261285972405', '9b8bc152-9743-49f6-8a26-1e2dbcb6e176', '25e927ffd8fb4195ce04df5b72636487b29b5868563960bce6ac5f7539a5e48bi0', 600, 'FINISHED', 5000, 'bc1pvvwgz26pc4drenffnytnd6xfdvy0eehdztuz8338q5a54h9s7pyssssh9a', 15000, 1688681400000, '5ae9c4a08903a91271ea1d436e157efc890ec4d4c5377cc9c36b81f8a2635e7b:0', 0, 5000, 20000, '2023-07-06 22:10:00+00', '2023-07-15 01:47:42.415589+00', '2023-07-15 02:18:47.967269+00');
INSERT INTO public.dutch_auction VALUES ('5398e349-52f0-4cb3-b5f1-d59fdb07ad82', 'd1dd31c0-2af6-47b3-ad8a-c3993a87562d', '25e927ffd8fb4195ce04df5b72636487b29b5868563960bce6ac5f7539a5e48bi0', 600, 'RUNNING', 5000, 'bc1pvvwgz26pc4drenffnytnd6xfdvy0eehdztuz8338q5a54h9s7pyssssh9a', 0, 1688681400000, '5ae9c4a08903a91271ea1d436e157efc890ec4d4c5377cc9c36b81f8a2635e7b:0', 0, 5000, 20000, '2023-07-06 22:10:00+00', '2023-07-15 02:26:00.675651+00', '2023-07-15 04:43:23.869633+00');
ALTER TABLE ONLY public.auction_metadata
    ADD CONSTRAINT auction_metadata_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.auction_status
    ADD CONSTRAINT auction_status_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public.dutch_auction
    ADD CONSTRAINT dutch_auction_id_key UNIQUE (id);
ALTER TABLE ONLY public.dutch_auction
    ADD CONSTRAINT dutch_auction_pkey PRIMARY KEY (auction_id);
CREATE TRIGGER set_public_dutch_auction_updated_at BEFORE UPDATE ON public.dutch_auction FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_dutch_auction_updated_at ON public.dutch_auction IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.auction_metadata
    ADD CONSTRAINT auction_metadata_auction_id_fkey FOREIGN KEY (auction_id) REFERENCES public.dutch_auction(auction_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.dutch_auction
    ADD CONSTRAINT dutch_auction_status_fkey FOREIGN KEY (status) REFERENCES public.auction_status(value) ON UPDATE RESTRICT ON DELETE RESTRICT;
