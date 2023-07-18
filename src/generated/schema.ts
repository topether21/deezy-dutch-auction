// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    Boolean: boolean,
    Float: number,
    Int: number,
    String: string,
    bigint: any,
    timestamptz: any,
    uuid: any,
}


/** columns and relationships of "auction_metadata" */
export interface AuctionMetadata {
    auctionId: Scalars['uuid']
    /** An object relationship */
    auction_metadata_dutch_auction: DutchAuction
    endTime: Scalars['bigint']
    id: Scalars['uuid']
    index: Scalars['Int']
    nostrEventId: (Scalars['String'] | null)
    price: Scalars['bigint']
    scheduledTime: Scalars['bigint']
    signedPsbt: Scalars['String']
    __typename: 'AuctionMetadata'
}


/** aggregated selection of "auction_metadata" */
export interface AuctionMetadataAggregate {
    aggregate: (AuctionMetadataAggregateFields | null)
    nodes: AuctionMetadata[]
    __typename: 'AuctionMetadataAggregate'
}


/** aggregate fields of "auction_metadata" */
export interface AuctionMetadataAggregateFields {
    avg: (AuctionMetadataAvgFields | null)
    count: Scalars['Int']
    max: (AuctionMetadataMaxFields | null)
    min: (AuctionMetadataMinFields | null)
    stddev: (AuctionMetadataStddevFields | null)
    stddevPop: (AuctionMetadataStddevPopFields | null)
    stddevSamp: (AuctionMetadataStddevSampFields | null)
    sum: (AuctionMetadataSumFields | null)
    varPop: (AuctionMetadataVarPopFields | null)
    varSamp: (AuctionMetadataVarSampFields | null)
    variance: (AuctionMetadataVarianceFields | null)
    __typename: 'AuctionMetadataAggregateFields'
}


/** aggregate avg on columns */
export interface AuctionMetadataAvgFields {
    endTime: (Scalars['Float'] | null)
    index: (Scalars['Float'] | null)
    price: (Scalars['Float'] | null)
    scheduledTime: (Scalars['Float'] | null)
    __typename: 'AuctionMetadataAvgFields'
}


/** unique or primary key constraints on table "auction_metadata" */
export type AuctionMetadataConstraint = 'auction_metadata_pkey'


/** aggregate max on columns */
export interface AuctionMetadataMaxFields {
    auctionId: (Scalars['uuid'] | null)
    endTime: (Scalars['bigint'] | null)
    id: (Scalars['uuid'] | null)
    index: (Scalars['Int'] | null)
    nostrEventId: (Scalars['String'] | null)
    price: (Scalars['bigint'] | null)
    scheduledTime: (Scalars['bigint'] | null)
    signedPsbt: (Scalars['String'] | null)
    __typename: 'AuctionMetadataMaxFields'
}


/** aggregate min on columns */
export interface AuctionMetadataMinFields {
    auctionId: (Scalars['uuid'] | null)
    endTime: (Scalars['bigint'] | null)
    id: (Scalars['uuid'] | null)
    index: (Scalars['Int'] | null)
    nostrEventId: (Scalars['String'] | null)
    price: (Scalars['bigint'] | null)
    scheduledTime: (Scalars['bigint'] | null)
    signedPsbt: (Scalars['String'] | null)
    __typename: 'AuctionMetadataMinFields'
}


/** response of any mutation on the table "auction_metadata" */
export interface AuctionMetadataMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: AuctionMetadata[]
    __typename: 'AuctionMetadataMutationResponse'
}


/** select columns of table "auction_metadata" */
export type AuctionMetadataSelectColumn = 'auctionId' | 'endTime' | 'id' | 'index' | 'nostrEventId' | 'price' | 'scheduledTime' | 'signedPsbt'


/** aggregate stddev on columns */
export interface AuctionMetadataStddevFields {
    endTime: (Scalars['Float'] | null)
    index: (Scalars['Float'] | null)
    price: (Scalars['Float'] | null)
    scheduledTime: (Scalars['Float'] | null)
    __typename: 'AuctionMetadataStddevFields'
}


/** aggregate stddevPop on columns */
export interface AuctionMetadataStddevPopFields {
    endTime: (Scalars['Float'] | null)
    index: (Scalars['Float'] | null)
    price: (Scalars['Float'] | null)
    scheduledTime: (Scalars['Float'] | null)
    __typename: 'AuctionMetadataStddevPopFields'
}


/** aggregate stddevSamp on columns */
export interface AuctionMetadataStddevSampFields {
    endTime: (Scalars['Float'] | null)
    index: (Scalars['Float'] | null)
    price: (Scalars['Float'] | null)
    scheduledTime: (Scalars['Float'] | null)
    __typename: 'AuctionMetadataStddevSampFields'
}


/** aggregate sum on columns */
export interface AuctionMetadataSumFields {
    endTime: (Scalars['bigint'] | null)
    index: (Scalars['Int'] | null)
    price: (Scalars['bigint'] | null)
    scheduledTime: (Scalars['bigint'] | null)
    __typename: 'AuctionMetadataSumFields'
}


/** update columns of table "auction_metadata" */
export type AuctionMetadataUpdateColumn = 'auctionId' | 'endTime' | 'id' | 'index' | 'nostrEventId' | 'price' | 'scheduledTime' | 'signedPsbt'


/** aggregate varPop on columns */
export interface AuctionMetadataVarPopFields {
    endTime: (Scalars['Float'] | null)
    index: (Scalars['Float'] | null)
    price: (Scalars['Float'] | null)
    scheduledTime: (Scalars['Float'] | null)
    __typename: 'AuctionMetadataVarPopFields'
}


/** aggregate varSamp on columns */
export interface AuctionMetadataVarSampFields {
    endTime: (Scalars['Float'] | null)
    index: (Scalars['Float'] | null)
    price: (Scalars['Float'] | null)
    scheduledTime: (Scalars['Float'] | null)
    __typename: 'AuctionMetadataVarSampFields'
}


/** aggregate variance on columns */
export interface AuctionMetadataVarianceFields {
    endTime: (Scalars['Float'] | null)
    index: (Scalars['Float'] | null)
    price: (Scalars['Float'] | null)
    scheduledTime: (Scalars['Float'] | null)
    __typename: 'AuctionMetadataVarianceFields'
}


/** columns and relationships of "auction_status" */
export interface AuctionStatus {
    /** An array relationship */
    dutchAuctions: DutchAuction[]
    /** An aggregate relationship */
    dutchAuctionsAggregate: DutchAuctionAggregate
    value: Scalars['String']
    __typename: 'AuctionStatus'
}


/** aggregated selection of "auction_status" */
export interface AuctionStatusAggregate {
    aggregate: (AuctionStatusAggregateFields | null)
    nodes: AuctionStatus[]
    __typename: 'AuctionStatusAggregate'
}


/** aggregate fields of "auction_status" */
export interface AuctionStatusAggregateFields {
    count: Scalars['Int']
    max: (AuctionStatusMaxFields | null)
    min: (AuctionStatusMinFields | null)
    __typename: 'AuctionStatusAggregateFields'
}


/** unique or primary key constraints on table "auction_status" */
export type AuctionStatusConstraint = 'auction_status_pkey'

export type AuctionStatusEnum = 'FINISHED' | 'PENDING' | 'RUNNING' | 'SPENT' | 'STOPPED'


/** aggregate max on columns */
export interface AuctionStatusMaxFields {
    value: (Scalars['String'] | null)
    __typename: 'AuctionStatusMaxFields'
}


/** aggregate min on columns */
export interface AuctionStatusMinFields {
    value: (Scalars['String'] | null)
    __typename: 'AuctionStatusMinFields'
}


/** response of any mutation on the table "auction_status" */
export interface AuctionStatusMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: AuctionStatus[]
    __typename: 'AuctionStatusMutationResponse'
}


/** select columns of table "auction_status" */
export type AuctionStatusSelectColumn = 'value'


/** update columns of table "auction_status" */
export type AuctionStatusUpdateColumn = 'value'


/** ordering argument of a cursor */
export type CursorOrdering = 'ASC' | 'DESC'


/** columns and relationships of "dutch_auction" */
export interface DutchAuction {
    auctionId: Scalars['uuid']
    collection: (Scalars['String'] | null)
    createdAt: (Scalars['timestamptz'] | null)
    currentPrice: Scalars['Int']
    decreaseAmount: Scalars['Int']
    /** An aggregate relationship */
    dutchAuctionAuctionMetadataAggregate: AuctionMetadataAggregate
    /** An array relationship */
    dutch_auction_auction_metadata: AuctionMetadata[]
    /** An object relationship */
    dutch_auction_auction_status: AuctionStatus
    id: Scalars['uuid']
    initialPrice: Scalars['Int']
    inscriptionId: Scalars['String']
    ownerOrdinalsAddress: (Scalars['String'] | null)
    reservePrice: Scalars['Int']
    scheduledISODate: (Scalars['timestamptz'] | null)
    secondsBetweenEachDecrease: Scalars['Int']
    startTime: Scalars['bigint']
    status: AuctionStatusEnum
    txid: (Scalars['String'] | null)
    updatedAt: (Scalars['timestamptz'] | null)
    utxoCreatedAt: (Scalars['Int'] | null)
    utxoNum: (Scalars['String'] | null)
    vout: Scalars['Int']
    __typename: 'DutchAuction'
}


/** aggregated selection of "dutch_auction" */
export interface DutchAuctionAggregate {
    aggregate: (DutchAuctionAggregateFields | null)
    nodes: DutchAuction[]
    __typename: 'DutchAuctionAggregate'
}


/** aggregate fields of "dutch_auction" */
export interface DutchAuctionAggregateFields {
    avg: (DutchAuctionAvgFields | null)
    count: Scalars['Int']
    max: (DutchAuctionMaxFields | null)
    min: (DutchAuctionMinFields | null)
    stddev: (DutchAuctionStddevFields | null)
    stddevPop: (DutchAuctionStddevPopFields | null)
    stddevSamp: (DutchAuctionStddevSampFields | null)
    sum: (DutchAuctionSumFields | null)
    varPop: (DutchAuctionVarPopFields | null)
    varSamp: (DutchAuctionVarSampFields | null)
    variance: (DutchAuctionVarianceFields | null)
    __typename: 'DutchAuctionAggregateFields'
}


/** aggregate avg on columns */
export interface DutchAuctionAvgFields {
    currentPrice: (Scalars['Float'] | null)
    decreaseAmount: (Scalars['Float'] | null)
    initialPrice: (Scalars['Float'] | null)
    reservePrice: (Scalars['Float'] | null)
    secondsBetweenEachDecrease: (Scalars['Float'] | null)
    startTime: (Scalars['Float'] | null)
    utxoCreatedAt: (Scalars['Float'] | null)
    vout: (Scalars['Float'] | null)
    __typename: 'DutchAuctionAvgFields'
}


/** unique or primary key constraints on table "dutch_auction" */
export type DutchAuctionConstraint = 'dutch_auction_id_key' | 'dutch_auction_pkey'


