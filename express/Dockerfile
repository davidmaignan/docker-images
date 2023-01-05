FROM bitnami/express:4.18.2

RUN npm install pg

WORKDIR /app

COPY ./package.json .
COPY ./app.js .

RUN npm install

EXPOSE 3000

CMD [ "node", "app.js" ]