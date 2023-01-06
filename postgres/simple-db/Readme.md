# Settings

```bash
# Create sample container
docker run -d --name simple-express-app-db -p 5432:5432 -e POSTGRES_USER=david -e POSTGRES_PASSWORD=secret_password postgres:12.13-alpine3.17

docker image build . -t toquart/simple-express-db:v1
```