/** aggregate max on columns */
export interface DutchAuctionMaxFields {
    auctionId: (Scalars['uuid'] | null)
    collection: (Scalars['String'] | null)
    createdAt: (Scalars['timestamptz'] | null)
    currentPrice: (Scalars['Int'] | null)
    decreaseAmount: (Scalars['Int'] | null)
    id: (Scalars['uuid'] | null)
    initialPrice: (Scalars['Int'] | null)
    inscriptionId: (Scalars['String'] | null)
    ownerOrdinalsAddress: (Scalars['String'] | null)
    reservePrice: (Scalars['Int'] | null)
    scheduledISODate: (Scalars['timestamptz'] | null)
    secondsBetweenEachDecrease: (Scalars['Int'] | null)
    startTime: (Scalars['bigint'] | null)
    txid: (Scalars['String'] | null)
    updatedAt: (Scalars['timestamptz'] | null)
    utxoCreatedAt: (Scalars['Int'] | null)
    utxoNum: (Scalars['String'] | null)
    vout: (Scalars['Int'] | null)
    __typename: 'DutchAuctionMaxFields'
}


/** aggregate min on columns */
export interface DutchAuctionMinFields {
    auctionId: (Scalars['uuid'] | null)
    collection: (Scalars['String'] | null)
    createdAt: (Scalars['timestamptz'] | null)
    currentPrice: (Scalars['Int'] | null)
    decreaseAmount: (Scalars['Int'] | null)
    id: (Scalars['uuid'] | null)
    initialPrice: (Scalars['Int'] | null)
    inscriptionId: (Scalars['String'] | null)
    ownerOrdinalsAddress: (Scalars['String'] | null)
    reservePrice: (Scalars['Int'] | null)
    scheduledISODate: (Scalars['timestamptz'] | null)
    secondsBetweenEachDecrease: (Scalars['Int'] | null)
    startTime: (Scalars['bigint'] | null)
    txid: (Scalars['String'] | null)
    updatedAt: (Scalars['timestamptz'] | null)
    utxoCreatedAt: (Scalars['Int'] | null)
    utxoNum: (Scalars['String'] | null)
    vout: (Scalars['Int'] | null)
    __typename: 'DutchAuctionMinFields'
}


/** response of any mutation on the table "dutch_auction" */
export interface DutchAuctionMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: DutchAuction[]
    __typename: 'DutchAuctionMutationResponse'
}


/** select columns of table "dutch_auction" */
export type DutchAuctionSelectColumn = 'auctionId' | 'collection' | 'createdAt' | 'currentPrice' | 'decreaseAmount' | 'id' | 'initialPrice' | 'inscriptionId' | 'ownerOrdinalsAddress' | 'reservePrice' | 'scheduledISODate' | 'secondsBetweenEachDecrease' | 'startTime' | 'status' | 'txid' | 'updatedAt' | 'utxoCreatedAt' | 'utxoNum' | 'vout'


/** aggregate stddev on columns */
export interface DutchAuctionStddevFields {
    currentPrice: (Scalars['Float'] | null)
    decreaseAmount: (Scalars['Float'] | null)
    initialPrice: (Scalars['Float'] | null)
    reservePrice: (Scalars['Float'] | null)
    secondsBetweenEachDecrease: (Scalars['Float'] | null)
    startTime: (Scalars['Float'] | null)
    utxoCreatedAt: (Scalars['Float'] | null)
    vout: (Scalars['Float'] | null)
    __typename: 'DutchAuctionStddevFields'
}


/** aggregate stddevPop on columns */
export interface DutchAuctionStddevPopFields {
    currentPrice: (Scalars['Float'] | null)
    decreaseAmount: (Scalars['Float'] | null)
    initialPrice: (Scalars['Float'] | null)
    reservePrice: (Scalars['Float'] | null)
    secondsBetweenEachDecrease: (Scalars['Float'] | null)
    startTime: (Scalars['Float'] | null)
    utxoCreatedAt: (Scalars['Float'] | null)
    vout: (Scalars['Float'] | null)
    __typename: 'DutchAuctionStddevPopFields'
}


/** aggregate stddevSamp on columns */
export interface DutchAuctionStddevSampFields {
    currentPrice: (Scalars['Float'] | null)
    decreaseAmount: (Scalars['Float'] | null)
    initialPrice: (Scalars['Float'] | null)
    reservePrice: (Scalars['Float'] | null)
    secondsBetweenEachDecrease: (Scalars['Float'] | null)
    startTime: (Scalars['Float'] | null)
    utxoCreatedAt: (Scalars['Float'] | null)
    vout: (Scalars['Float'] | null)
    __typename: 'DutchAuctionStddevSampFields'
}


/** aggregate sum on columns */
export interface DutchAuctionSumFields {
    currentPrice: (Scalars['Int'] | null)
    decreaseAmount: (Scalars['Int'] | null)
    initialPrice: (Scalars['Int'] | null)
    reservePrice: (Scalars['Int'] | null)
    secondsBetweenEachDecrease: (Scalars['Int'] | null)
    startTime: (Scalars['bigint'] | null)
    utxoCreatedAt: (Scalars['Int'] | null)
    vout: (Scalars['Int'] | null)
    __typename: 'DutchAuctionSumFields'
}


/** update columns of table "dutch_auction" */
export type DutchAuctionUpdateColumn = 'auctionId' | 'collection' | 'createdAt' | 'currentPrice' | 'decreaseAmount' | 'id' | 'initialPrice' | 'inscriptionId' | 'ownerOrdinalsAddress' | 'reservePrice' | 'scheduledISODate' | 'secondsBetweenEachDecrease' | 'startTime' | 'status' | 'txid' | 'updatedAt' | 'utxoCreatedAt' | 'utxoNum' | 'vout'


/** aggregate varPop on columns */
export interface DutchAuctionVarPopFields {
    currentPrice: (Scalars['Float'] | null)
    decreaseAmount: (Scalars['Float'] | null)
    initialPrice: (Scalars['Float'] | null)
    reservePrice: (Scalars['Float'] | null)
    secondsBetweenEachDecrease: (Scalars['Float'] | null)
    startTime: (Scalars['Float'] | null)
    utxoCreatedAt: (Scalars['Float'] | null)
    vout: (Scalars['Float'] | null)
    __typename: 'DutchAuctionVarPopFields'
}


/** aggregate varSamp on columns */
export interface DutchAuctionVarSampFields {
    currentPrice: (Scalars['Float'] | null)
    decreaseAmount: (Scalars['Float'] | null)
    initialPrice: (Scalars['Float'] | null)
    reservePrice: (Scalars['Float'] | null)
    secondsBetweenEachDecrease: (Scalars['Float'] | null)
    startTime: (Scalars['Float'] | null)
    utxoCreatedAt: (Scalars['Float'] | null)
    vout: (Scalars['Float'] | null)
    __typename: 'DutchAuctionVarSampFields'
}


/** aggregate variance on columns */
export interface DutchAuctionVarianceFields {
    currentPrice: (Scalars['Float'] | null)
    decreaseAmount: (Scalars['Float'] | null)
    initialPrice: (Scalars['Float'] | null)
    reservePrice: (Scalars['Float'] | null)
    secondsBetweenEachDecrease: (Scalars['Float'] | null)
    startTime: (Scalars['Float'] | null)
    utxoCreatedAt: (Scalars['Float'] | null)
    vout: (Scalars['Float'] | null)
    __typename: 'DutchAuctionVarianceFields'
}


/** column ordering options */
export type OrderBy = 'ASC' | 'ASC_NULLS_FIRST' | 'ASC_NULLS_LAST' | 'DESC' | 'DESC_NULLS_FIRST' | 'DESC_NULLS_LAST'


/** mutation root */
export interface mutation_root {
    /** delete data from the table: "auction_metadata" */
    deleteAuctionMetadata: (AuctionMetadataMutationResponse | null)
    /** delete single row from the table: "auction_metadata" */
    deleteAuctionMetadataByPk: (AuctionMetadata | null)
    /** delete data from the table: "auction_status" */
    deleteAuctionStatus: (AuctionStatusMutationResponse | null)
    /** delete single row from the table: "auction_status" */
    deleteAuctionStatusByPk: (AuctionStatus | null)
    /** delete data from the table: "dutch_auction" */
    deleteDutchAuction: (DutchAuctionMutationResponse | null)
    /** delete single row from the table: "dutch_auction" */
    deleteDutchAuctionByPk: (DutchAuction | null)
    /** insert data into the table: "auction_metadata" */
    insertAuctionMetadata: (AuctionMetadataMutationResponse | null)
    /** insert a single row into the table: "auction_metadata" */
    insertAuctionMetadataOne: (AuctionMetadata | null)
    /** insert data into the table: "auction_status" */
    insertAuctionStatus: (AuctionStatusMutationResponse | null)
    /** insert a single row into the table: "auction_status" */
    insertAuctionStatusOne: (AuctionStatus | null)
    /** insert data into the table: "dutch_auction" */
    insertDutchAuction: (DutchAuctionMutationResponse | null)
    /** insert a single row into the table: "dutch_auction" */
    insertDutchAuctionOne: (DutchAuction | null)
    /** update data of the table: "auction_metadata" */
    updateAuctionMetadata: (AuctionMetadataMutationResponse | null)
    /** update single row of the table: "auction_metadata" */
    updateAuctionMetadataByPk: (AuctionMetadata | null)
    /** update multiples rows of table: "auction_metadata" */
    updateAuctionMetadataMany: ((AuctionMetadataMutationResponse | null)[] | null)
    /** update data of the table: "auction_status" */
    updateAuctionStatus: (AuctionStatusMutationResponse | null)
    /** update single row of the table: "auction_status" */
    updateAuctionStatusByPk: (AuctionStatus | null)
    /** update multiples rows of table: "auction_status" */
    updateAuctionStatusMany: ((AuctionStatusMutationResponse | null)[] | null)
    /** update data of the table: "dutch_auction" */
    updateDutchAuction: (DutchAuctionMutationResponse | null)
    /** update single row of the table: "dutch_auction" */
    updateDutchAuctionByPk: (DutchAuction | null)
    /** update multiples rows of table: "dutch_auction" */
    updateDutchAuctionMany: ((DutchAuctionMutationResponse | null)[] | null)
    __typename: 'mutation_root'
}

export interface query_root {
    /** fetch data from the table: "auction_metadata" */
    auctionMetadata: AuctionMetadata[]
    /** fetch aggregated fields from the table: "auction_metadata" */
    auctionMetadataAggregate: AuctionMetadataAggregate
    /** fetch data from the table: "auction_metadata" using primary key columns */
    auctionMetadataByPk: (AuctionMetadata | null)
    /** fetch data from the table: "auction_status" */
    auctionStatus: AuctionStatus[]
    /** fetch aggregated fields from the table: "auction_status" */
    auctionStatusAggregate: AuctionStatusAggregate
    /** fetch data from the table: "auction_status" using primary key columns */
    auctionStatusByPk: (AuctionStatus | null)
    /** fetch data from the table: "dutch_auction" */
    dutchAuction: DutchAuction[]
    /** fetch aggregated fields from the table: "dutch_auction" */
    dutchAuctionAggregate: DutchAuctionAggregate
    /** fetch data from the table: "dutch_auction" using primary key columns */
    dutchAuctionByPk: (DutchAuction | null)
    __typename: 'query_root'
}

