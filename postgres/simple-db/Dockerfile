FROM postgres:11-alpine as dumper

ENV POSTGRES_USER=david
ENV POSTGRES_PASSWORD=secret_password
ENV POSTGRES_DB=simple_express_db
ENV PGDATA=/data

COPY init-script.sql /docker-entrypoint-initdb.d/

RUN ["sed", "-i", "s/exec \"$@\"/echo \"skipping...\"/", "/usr/local/bin/docker-entrypoint.sh"]

RUN ["/usr/local/bin/docker-entrypoint.sh", "postgres"]

FROM postgres:11-alpine

COPY --from=dumper /data $PGDATA