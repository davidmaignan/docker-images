# Settings

Initialize postgres image with sample table and data

```sql
-- DB: simple_express_db
CREATE TABLE public.clients (
    id integer NOT NULL,
    name character varying(150) NOT NULL
);
-- Data
COPY public.clients (id, name) FROM stdin;
1	Client 1
2	Client 2
\.
```

```bash
# Create sample container
docker run -d --name simple-express-app-db -p 5432:5432 -e POSTGRES_USER=david -e POSTGRES_PASSWORD=secret_password postgres:12.13-alpine3.17

docker image build . -t toquart/simple-express-db:v1
```