export interface subscription_root {
    /** fetch data from the table: "auction_metadata" */
    auctionMetadata: AuctionMetadata[]
    /** fetch aggregated fields from the table: "auction_metadata" */
    auctionMetadataAggregate: AuctionMetadataAggregate
    /** fetch data from the table: "auction_metadata" using primary key columns */
    auctionMetadataByPk: (AuctionMetadata | null)
    /** fetch data from the table in a streaming manner: "auction_metadata" */
    auctionMetadataStream: AuctionMetadata[]
    /** fetch data from the table: "auction_status" */
    auctionStatus: AuctionStatus[]
    /** fetch aggregated fields from the table: "auction_status" */
    auctionStatusAggregate: AuctionStatusAggregate
    /** fetch data from the table: "auction_status" using primary key columns */
    auctionStatusByPk: (AuctionStatus | null)
    /** fetch data from the table in a streaming manner: "auction_status" */
    auctionStatusStream: AuctionStatus[]
    /** fetch data from the table: "dutch_auction" */
    dutchAuction: DutchAuction[]
    /** fetch aggregated fields from the table: "dutch_auction" */
    dutchAuctionAggregate: DutchAuctionAggregate
    /** fetch data from the table: "dutch_auction" using primary key columns */
    dutchAuctionByPk: (DutchAuction | null)
    /** fetch data from the table in a streaming manner: "dutch_auction" */
    dutchAuctionStream: DutchAuction[]
    __typename: 'subscription_root'
}

export type Query = query_root
export type Mutation = mutation_root
export type Subscription = subscription_root


