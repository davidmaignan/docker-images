# Express image

```bash
# Create a postgres container
docker run -d --name my-postgres-db -e POSTGRES_PASSWORD=postgres postgres

# Create a container app
docker run -d -p 3000:3000 --name my-express-app toquart/express-pg:v1

# Create a network and attach container
docker create network -d bridge my-express-network
docker connect my-express-network my-postgres-db
docker connect my-express-network my-express-app

```