```
docker build -t deezy-server:local .
```

### Generate DB package

```
npx genql --endpoint https://guiding-elf-27.hasura.app/v1/graphql --output ./src/generated -H 'x-hasura-admin-secret: XXX'
```

## Deployment

## pg_dump

```
curl --location --request POST 'https://guiding-elf-27.hasura.app/v1alpha1/pg_dump' \
  --header 'Content-Type: application/json' \
  --header 'X-Hasura-Role: admin' \
  --header 'Content-Type: text/plain' \
  --header 'x-hasura-admin-secret: XXX' \
  --data-raw '{ "opts": ["-O", "-x","--inserts",  "--schema", "public"], "clean_output": true, "source": "default"}' > hasura-db.sql
```

## metadata

```
hasura metadata export --endpoint https://guiding-elf-27.hasura.app --admin-secret XYZ
```

## squash migrations

```
 hasura migrate create initial_dboard_migration --from-server --endpoint https://guiding-elf-27.hasura.app --admin-secret XYZ
```

### Metadata Inconsistency

```
0. Back up your database with pg_dump
1. Create a new db
2. Change the string connection string in the deployment
3. Insert your data
```