/** columns and relationships of "auction_metadata" */
export interface AuctionMetadataGenqlSelection{
    auctionId?: boolean | number
    /** An object relationship */
    auction_metadata_dutch_auction?: DutchAuctionGenqlSelection
    endTime?: boolean | number
    id?: boolean | number
    index?: boolean | number
    nostrEventId?: boolean | number
    price?: boolean | number
    scheduledTime?: boolean | number
    signedPsbt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "auction_metadata" */
export interface AuctionMetadataAggregateGenqlSelection{
    aggregate?: AuctionMetadataAggregateFieldsGenqlSelection
    nodes?: AuctionMetadataGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AuctionMetadataAggregateBoolExp {count?: (auctionMetadataAggregateBoolExpCount | null)}


/** aggregate fields of "auction_metadata" */
export interface AuctionMetadataAggregateFieldsGenqlSelection{
    avg?: AuctionMetadataAvgFieldsGenqlSelection
    count?: { __args: {columns?: (AuctionMetadataSelectColumn[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: AuctionMetadataMaxFieldsGenqlSelection
    min?: AuctionMetadataMinFieldsGenqlSelection
    stddev?: AuctionMetadataStddevFieldsGenqlSelection
    stddevPop?: AuctionMetadataStddevPopFieldsGenqlSelection
    stddevSamp?: AuctionMetadataStddevSampFieldsGenqlSelection
    sum?: AuctionMetadataSumFieldsGenqlSelection
    varPop?: AuctionMetadataVarPopFieldsGenqlSelection
    varSamp?: AuctionMetadataVarSampFieldsGenqlSelection
    variance?: AuctionMetadataVarianceFieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "auction_metadata" */
export interface AuctionMetadataAggregateOrderBy {avg?: (AuctionMetadataAvgOrderBy | null),count?: (OrderBy | null),max?: (AuctionMetadataMaxOrderBy | null),min?: (AuctionMetadataMinOrderBy | null),stddev?: (AuctionMetadataStddevOrderBy | null),stddevPop?: (AuctionMetadataStddevPopOrderBy | null),stddevSamp?: (AuctionMetadataStddevSampOrderBy | null),sum?: (AuctionMetadataSumOrderBy | null),varPop?: (AuctionMetadataVarPopOrderBy | null),varSamp?: (AuctionMetadataVarSampOrderBy | null),variance?: (AuctionMetadataVarianceOrderBy | null)}


/** input type for inserting array relation for remote table "auction_metadata" */
export interface AuctionMetadataArrRelInsertInput {data?: AuctionMetadataInsertInput[],
/** upsert condition */
onConflict?: (AuctionMetadataOnConflict | null)}


/** aggregate avg on columns */
export interface AuctionMetadataAvgFieldsGenqlSelection{
    endTime?: boolean | number
    index?: boolean | number
    price?: boolean | number
    scheduledTime?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "auction_metadata" */
export interface AuctionMetadataAvgOrderBy {endTime?: (OrderBy | null),index?: (OrderBy | null),price?: (OrderBy | null),scheduledTime?: (OrderBy | null)}


/** Boolean expression to filter rows from the table "auction_metadata". All fields are combined with a logical 'AND'. */
export interface AuctionMetadataBoolExp {_and?: (AuctionMetadataBoolExp[] | null),_not?: (AuctionMetadataBoolExp | null),_or?: (AuctionMetadataBoolExp[] | null),auctionId?: (UuidComparisonExp | null),auction_metadata_dutch_auction?: (DutchAuctionBoolExp | null),endTime?: (BigintComparisonExp | null),id?: (UuidComparisonExp | null),index?: (IntComparisonExp | null),nostrEventId?: (StringComparisonExp | null),price?: (BigintComparisonExp | null),scheduledTime?: (BigintComparisonExp | null),signedPsbt?: (StringComparisonExp | null)}


/** input type for incrementing numeric columns in table "auction_metadata" */
export interface AuctionMetadataIncInput {endTime?: (Scalars['bigint'] | null),index?: (Scalars['Int'] | null),price?: (Scalars['bigint'] | null),scheduledTime?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "auction_metadata" */
export interface AuctionMetadataInsertInput {auctionId?: (Scalars['uuid'] | null),auction_metadata_dutch_auction?: (DutchAuctionObjRelInsertInput | null),endTime?: (Scalars['bigint'] | null),id?: (Scalars['uuid'] | null),index?: (Scalars['Int'] | null),nostrEventId?: (Scalars['String'] | null),price?: (Scalars['bigint'] | null),scheduledTime?: (Scalars['bigint'] | null),signedPsbt?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface AuctionMetadataMaxFieldsGenqlSelection{
    auctionId?: boolean | number
    endTime?: boolean | number
    id?: boolean | number
    index?: boolean | number
    nostrEventId?: boolean | number
    price?: boolean | number
    scheduledTime?: boolean | number
    signedPsbt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "auction_metadata" */
export interface AuctionMetadataMaxOrderBy {auctionId?: (OrderBy | null),endTime?: (OrderBy | null),id?: (OrderBy | null),index?: (OrderBy | null),nostrEventId?: (OrderBy | null),price?: (OrderBy | null),scheduledTime?: (OrderBy | null),signedPsbt?: (OrderBy | null)}


/** aggregate min on columns */
export interface AuctionMetadataMinFieldsGenqlSelection{
    auctionId?: boolean | number
    endTime?: boolean | number
    id?: boolean | number
    index?: boolean | number
    nostrEventId?: boolean | number
    price?: boolean | number
    scheduledTime?: boolean | number
    signedPsbt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "auction_metadata" */
export interface AuctionMetadataMinOrderBy {auctionId?: (OrderBy | null),endTime?: (OrderBy | null),id?: (OrderBy | null),index?: (OrderBy | null),nostrEventId?: (OrderBy | null),price?: (OrderBy | null),scheduledTime?: (OrderBy | null),signedPsbt?: (OrderBy | null)}


/** response of any mutation on the table "auction_metadata" */
export interface AuctionMetadataMutationResponseGenqlSelection{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: AuctionMetadataGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "auction_metadata" */
export interface AuctionMetadataOnConflict {constraint?: AuctionMetadataConstraint,updateColumns?: AuctionMetadataUpdateColumn[],where?: (AuctionMetadataBoolExp | null)}


/** Ordering options when selecting data from "auction_metadata". */
export interface AuctionMetadataOrderBy {auctionId?: (OrderBy | null),auction_metadata_dutch_auction?: (DutchAuctionOrderBy | null),endTime?: (OrderBy | null),id?: (OrderBy | null),index?: (OrderBy | null),nostrEventId?: (OrderBy | null),price?: (OrderBy | null),scheduledTime?: (OrderBy | null),signedPsbt?: (OrderBy | null)}


/** primary key columns input for table: auction_metadata */
export interface AuctionMetadataPkColumnsInput {id?: Scalars['uuid']}


/** input type for updating data in table "auction_metadata" */
export interface AuctionMetadataSetInput {auctionId?: (Scalars['uuid'] | null),endTime?: (Scalars['bigint'] | null),id?: (Scalars['uuid'] | null),index?: (Scalars['Int'] | null),nostrEventId?: (Scalars['String'] | null),price?: (Scalars['bigint'] | null),scheduledTime?: (Scalars['bigint'] | null),signedPsbt?: (Scalars['String'] | null)}


/** aggregate stddev on columns */
export interface AuctionMetadataStddevFieldsGenqlSelection{
    endTime?: boolean | number
    index?: boolean | number
    price?: boolean | number
    scheduledTime?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "auction_metadata" */
export interface AuctionMetadataStddevOrderBy {endTime?: (OrderBy | null),index?: (OrderBy | null),price?: (OrderBy | null),scheduledTime?: (OrderBy | null)}


/** aggregate stddevPop on columns */
export interface AuctionMetadataStddevPopFieldsGenqlSelection{
    endTime?: boolean | number
    index?: boolean | number
    price?: boolean | number
    scheduledTime?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddevPop() on columns of table "auction_metadata" */
export interface AuctionMetadataStddevPopOrderBy {endTime?: (OrderBy | null),index?: (OrderBy | null),price?: (OrderBy | null),scheduledTime?: (OrderBy | null)}


/** aggregate stddevSamp on columns */
export interface AuctionMetadataStddevSampFieldsGenqlSelection{
    endTime?: boolean | number
    index?: boolean | number
    price?: boolean | number
    scheduledTime?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddevSamp() on columns of table "auction_metadata" */
export interface AuctionMetadataStddevSampOrderBy {endTime?: (OrderBy | null),index?: (OrderBy | null),price?: (OrderBy | null),scheduledTime?: (OrderBy | null)}


/** Streaming cursor of the table "auction_metadata" */
export interface AuctionMetadataStreamCursorInput {
/** Stream column input with initial value */
initialValue?: AuctionMetadataStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface AuctionMetadataStreamCursorValueInput {auctionId?: (Scalars['uuid'] | null),endTime?: (Scalars['bigint'] | null),id?: (Scalars['uuid'] | null),index?: (Scalars['Int'] | null),nostrEventId?: (Scalars['String'] | null),price?: (Scalars['bigint'] | null),scheduledTime?: (Scalars['bigint'] | null),signedPsbt?: (Scalars['String'] | null)}


/** aggregate sum on columns */
export interface AuctionMetadataSumFieldsGenqlSelection{
    endTime?: boolean | number
    index?: boolean | number
    price?: boolean | number
    scheduledTime?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "auction_metadata" */
export interface AuctionMetadataSumOrderBy {endTime?: (OrderBy | null),index?: (OrderBy | null),price?: (OrderBy | null),scheduledTime?: (OrderBy | null)}

export interface AuctionMetadataUpdates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (AuctionMetadataIncInput | null),
/** sets the columns of the filtered rows to the given values */
_set?: (AuctionMetadataSetInput | null),
/** filter the rows which have to be updated */
where?: AuctionMetadataBoolExp}


/** aggregate varPop on columns */
export interface AuctionMetadataVarPopFieldsGenqlSelection{
    endTime?: boolean | number
    index?: boolean | number
    price?: boolean | number
    scheduledTime?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by varPop() on columns of table "auction_metadata" */
export interface AuctionMetadataVarPopOrderBy {endTime?: (OrderBy | null),index?: (OrderBy | null),price?: (OrderBy | null),scheduledTime?: (OrderBy | null)}


/** aggregate varSamp on columns */
export interface AuctionMetadataVarSampFieldsGenqlSelection{
    endTime?: boolean | number
    index?: boolean | number
    price?: boolean | number
    scheduledTime?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by varSamp() on columns of table "auction_metadata" */
export interface AuctionMetadataVarSampOrderBy {endTime?: (OrderBy | null),index?: (OrderBy | null),price?: (OrderBy | null),scheduledTime?: (OrderBy | null)}


/** aggregate variance on columns */
export interface AuctionMetadataVarianceFieldsGenqlSelection{
    endTime?: boolean | number
    index?: boolean | number
    price?: boolean | number
    scheduledTime?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "auction_metadata" */
export interface AuctionMetadataVarianceOrderBy {endTime?: (OrderBy | null),index?: (OrderBy | null),price?: (OrderBy | null),scheduledTime?: (OrderBy | null)}


/** columns and relationships of "auction_status" */
export interface AuctionStatusGenqlSelection{
    /** An array relationship */
    dutchAuctions?: (DutchAuctionGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (DutchAuctionSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (DutchAuctionOrderBy[] | null), 
    /** filter the rows returned */
    where?: (DutchAuctionBoolExp | null)} })
    /** An aggregate relationship */
    dutchAuctionsAggregate?: (DutchAuctionAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (DutchAuctionSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (DutchAuctionOrderBy[] | null), 
    /** filter the rows returned */
    where?: (DutchAuctionBoolExp | null)} })
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "auction_status" */
export interface AuctionStatusAggregateGenqlSelection{
    aggregate?: AuctionStatusAggregateFieldsGenqlSelection
    nodes?: AuctionStatusGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "auction_status" */
export interface AuctionStatusAggregateFieldsGenqlSelection{
    count?: { __args: {columns?: (AuctionStatusSelectColumn[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: AuctionStatusMaxFieldsGenqlSelection
    min?: AuctionStatusMinFieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "auction_status". All fields are combined with a logical 'AND'. */
export interface AuctionStatusBoolExp {_and?: (AuctionStatusBoolExp[] | null),_not?: (AuctionStatusBoolExp | null),_or?: (AuctionStatusBoolExp[] | null),dutchAuctions?: (DutchAuctionBoolExp | null),dutchAuctionsAggregate?: (DutchAuctionAggregateBoolExp | null),value?: (StringComparisonExp | null)}


/** Boolean expression to compare columns of type "AuctionStatusEnum". All fields are combined with logical 'AND'. */
export interface AuctionStatusEnumComparisonExp {_eq?: (AuctionStatusEnum | null),_in?: (AuctionStatusEnum[] | null),_isNull?: (Scalars['Boolean'] | null),_neq?: (AuctionStatusEnum | null),_nin?: (AuctionStatusEnum[] | null)}


/** input type for inserting data into table "auction_status" */
export interface AuctionStatusInsertInput {dutchAuctions?: (DutchAuctionArrRelInsertInput | null),value?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface AuctionStatusMaxFieldsGenqlSelection{
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface AuctionStatusMinFieldsGenqlSelection{
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "auction_status" */
export interface AuctionStatusMutationResponseGenqlSelection{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: AuctionStatusGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "auction_status" */
export interface AuctionStatusObjRelInsertInput {data?: AuctionStatusInsertInput,
/** upsert condition */
onConflict?: (AuctionStatusOnConflict | null)}


/** on_conflict condition type for table "auction_status" */
export interface AuctionStatusOnConflict {constraint?: AuctionStatusConstraint,updateColumns?: AuctionStatusUpdateColumn[],where?: (AuctionStatusBoolExp | null)}


/** Ordering options when selecting data from "auction_status". */
export interface AuctionStatusOrderBy {dutchAuctionsAggregate?: (DutchAuctionAggregateOrderBy | null),value?: (OrderBy | null)}


/** primary key columns input for table: auction_status */
export interface AuctionStatusPkColumnsInput {value?: Scalars['String']}


/** input type for updating data in table "auction_status" */
export interface AuctionStatusSetInput {value?: (Scalars['String'] | null)}


/** Streaming cursor of the table "auction_status" */
export interface AuctionStatusStreamCursorInput {
/** Stream column input with initial value */
initialValue?: AuctionStatusStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface AuctionStatusStreamCursorValueInput {value?: (Scalars['String'] | null)}

export interface AuctionStatusUpdates {
/** sets the columns of the filtered rows to the given values */
_set?: (AuctionStatusSetInput | null),
/** filter the rows which have to be updated */
where?: AuctionStatusBoolExp}


/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export interface BigintComparisonExp {_eq?: (Scalars['bigint'] | null),_gt?: (Scalars['bigint'] | null),_gte?: (Scalars['bigint'] | null),_in?: (Scalars['bigint'][] | null),_isNull?: (Scalars['Boolean'] | null),_lt?: (Scalars['bigint'] | null),_lte?: (Scalars['bigint'] | null),_neq?: (Scalars['bigint'] | null),_nin?: (Scalars['bigint'][] | null)}


/** columns and relationships of "dutch_auction" */
export interface DutchAuctionGenqlSelection{
    auctionId?: boolean | number
    collection?: boolean | number
    createdAt?: boolean | number
    currentPrice?: boolean | number
    decreaseAmount?: boolean | number
    /** An aggregate relationship */
    dutchAuctionAuctionMetadataAggregate?: (AuctionMetadataAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (AuctionMetadataSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (AuctionMetadataOrderBy[] | null), 
    /** filter the rows returned */
    where?: (AuctionMetadataBoolExp | null)} })
    /** An array relationship */
    dutch_auction_auction_metadata?: (AuctionMetadataGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (AuctionMetadataSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (AuctionMetadataOrderBy[] | null), 
    /** filter the rows returned */
    where?: (AuctionMetadataBoolExp | null)} })
    /** An object relationship */
    dutch_auction_auction_status?: AuctionStatusGenqlSelection
    id?: boolean | number
    initialPrice?: boolean | number
    inscriptionId?: boolean | number
    ownerOrdinalsAddress?: boolean | number
    reservePrice?: boolean | number
    scheduledISODate?: boolean | number
    secondsBetweenEachDecrease?: boolean | number
    startTime?: boolean | number
    status?: boolean | number
    txid?: boolean | number
    updatedAt?: boolean | number
    utxoCreatedAt?: boolean | number
    utxoNum?: boolean | number
    vout?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "dutch_auction" */
export interface DutchAuctionAggregateGenqlSelection{
    aggregate?: DutchAuctionAggregateFieldsGenqlSelection
    nodes?: DutchAuctionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DutchAuctionAggregateBoolExp {count?: (dutchAuctionAggregateBoolExpCount | null)}


/** aggregate fields of "dutch_auction" */
export interface DutchAuctionAggregateFieldsGenqlSelection{
    avg?: DutchAuctionAvgFieldsGenqlSelection
    count?: { __args: {columns?: (DutchAuctionSelectColumn[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: DutchAuctionMaxFieldsGenqlSelection
    min?: DutchAuctionMinFieldsGenqlSelection
    stddev?: DutchAuctionStddevFieldsGenqlSelection
    stddevPop?: DutchAuctionStddevPopFieldsGenqlSelection
    stddevSamp?: DutchAuctionStddevSampFieldsGenqlSelection
    sum?: DutchAuctionSumFieldsGenqlSelection
    varPop?: DutchAuctionVarPopFieldsGenqlSelection
    varSamp?: DutchAuctionVarSampFieldsGenqlSelection
    variance?: DutchAuctionVarianceFieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "dutch_auction" */
export interface DutchAuctionAggregateOrderBy {avg?: (DutchAuctionAvgOrderBy | null),count?: (OrderBy | null),max?: (DutchAuctionMaxOrderBy | null),min?: (DutchAuctionMinOrderBy | null),stddev?: (DutchAuctionStddevOrderBy | null),stddevPop?: (DutchAuctionStddevPopOrderBy | null),stddevSamp?: (DutchAuctionStddevSampOrderBy | null),sum?: (DutchAuctionSumOrderBy | null),varPop?: (DutchAuctionVarPopOrderBy | null),varSamp?: (DutchAuctionVarSampOrderBy | null),variance?: (DutchAuctionVarianceOrderBy | null)}


/** input type for inserting array relation for remote table "dutch_auction" */
export interface DutchAuctionArrRelInsertInput {data?: DutchAuctionInsertInput[],
/** upsert condition */
onConflict?: (DutchAuctionOnConflict | null)}


/** aggregate avg on columns */
export interface DutchAuctionAvgFieldsGenqlSelection{
    currentPrice?: boolean | number
    decreaseAmount?: boolean | number
    initialPrice?: boolean | number
    reservePrice?: boolean | number
    secondsBetweenEachDecrease?: boolean | number
    startTime?: boolean | number
    utxoCreatedAt?: boolean | number
    vout?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "dutch_auction" */
export interface DutchAuctionAvgOrderBy {currentPrice?: (OrderBy | null),decreaseAmount?: (OrderBy | null),initialPrice?: (OrderBy | null),reservePrice?: (OrderBy | null),secondsBetweenEachDecrease?: (OrderBy | null),startTime?: (OrderBy | null),utxoCreatedAt?: (OrderBy | null),vout?: (OrderBy | null)}


/** Boolean expression to filter rows from the table "dutch_auction". All fields are combined with a logical 'AND'. */
export interface DutchAuctionBoolExp {_and?: (DutchAuctionBoolExp[] | null),_not?: (DutchAuctionBoolExp | null),_or?: (DutchAuctionBoolExp[] | null),auctionId?: (UuidComparisonExp | null),collection?: (StringComparisonExp | null),createdAt?: (TimestamptzComparisonExp | null),currentPrice?: (IntComparisonExp | null),decreaseAmount?: (IntComparisonExp | null),dutch_auction_auction_metadata?: (AuctionMetadataBoolExp | null),dutch_auction_auction_metadataAggregate?: (AuctionMetadataAggregateBoolExp | null),dutch_auction_auction_status?: (AuctionStatusBoolExp | null),id?: (UuidComparisonExp | null),initialPrice?: (IntComparisonExp | null),inscriptionId?: (StringComparisonExp | null),ownerOrdinalsAddress?: (StringComparisonExp | null),reservePrice?: (IntComparisonExp | null),scheduledISODate?: (TimestamptzComparisonExp | null),secondsBetweenEachDecrease?: (IntComparisonExp | null),startTime?: (BigintComparisonExp | null),status?: (AuctionStatusEnumComparisonExp | null),txid?: (StringComparisonExp | null),updatedAt?: (TimestamptzComparisonExp | null),utxoCreatedAt?: (IntComparisonExp | null),utxoNum?: (StringComparisonExp | null),vout?: (IntComparisonExp | null)}


/** input type for incrementing numeric columns in table "dutch_auction" */
export interface DutchAuctionIncInput {currentPrice?: (Scalars['Int'] | null),decreaseAmount?: (Scalars['Int'] | null),initialPrice?: (Scalars['Int'] | null),reservePrice?: (Scalars['Int'] | null),secondsBetweenEachDecrease?: (Scalars['Int'] | null),startTime?: (Scalars['bigint'] | null),utxoCreatedAt?: (Scalars['Int'] | null),vout?: (Scalars['Int'] | null)}


/** input type for inserting data into table "dutch_auction" */
export interface DutchAuctionInsertInput {auctionId?: (Scalars['uuid'] | null),collection?: (Scalars['String'] | null),createdAt?: (Scalars['timestamptz'] | null),currentPrice?: (Scalars['Int'] | null),decreaseAmount?: (Scalars['Int'] | null),dutch_auction_auction_metadata?: (AuctionMetadataArrRelInsertInput | null),dutch_auction_auction_status?: (AuctionStatusObjRelInsertInput | null),id?: (Scalars['uuid'] | null),initialPrice?: (Scalars['Int'] | null),inscriptionId?: (Scalars['String'] | null),ownerOrdinalsAddress?: (Scalars['String'] | null),reservePrice?: (Scalars['Int'] | null),scheduledISODate?: (Scalars['timestamptz'] | null),secondsBetweenEachDecrease?: (Scalars['Int'] | null),startTime?: (Scalars['bigint'] | null),status?: (AuctionStatusEnum | null),txid?: (Scalars['String'] | null),updatedAt?: (Scalars['timestamptz'] | null),utxoCreatedAt?: (Scalars['Int'] | null),utxoNum?: (Scalars['String'] | null),vout?: (Scalars['Int'] | null)}


/** aggregate max on columns */
export interface DutchAuctionMaxFieldsGenqlSelection{
    auctionId?: boolean | number
    collection?: boolean | number
    createdAt?: boolean | number
    currentPrice?: boolean | number
    decreaseAmount?: boolean | number
    id?: boolean | number
    initialPrice?: boolean | number
    inscriptionId?: boolean | number
    ownerOrdinalsAddress?: boolean | number
    reservePrice?: boolean | number
    scheduledISODate?: boolean | number
    secondsBetweenEachDecrease?: boolean | number
    startTime?: boolean | number
    txid?: boolean | number
    updatedAt?: boolean | number
    utxoCreatedAt?: boolean | number
    utxoNum?: boolean | number
    vout?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "dutch_auction" */
export interface DutchAuctionMaxOrderBy {auctionId?: (OrderBy | null),collection?: (OrderBy | null),createdAt?: (OrderBy | null),currentPrice?: (OrderBy | null),decreaseAmount?: (OrderBy | null),id?: (OrderBy | null),initialPrice?: (OrderBy | null),inscriptionId?: (OrderBy | null),ownerOrdinalsAddress?: (OrderBy | null),reservePrice?: (OrderBy | null),scheduledISODate?: (OrderBy | null),secondsBetweenEachDecrease?: (OrderBy | null),startTime?: (OrderBy | null),txid?: (OrderBy | null),updatedAt?: (OrderBy | null),utxoCreatedAt?: (OrderBy | null),utxoNum?: (OrderBy | null),vout?: (OrderBy | null)}


/** aggregate min on columns */
export interface DutchAuctionMinFieldsGenqlSelection{
    auctionId?: boolean | number
    collection?: boolean | number
    createdAt?: boolean | number
    currentPrice?: boolean | number
    decreaseAmount?: boolean | number
    id?: boolean | number
    initialPrice?: boolean | number
    inscriptionId?: boolean | number
    ownerOrdinalsAddress?: boolean | number
    reservePrice?: boolean | number
    scheduledISODate?: boolean | number
    secondsBetweenEachDecrease?: boolean | number
    startTime?: boolean | number
    txid?: boolean | number
    updatedAt?: boolean | number
    utxoCreatedAt?: boolean | number
    utxoNum?: boolean | number
    vout?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "dutch_auction" */
export interface DutchAuctionMinOrderBy {auctionId?: (OrderBy | null),collection?: (OrderBy | null),createdAt?: (OrderBy | null),currentPrice?: (OrderBy | null),decreaseAmount?: (OrderBy | null),id?: (OrderBy | null),initialPrice?: (OrderBy | null),inscriptionId?: (OrderBy | null),ownerOrdinalsAddress?: (OrderBy | null),reservePrice?: (OrderBy | null),scheduledISODate?: (OrderBy | null),secondsBetweenEachDecrease?: (OrderBy | null),startTime?: (OrderBy | null),txid?: (OrderBy | null),updatedAt?: (OrderBy | null),utxoCreatedAt?: (OrderBy | null),utxoNum?: (OrderBy | null),vout?: (OrderBy | null)}


/** response of any mutation on the table "dutch_auction" */
export interface DutchAuctionMutationResponseGenqlSelection{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: DutchAuctionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "dutch_auction" */
export interface DutchAuctionObjRelInsertInput {data?: DutchAuctionInsertInput,
/** upsert condition */
onConflict?: (DutchAuctionOnConflict | null)}


/** on_conflict condition type for table "dutch_auction" */
export interface DutchAuctionOnConflict {constraint?: DutchAuctionConstraint,updateColumns?: DutchAuctionUpdateColumn[],where?: (DutchAuctionBoolExp | null)}


/** Ordering options when selecting data from "dutch_auction". */
export interface DutchAuctionOrderBy {auctionId?: (OrderBy | null),collection?: (OrderBy | null),createdAt?: (OrderBy | null),currentPrice?: (OrderBy | null),decreaseAmount?: (OrderBy | null),dutch_auction_auction_metadataAggregate?: (AuctionMetadataAggregateOrderBy | null),dutch_auction_auction_status?: (AuctionStatusOrderBy | null),id?: (OrderBy | null),initialPrice?: (OrderBy | null),inscriptionId?: (OrderBy | null),ownerOrdinalsAddress?: (OrderBy | null),reservePrice?: (OrderBy | null),scheduledISODate?: (OrderBy | null),secondsBetweenEachDecrease?: (OrderBy | null),startTime?: (OrderBy | null),status?: (OrderBy | null),txid?: (OrderBy | null),updatedAt?: (OrderBy | null),utxoCreatedAt?: (OrderBy | null),utxoNum?: (OrderBy | null),vout?: (OrderBy | null)}


/** primary key columns input for table: dutch_auction */
export interface DutchAuctionPkColumnsInput {auctionId?: Scalars['uuid']}


/** input type for updating data in table "dutch_auction" */
export interface DutchAuctionSetInput {auctionId?: (Scalars['uuid'] | null),collection?: (Scalars['String'] | null),createdAt?: (Scalars['timestamptz'] | null),currentPrice?: (Scalars['Int'] | null),decreaseAmount?: (Scalars['Int'] | null),id?: (Scalars['uuid'] | null),initialPrice?: (Scalars['Int'] | null),inscriptionId?: (Scalars['String'] | null),ownerOrdinalsAddress?: (Scalars['String'] | null),reservePrice?: (Scalars['Int'] | null),scheduledISODate?: (Scalars['timestamptz'] | null),secondsBetweenEachDecrease?: (Scalars['Int'] | null),startTime?: (Scalars['bigint'] | null),status?: (AuctionStatusEnum | null),txid?: (Scalars['String'] | null),updatedAt?: (Scalars['timestamptz'] | null),utxoCreatedAt?: (Scalars['Int'] | null),utxoNum?: (Scalars['String'] | null),vout?: (Scalars['Int'] | null)}


/** aggregate stddev on columns */
export interface DutchAuctionStddevFieldsGenqlSelection{
    currentPrice?: boolean | number
    decreaseAmount?: boolean | number
    initialPrice?: boolean | number
    reservePrice?: boolean | number
    secondsBetweenEachDecrease?: boolean | number
    startTime?: boolean | number
    utxoCreatedAt?: boolean | number
    vout?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "dutch_auction" */
export interface DutchAuctionStddevOrderBy {currentPrice?: (OrderBy | null),decreaseAmount?: (OrderBy | null),initialPrice?: (OrderBy | null),reservePrice?: (OrderBy | null),secondsBetweenEachDecrease?: (OrderBy | null),startTime?: (OrderBy | null),utxoCreatedAt?: (OrderBy | null),vout?: (OrderBy | null)}


/** aggregate stddevPop on columns */
export interface DutchAuctionStddevPopFieldsGenqlSelection{
    currentPrice?: boolean | number
    decreaseAmount?: boolean | number
    initialPrice?: boolean | number
    reservePrice?: boolean | number
    secondsBetweenEachDecrease?: boolean | number
    startTime?: boolean | number
    utxoCreatedAt?: boolean | number
    vout?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddevPop() on columns of table "dutch_auction" */
export interface DutchAuctionStddevPopOrderBy {currentPrice?: (OrderBy | null),decreaseAmount?: (OrderBy | null),initialPrice?: (OrderBy | null),reservePrice?: (OrderBy | null),secondsBetweenEachDecrease?: (OrderBy | null),startTime?: (OrderBy | null),utxoCreatedAt?: (OrderBy | null),vout?: (OrderBy | null)}


/** aggregate stddevSamp on columns */
export interface DutchAuctionStddevSampFieldsGenqlSelection{
    currentPrice?: boolean | number
    decreaseAmount?: boolean | number
    initialPrice?: boolean | number
    reservePrice?: boolean | number
    secondsBetweenEachDecrease?: boolean | number
    startTime?: boolean | number
    utxoCreatedAt?: boolean | number
    vout?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddevSamp() on columns of table "dutch_auction" */
export interface DutchAuctionStddevSampOrderBy {currentPrice?: (OrderBy | null),decreaseAmount?: (OrderBy | null),initialPrice?: (OrderBy | null),reservePrice?: (OrderBy | null),secondsBetweenEachDecrease?: (OrderBy | null),startTime?: (OrderBy | null),utxoCreatedAt?: (OrderBy | null),vout?: (OrderBy | null)}


/** Streaming cursor of the table "dutch_auction" */
export interface DutchAuctionStreamCursorInput {
/** Stream column input with initial value */
initialValue?: DutchAuctionStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface DutchAuctionStreamCursorValueInput {auctionId?: (Scalars['uuid'] | null),collection?: (Scalars['String'] | null),createdAt?: (Scalars['timestamptz'] | null),currentPrice?: (Scalars['Int'] | null),decreaseAmount?: (Scalars['Int'] | null),id?: (Scalars['uuid'] | null),initialPrice?: (Scalars['Int'] | null),inscriptionId?: (Scalars['String'] | null),ownerOrdinalsAddress?: (Scalars['String'] | null),reservePrice?: (Scalars['Int'] | null),scheduledISODate?: (Scalars['timestamptz'] | null),secondsBetweenEachDecrease?: (Scalars['Int'] | null),startTime?: (Scalars['bigint'] | null),status?: (AuctionStatusEnum | null),txid?: (Scalars['String'] | null),updatedAt?: (Scalars['timestamptz'] | null),utxoCreatedAt?: (Scalars['Int'] | null),utxoNum?: (Scalars['String'] | null),vout?: (Scalars['Int'] | null)}


/** aggregate sum on columns */
export interface DutchAuctionSumFieldsGenqlSelection{
    currentPrice?: boolean | number
    decreaseAmount?: boolean | number
    initialPrice?: boolean | number
    reservePrice?: boolean | number
    secondsBetweenEachDecrease?: boolean | number
    startTime?: boolean | number
    utxoCreatedAt?: boolean | number
    vout?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "dutch_auction" */
export interface DutchAuctionSumOrderBy {currentPrice?: (OrderBy | null),decreaseAmount?: (OrderBy | null),initialPrice?: (OrderBy | null),reservePrice?: (OrderBy | null),secondsBetweenEachDecrease?: (OrderBy | null),startTime?: (OrderBy | null),utxoCreatedAt?: (OrderBy | null),vout?: (OrderBy | null)}

export interface DutchAuctionUpdates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (DutchAuctionIncInput | null),
/** sets the columns of the filtered rows to the given values */
_set?: (DutchAuctionSetInput | null),
/** filter the rows which have to be updated */
where?: DutchAuctionBoolExp}


/** aggregate varPop on columns */
export interface DutchAuctionVarPopFieldsGenqlSelection{
    currentPrice?: boolean | number
    decreaseAmount?: boolean | number
    initialPrice?: boolean | number
    reservePrice?: boolean | number
    secondsBetweenEachDecrease?: boolean | number
    startTime?: boolean | number
    utxoCreatedAt?: boolean | number
    vout?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by varPop() on columns of table "dutch_auction" */
export interface DutchAuctionVarPopOrderBy {currentPrice?: (OrderBy | null),decreaseAmount?: (OrderBy | null),initialPrice?: (OrderBy | null),reservePrice?: (OrderBy | null),secondsBetweenEachDecrease?: (OrderBy | null),startTime?: (OrderBy | null),utxoCreatedAt?: (OrderBy | null),vout?: (OrderBy | null)}


/** aggregate varSamp on columns */
export interface DutchAuctionVarSampFieldsGenqlSelection{
    currentPrice?: boolean | number
    decreaseAmount?: boolean | number
    initialPrice?: boolean | number
    reservePrice?: boolean | number
    secondsBetweenEachDecrease?: boolean | number
    startTime?: boolean | number
    utxoCreatedAt?: boolean | number
    vout?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by varSamp() on columns of table "dutch_auction" */
export interface DutchAuctionVarSampOrderBy {currentPrice?: (OrderBy | null),decreaseAmount?: (OrderBy | null),initialPrice?: (OrderBy | null),reservePrice?: (OrderBy | null),secondsBetweenEachDecrease?: (OrderBy | null),startTime?: (OrderBy | null),utxoCreatedAt?: (OrderBy | null),vout?: (OrderBy | null)}


/** aggregate variance on columns */
export interface DutchAuctionVarianceFieldsGenqlSelection{
    currentPrice?: boolean | number
    decreaseAmount?: boolean | number
    initialPrice?: boolean | number
    reservePrice?: boolean | number
    secondsBetweenEachDecrease?: boolean | number
    startTime?: boolean | number
    utxoCreatedAt?: boolean | number
    vout?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "dutch_auction" */
export interface DutchAuctionVarianceOrderBy {currentPrice?: (OrderBy | null),decreaseAmount?: (OrderBy | null),initialPrice?: (OrderBy | null),reservePrice?: (OrderBy | null),secondsBetweenEachDecrease?: (OrderBy | null),startTime?: (OrderBy | null),utxoCreatedAt?: (OrderBy | null),vout?: (OrderBy | null)}


/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface IntComparisonExp {_eq?: (Scalars['Int'] | null),_gt?: (Scalars['Int'] | null),_gte?: (Scalars['Int'] | null),_in?: (Scalars['Int'][] | null),_isNull?: (Scalars['Boolean'] | null),_lt?: (Scalars['Int'] | null),_lte?: (Scalars['Int'] | null),_neq?: (Scalars['Int'] | null),_nin?: (Scalars['Int'][] | null)}


/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface StringComparisonExp {_eq?: (Scalars['String'] | null),_gt?: (Scalars['String'] | null),_gte?: (Scalars['String'] | null),
/** does the column match the given case-insensitive pattern */
_ilike?: (Scalars['String'] | null),_in?: (Scalars['String'][] | null),
/** does the column match the given POSIX regular expression, case insensitive */
_iregex?: (Scalars['String'] | null),_isNull?: (Scalars['Boolean'] | null),
/** does the column match the given pattern */
_like?: (Scalars['String'] | null),_lt?: (Scalars['String'] | null),_lte?: (Scalars['String'] | null),_neq?: (Scalars['String'] | null),
/** does the column NOT match the given case-insensitive pattern */
_nilike?: (Scalars['String'] | null),_nin?: (Scalars['String'][] | null),
/** does the column NOT match the given POSIX regular expression, case insensitive */
_niregex?: (Scalars['String'] | null),
/** does the column NOT match the given pattern */
_nlike?: (Scalars['String'] | null),
/** does the column NOT match the given POSIX regular expression, case sensitive */
_nregex?: (Scalars['String'] | null),
/** does the column NOT match the given SQL regular expression */
_nsimilar?: (Scalars['String'] | null),
/** does the column match the given POSIX regular expression, case sensitive */
_regex?: (Scalars['String'] | null),
/** does the column match the given SQL regular expression */
_similar?: (Scalars['String'] | null)}


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface TimestamptzComparisonExp {_eq?: (Scalars['timestamptz'] | null),_gt?: (Scalars['timestamptz'] | null),_gte?: (Scalars['timestamptz'] | null),_in?: (Scalars['timestamptz'][] | null),_isNull?: (Scalars['Boolean'] | null),_lt?: (Scalars['timestamptz'] | null),_lte?: (Scalars['timestamptz'] | null),_neq?: (Scalars['timestamptz'] | null),_nin?: (Scalars['timestamptz'][] | null)}


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export interface UuidComparisonExp {_eq?: (Scalars['uuid'] | null),_gt?: (Scalars['uuid'] | null),_gte?: (Scalars['uuid'] | null),_in?: (Scalars['uuid'][] | null),_isNull?: (Scalars['Boolean'] | null),_lt?: (Scalars['uuid'] | null),_lte?: (Scalars['uuid'] | null),_neq?: (Scalars['uuid'] | null),_nin?: (Scalars['uuid'][] | null)}

export interface auctionMetadataAggregateBoolExpCount {arguments?: (AuctionMetadataSelectColumn[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (AuctionMetadataBoolExp | null),predicate?: IntComparisonExp}

export interface dutchAuctionAggregateBoolExpCount {arguments?: (DutchAuctionSelectColumn[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (DutchAuctionBoolExp | null),predicate?: IntComparisonExp}


/** mutation root */
export interface mutation_rootGenqlSelection{
    /** delete data from the table: "auction_metadata" */
    deleteAuctionMetadata?: (AuctionMetadataMutationResponseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: AuctionMetadataBoolExp} })
    /** delete single row from the table: "auction_metadata" */
    deleteAuctionMetadataByPk?: (AuctionMetadataGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete data from the table: "auction_status" */
    deleteAuctionStatus?: (AuctionStatusMutationResponseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: AuctionStatusBoolExp} })
    /** delete single row from the table: "auction_status" */
    deleteAuctionStatusByPk?: (AuctionStatusGenqlSelection & { __args: {value: Scalars['String']} })
    /** delete data from the table: "dutch_auction" */
    deleteDutchAuction?: (DutchAuctionMutationResponseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: DutchAuctionBoolExp} })
    /** delete single row from the table: "dutch_auction" */
    deleteDutchAuctionByPk?: (DutchAuctionGenqlSelection & { __args: {auctionId: Scalars['uuid']} })
    /** insert data into the table: "auction_metadata" */
    insertAuctionMetadata?: (AuctionMetadataMutationResponseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: AuctionMetadataInsertInput[], 
    /** upsert condition */
    onConflict?: (AuctionMetadataOnConflict | null)} })
    /** insert a single row into the table: "auction_metadata" */
    insertAuctionMetadataOne?: (AuctionMetadataGenqlSelection & { __args: {
    /** the row to be inserted */
    object: AuctionMetadataInsertInput, 
    /** upsert condition */
    onConflict?: (AuctionMetadataOnConflict | null)} })
    /** insert data into the table: "auction_status" */
    insertAuctionStatus?: (AuctionStatusMutationResponseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: AuctionStatusInsertInput[], 
    /** upsert condition */
    onConflict?: (AuctionStatusOnConflict | null)} })
    /** insert a single row into the table: "auction_status" */
    insertAuctionStatusOne?: (AuctionStatusGenqlSelection & { __args: {
    /** the row to be inserted */
    object: AuctionStatusInsertInput, 
    /** upsert condition */
    onConflict?: (AuctionStatusOnConflict | null)} })
    /** insert data into the table: "dutch_auction" */
    insertDutchAuction?: (DutchAuctionMutationResponseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: DutchAuctionInsertInput[], 
    /** upsert condition */
    onConflict?: (DutchAuctionOnConflict | null)} })
    /** insert a single row into the table: "dutch_auction" */
    insertDutchAuctionOne?: (DutchAuctionGenqlSelection & { __args: {
    /** the row to be inserted */
    object: DutchAuctionInsertInput, 
    /** upsert condition */
    onConflict?: (DutchAuctionOnConflict | null)} })
    /** update data of the table: "auction_metadata" */
    updateAuctionMetadata?: (AuctionMetadataMutationResponseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (AuctionMetadataIncInput | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (AuctionMetadataSetInput | null), 
    /** filter the rows which have to be updated */
    where: AuctionMetadataBoolExp} })
    /** update single row of the table: "auction_metadata" */
    updateAuctionMetadataByPk?: (AuctionMetadataGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (AuctionMetadataIncInput | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (AuctionMetadataSetInput | null), pkColumns: AuctionMetadataPkColumnsInput} })
    /** update multiples rows of table: "auction_metadata" */
    updateAuctionMetadataMany?: (AuctionMetadataMutationResponseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: AuctionMetadataUpdates[]} })
    /** update data of the table: "auction_status" */
    updateAuctionStatus?: (AuctionStatusMutationResponseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (AuctionStatusSetInput | null), 
    /** filter the rows which have to be updated */
    where: AuctionStatusBoolExp} })
    /** update single row of the table: "auction_status" */
    updateAuctionStatusByPk?: (AuctionStatusGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (AuctionStatusSetInput | null), pkColumns: AuctionStatusPkColumnsInput} })
    /** update multiples rows of table: "auction_status" */
    updateAuctionStatusMany?: (AuctionStatusMutationResponseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: AuctionStatusUpdates[]} })
    /** update data of the table: "dutch_auction" */
    updateDutchAuction?: (DutchAuctionMutationResponseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (DutchAuctionIncInput | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (DutchAuctionSetInput | null), 
    /** filter the rows which have to be updated */
    where: DutchAuctionBoolExp} })
    /** update single row of the table: "dutch_auction" */
    updateDutchAuctionByPk?: (DutchAuctionGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (DutchAuctionIncInput | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (DutchAuctionSetInput | null), pkColumns: DutchAuctionPkColumnsInput} })
    /** update multiples rows of table: "dutch_auction" */
    updateDutchAuctionMany?: (DutchAuctionMutationResponseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: DutchAuctionUpdates[]} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface query_rootGenqlSelection{
    /** fetch data from the table: "auction_metadata" */
    auctionMetadata?: (AuctionMetadataGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (AuctionMetadataSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (AuctionMetadataOrderBy[] | null), 
    /** filter the rows returned */
    where?: (AuctionMetadataBoolExp | null)} })
    /** fetch aggregated fields from the table: "auction_metadata" */
    auctionMetadataAggregate?: (AuctionMetadataAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (AuctionMetadataSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (AuctionMetadataOrderBy[] | null), 
    /** filter the rows returned */
    where?: (AuctionMetadataBoolExp | null)} })
    /** fetch data from the table: "auction_metadata" using primary key columns */
    auctionMetadataByPk?: (AuctionMetadataGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "auction_status" */
    auctionStatus?: (AuctionStatusGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (AuctionStatusSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (AuctionStatusOrderBy[] | null), 
    /** filter the rows returned */
    where?: (AuctionStatusBoolExp | null)} })
    /** fetch aggregated fields from the table: "auction_status" */
    auctionStatusAggregate?: (AuctionStatusAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (AuctionStatusSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (AuctionStatusOrderBy[] | null), 
    /** filter the rows returned */
    where?: (AuctionStatusBoolExp | null)} })
    /** fetch data from the table: "auction_status" using primary key columns */
    auctionStatusByPk?: (AuctionStatusGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table: "dutch_auction" */
    dutchAuction?: (DutchAuctionGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (DutchAuctionSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (DutchAuctionOrderBy[] | null), 
    /** filter the rows returned */
    where?: (DutchAuctionBoolExp | null)} })
    /** fetch aggregated fields from the table: "dutch_auction" */
    dutchAuctionAggregate?: (DutchAuctionAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (DutchAuctionSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (DutchAuctionOrderBy[] | null), 
    /** filter the rows returned */
    where?: (DutchAuctionBoolExp | null)} })
    /** fetch data from the table: "dutch_auction" using primary key columns */
    dutchAuctionByPk?: (DutchAuctionGenqlSelection & { __args: {auctionId: Scalars['uuid']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface subscription_rootGenqlSelection{
    /** fetch data from the table: "auction_metadata" */
    auctionMetadata?: (AuctionMetadataGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (AuctionMetadataSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (AuctionMetadataOrderBy[] | null), 
    /** filter the rows returned */
    where?: (AuctionMetadataBoolExp | null)} })
    /** fetch aggregated fields from the table: "auction_metadata" */
    auctionMetadataAggregate?: (AuctionMetadataAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (AuctionMetadataSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (AuctionMetadataOrderBy[] | null), 
    /** filter the rows returned */
    where?: (AuctionMetadataBoolExp | null)} })
    /** fetch data from the table: "auction_metadata" using primary key columns */
    auctionMetadataByPk?: (AuctionMetadataGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table in a streaming manner: "auction_metadata" */
    auctionMetadataStream?: (AuctionMetadataGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (AuctionMetadataStreamCursorInput | null)[], 
    /** filter the rows returned */
    where?: (AuctionMetadataBoolExp | null)} })
    /** fetch data from the table: "auction_status" */
    auctionStatus?: (AuctionStatusGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (AuctionStatusSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (AuctionStatusOrderBy[] | null), 
    /** filter the rows returned */
    where?: (AuctionStatusBoolExp | null)} })
    /** fetch aggregated fields from the table: "auction_status" */
    auctionStatusAggregate?: (AuctionStatusAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (AuctionStatusSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (AuctionStatusOrderBy[] | null), 
    /** filter the rows returned */
    where?: (AuctionStatusBoolExp | null)} })
    /** fetch data from the table: "auction_status" using primary key columns */
    auctionStatusByPk?: (AuctionStatusGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "auction_status" */
    auctionStatusStream?: (AuctionStatusGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (AuctionStatusStreamCursorInput | null)[], 
    /** filter the rows returned */
    where?: (AuctionStatusBoolExp | null)} })
    /** fetch data from the table: "dutch_auction" */
    dutchAuction?: (DutchAuctionGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (DutchAuctionSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (DutchAuctionOrderBy[] | null), 
    /** filter the rows returned */
    where?: (DutchAuctionBoolExp | null)} })
    /** fetch aggregated fields from the table: "dutch_auction" */
    dutchAuctionAggregate?: (DutchAuctionAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (DutchAuctionSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (DutchAuctionOrderBy[] | null), 
    /** filter the rows returned */
    where?: (DutchAuctionBoolExp | null)} })
    /** fetch data from the table: "dutch_auction" using primary key columns */
    dutchAuctionByPk?: (DutchAuctionGenqlSelection & { __args: {auctionId: Scalars['uuid']} })
    /** fetch data from the table in a streaming manner: "dutch_auction" */
    dutchAuctionStream?: (DutchAuctionGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (DutchAuctionStreamCursorInput | null)[], 
    /** filter the rows returned */
    where?: (DutchAuctionBoolExp | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export type QueryGenqlSelection = query_rootGenqlSelection
export type MutationGenqlSelection = mutation_rootGenqlSelection
export type SubscriptionGenqlSelection = subscription_rootGenqlSelection


    const AuctionMetadata_possibleTypes: string[] = ['AuctionMetadata']
    export const isAuctionMetadata = (obj?: { __typename?: any } | null): obj is AuctionMetadata => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionMetadata"')
      return AuctionMetadata_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionMetadataAggregate_possibleTypes: string[] = ['AuctionMetadataAggregate']
    export const isAuctionMetadataAggregate = (obj?: { __typename?: any } | null): obj is AuctionMetadataAggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionMetadataAggregate"')
      return AuctionMetadataAggregate_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionMetadataAggregateFields_possibleTypes: string[] = ['AuctionMetadataAggregateFields']
    export const isAuctionMetadataAggregateFields = (obj?: { __typename?: any } | null): obj is AuctionMetadataAggregateFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionMetadataAggregateFields"')
      return AuctionMetadataAggregateFields_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionMetadataAvgFields_possibleTypes: string[] = ['AuctionMetadataAvgFields']
    export const isAuctionMetadataAvgFields = (obj?: { __typename?: any } | null): obj is AuctionMetadataAvgFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionMetadataAvgFields"')
      return AuctionMetadataAvgFields_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionMetadataMaxFields_possibleTypes: string[] = ['AuctionMetadataMaxFields']
    export const isAuctionMetadataMaxFields = (obj?: { __typename?: any } | null): obj is AuctionMetadataMaxFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionMetadataMaxFields"')
      return AuctionMetadataMaxFields_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionMetadataMinFields_possibleTypes: string[] = ['AuctionMetadataMinFields']
    export const isAuctionMetadataMinFields = (obj?: { __typename?: any } | null): obj is AuctionMetadataMinFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionMetadataMinFields"')
      return AuctionMetadataMinFields_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionMetadataMutationResponse_possibleTypes: string[] = ['AuctionMetadataMutationResponse']
    export const isAuctionMetadataMutationResponse = (obj?: { __typename?: any } | null): obj is AuctionMetadataMutationResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionMetadataMutationResponse"')
      return AuctionMetadataMutationResponse_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionMetadataStddevFields_possibleTypes: string[] = ['AuctionMetadataStddevFields']
    export const isAuctionMetadataStddevFields = (obj?: { __typename?: any } | null): obj is AuctionMetadataStddevFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionMetadataStddevFields"')
      return AuctionMetadataStddevFields_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionMetadataStddevPopFields_possibleTypes: string[] = ['AuctionMetadataStddevPopFields']
    export const isAuctionMetadataStddevPopFields = (obj?: { __typename?: any } | null): obj is AuctionMetadataStddevPopFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionMetadataStddevPopFields"')
      return AuctionMetadataStddevPopFields_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionMetadataStddevSampFields_possibleTypes: string[] = ['AuctionMetadataStddevSampFields']
    export const isAuctionMetadataStddevSampFields = (obj?: { __typename?: any } | null): obj is AuctionMetadataStddevSampFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionMetadataStddevSampFields"')
      return AuctionMetadataStddevSampFields_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionMetadataSumFields_possibleTypes: string[] = ['AuctionMetadataSumFields']
    export const isAuctionMetadataSumFields = (obj?: { __typename?: any } | null): obj is AuctionMetadataSumFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionMetadataSumFields"')
      return AuctionMetadataSumFields_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionMetadataVarPopFields_possibleTypes: string[] = ['AuctionMetadataVarPopFields']
    export const isAuctionMetadataVarPopFields = (obj?: { __typename?: any } | null): obj is AuctionMetadataVarPopFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionMetadataVarPopFields"')
      return AuctionMetadataVarPopFields_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionMetadataVarSampFields_possibleTypes: string[] = ['AuctionMetadataVarSampFields']
    export const isAuctionMetadataVarSampFields = (obj?: { __typename?: any } | null): obj is AuctionMetadataVarSampFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionMetadataVarSampFields"')
      return AuctionMetadataVarSampFields_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionMetadataVarianceFields_possibleTypes: string[] = ['AuctionMetadataVarianceFields']
    export const isAuctionMetadataVarianceFields = (obj?: { __typename?: any } | null): obj is AuctionMetadataVarianceFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionMetadataVarianceFields"')
      return AuctionMetadataVarianceFields_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionStatus_possibleTypes: string[] = ['AuctionStatus']
    export const isAuctionStatus = (obj?: { __typename?: any } | null): obj is AuctionStatus => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionStatus"')
      return AuctionStatus_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionStatusAggregate_possibleTypes: string[] = ['AuctionStatusAggregate']
    export const isAuctionStatusAggregate = (obj?: { __typename?: any } | null): obj is AuctionStatusAggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionStatusAggregate"')
      return AuctionStatusAggregate_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionStatusAggregateFields_possibleTypes: string[] = ['AuctionStatusAggregateFields']
    export const isAuctionStatusAggregateFields = (obj?: { __typename?: any } | null): obj is AuctionStatusAggregateFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionStatusAggregateFields"')
      return AuctionStatusAggregateFields_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionStatusMaxFields_possibleTypes: string[] = ['AuctionStatusMaxFields']
    export const isAuctionStatusMaxFields = (obj?: { __typename?: any } | null): obj is AuctionStatusMaxFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionStatusMaxFields"')
      return AuctionStatusMaxFields_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionStatusMinFields_possibleTypes: string[] = ['AuctionStatusMinFields']
    export const isAuctionStatusMinFields = (obj?: { __typename?: any } | null): obj is AuctionStatusMinFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionStatusMinFields"')
      return AuctionStatusMinFields_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionStatusMutationResponse_possibleTypes: string[] = ['AuctionStatusMutationResponse']
    export const isAuctionStatusMutationResponse = (obj?: { __typename?: any } | null): obj is AuctionStatusMutationResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionStatusMutationResponse"')
      return AuctionStatusMutationResponse_possibleTypes.includes(obj.__typename)
    }
    


    const DutchAuction_possibleTypes: string[] = ['DutchAuction']
    export const isDutchAuction = (obj?: { __typename?: any } | null): obj is DutchAuction => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDutchAuction"')
      return DutchAuction_possibleTypes.includes(obj.__typename)
    }
    


    const DutchAuctionAggregate_possibleTypes: string[] = ['DutchAuctionAggregate']
    export const isDutchAuctionAggregate = (obj?: { __typename?: any } | null): obj is DutchAuctionAggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDutchAuctionAggregate"')
      return DutchAuctionAggregate_possibleTypes.includes(obj.__typename)
    }
    


    const DutchAuctionAggregateFields_possibleTypes: string[] = ['DutchAuctionAggregateFields']
    export const isDutchAuctionAggregateFields = (obj?: { __typename?: any } | null): obj is DutchAuctionAggregateFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDutchAuctionAggregateFields"')
      return DutchAuctionAggregateFields_possibleTypes.includes(obj.__typename)
    }
    


    const DutchAuctionAvgFields_possibleTypes: string[] = ['DutchAuctionAvgFields']
    export const isDutchAuctionAvgFields = (obj?: { __typename?: any } | null): obj is DutchAuctionAvgFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDutchAuctionAvgFields"')
      return DutchAuctionAvgFields_possibleTypes.includes(obj.__typename)
    }
    


    const DutchAuctionMaxFields_possibleTypes: string[] = ['DutchAuctionMaxFields']
    export const isDutchAuctionMaxFields = (obj?: { __typename?: any } | null): obj is DutchAuctionMaxFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDutchAuctionMaxFields"')
      return DutchAuctionMaxFields_possibleTypes.includes(obj.__typename)
    }
    


    const DutchAuctionMinFields_possibleTypes: string[] = ['DutchAuctionMinFields']
    export const isDutchAuctionMinFields = (obj?: { __typename?: any } | null): obj is DutchAuctionMinFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDutchAuctionMinFields"')
      return DutchAuctionMinFields_possibleTypes.includes(obj.__typename)
    }
    


    const DutchAuctionMutationResponse_possibleTypes: string[] = ['DutchAuctionMutationResponse']
    export const isDutchAuctionMutationResponse = (obj?: { __typename?: any } | null): obj is DutchAuctionMutationResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDutchAuctionMutationResponse"')
      return DutchAuctionMutationResponse_possibleTypes.includes(obj.__typename)
    }
    


    const DutchAuctionStddevFields_possibleTypes: string[] = ['DutchAuctionStddevFields']
    export const isDutchAuctionStddevFields = (obj?: { __typename?: any } | null): obj is DutchAuctionStddevFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDutchAuctionStddevFields"')
      return DutchAuctionStddevFields_possibleTypes.includes(obj.__typename)
    }
    


    const DutchAuctionStddevPopFields_possibleTypes: string[] = ['DutchAuctionStddevPopFields']
    export const isDutchAuctionStddevPopFields = (obj?: { __typename?: any } | null): obj is DutchAuctionStddevPopFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDutchAuctionStddevPopFields"')
      return DutchAuctionStddevPopFields_possibleTypes.includes(obj.__typename)
    }
    


    const DutchAuctionStddevSampFields_possibleTypes: string[] = ['DutchAuctionStddevSampFields']
    export const isDutchAuctionStddevSampFields = (obj?: { __typename?: any } | null): obj is DutchAuctionStddevSampFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDutchAuctionStddevSampFields"')
      return DutchAuctionStddevSampFields_possibleTypes.includes(obj.__typename)
    }
    


    const DutchAuctionSumFields_possibleTypes: string[] = ['DutchAuctionSumFields']
    export const isDutchAuctionSumFields = (obj?: { __typename?: any } | null): obj is DutchAuctionSumFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDutchAuctionSumFields"')
      return DutchAuctionSumFields_possibleTypes.includes(obj.__typename)
    }
    


    const DutchAuctionVarPopFields_possibleTypes: string[] = ['DutchAuctionVarPopFields']
    export const isDutchAuctionVarPopFields = (obj?: { __typename?: any } | null): obj is DutchAuctionVarPopFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDutchAuctionVarPopFields"')
      return DutchAuctionVarPopFields_possibleTypes.includes(obj.__typename)
    }
    


    const DutchAuctionVarSampFields_possibleTypes: string[] = ['DutchAuctionVarSampFields']
    export const isDutchAuctionVarSampFields = (obj?: { __typename?: any } | null): obj is DutchAuctionVarSampFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDutchAuctionVarSampFields"')
      return DutchAuctionVarSampFields_possibleTypes.includes(obj.__typename)
    }
    


    const DutchAuctionVarianceFields_possibleTypes: string[] = ['DutchAuctionVarianceFields']
    export const isDutchAuctionVarianceFields = (obj?: { __typename?: any } | null): obj is DutchAuctionVarianceFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDutchAuctionVarianceFields"')
      return DutchAuctionVarianceFields_possibleTypes.includes(obj.__typename)
    }
    


    const mutation_root_possibleTypes: string[] = ['mutation_root']
    export const ismutation_root = (obj?: { __typename?: any } | null): obj is mutation_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismutation_root"')
      return mutation_root_possibleTypes.includes(obj.__typename)
    }
    


    const query_root_possibleTypes: string[] = ['query_root']
    export const isquery_root = (obj?: { __typename?: any } | null): obj is query_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isquery_root"')
      return query_root_possibleTypes.includes(obj.__typename)
    }
    


    const subscription_root_possibleTypes: string[] = ['subscription_root']
    export const issubscription_root = (obj?: { __typename?: any } | null): obj is subscription_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issubscription_root"')
      return subscription_root_possibleTypes.includes(obj.__typename)
    }
    

export const enumAuctionMetadataConstraint = {
   auction_metadata_pkey: 'auction_metadata_pkey' as const
}

export const enumAuctionMetadataSelectColumn = {
   auctionId: 'auctionId' as const,
   endTime: 'endTime' as const,
   id: 'id' as const,
   index: 'index' as const,
   nostrEventId: 'nostrEventId' as const,
   price: 'price' as const,
   scheduledTime: 'scheduledTime' as const,
   signedPsbt: 'signedPsbt' as const
}

export const enumAuctionMetadataUpdateColumn = {
   auctionId: 'auctionId' as const,
   endTime: 'endTime' as const,
   id: 'id' as const,
   index: 'index' as const,
   nostrEventId: 'nostrEventId' as const,
   price: 'price' as const,
   scheduledTime: 'scheduledTime' as const,
   signedPsbt: 'signedPsbt' as const
}

export const enumAuctionStatusConstraint = {
   auction_status_pkey: 'auction_status_pkey' as const
}

export const enumAuctionStatusEnum = {
   FINISHED: 'FINISHED' as const,
   PENDING: 'PENDING' as const,
   RUNNING: 'RUNNING' as const,
   SPENT: 'SPENT' as const,
   STOPPED: 'STOPPED' as const
}

export const enumAuctionStatusSelectColumn = {
   value: 'value' as const
}

export const enumAuctionStatusUpdateColumn = {
   value: 'value' as const
}

export const enumCursorOrdering = {
   ASC: 'ASC' as const,
   DESC: 'DESC' as const
}

export const enumDutchAuctionConstraint = {
   dutch_auction_id_key: 'dutch_auction_id_key' as const,
   dutch_auction_pkey: 'dutch_auction_pkey' as const
}

export const enumDutchAuctionSelectColumn = {
   auctionId: 'auctionId' as const,
   collection: 'collection' as const,
   createdAt: 'createdAt' as const,
   currentPrice: 'currentPrice' as const,
   decreaseAmount: 'decreaseAmount' as const,
   id: 'id' as const,
   initialPrice: 'initialPrice' as const,
   inscriptionId: 'inscriptionId' as const,
   ownerOrdinalsAddress: 'ownerOrdinalsAddress' as const,
   reservePrice: 'reservePrice' as const,
   scheduledISODate: 'scheduledISODate' as const,
   secondsBetweenEachDecrease: 'secondsBetweenEachDecrease' as const,
   startTime: 'startTime' as const,
   status: 'status' as const,
   txid: 'txid' as const,
   updatedAt: 'updatedAt' as const,
   utxoCreatedAt: 'utxoCreatedAt' as const,
   utxoNum: 'utxoNum' as const,
   vout: 'vout' as const
}

export const enumDutchAuctionUpdateColumn = {
   auctionId: 'auctionId' as const,
   collection: 'collection' as const,
   createdAt: 'createdAt' as const,
   currentPrice: 'currentPrice' as const,
   decreaseAmount: 'decreaseAmount' as const,
   id: 'id' as const,
   initialPrice: 'initialPrice' as const,
   inscriptionId: 'inscriptionId' as const,
   ownerOrdinalsAddress: 'ownerOrdinalsAddress' as const,
   reservePrice: 'reservePrice' as const,
   scheduledISODate: 'scheduledISODate' as const,
   secondsBetweenEachDecrease: 'secondsBetweenEachDecrease' as const,
   startTime: 'startTime' as const,
   status: 'status' as const,
   txid: 'txid' as const,
   updatedAt: 'updatedAt' as const,
   utxoCreatedAt: 'utxoCreatedAt' as const,
   utxoNum: 'utxoNum' as const,
   vout: 'vout' as const
}

export const enumOrderBy = {
   ASC: 'ASC' as const,
   ASC_NULLS_FIRST: 'ASC_NULLS_FIRST' as const,
   ASC_NULLS_LAST: 'ASC_NULLS_LAST' as const,
   DESC: 'DESC' as const,
   DESC_NULLS_FIRST: 'DESC_NULLS_FIRST' as const,
   DESC_NULLS_LAST: 'DESC_NULLS_LAST' as const
}
