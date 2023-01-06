const express = require('express')
const { Client } = require('pg')

const app = express()
const port = 3000
const user = process.env.USER || 'postgres';
const host = process.env.HOST || 'db';
const database = process.env.DB || 'postgres'
const password = process.env.PASSWORD || 'postgres'

async function connect(){
    const client = new Client({
        user: user,
        host: host,
        database: database,
        password: password,
        port: 5432,
      });
    await client.connect();
    return client
}

app.get('/ready', async(req, res) => {
    console.log('ready')
    try{
        const client = await connect();
        res.sendStatus(200)
    } catch(error){
       res.sendStatus(500)
    }
});

app.get('/', async (req, res) => {
    res.send('Hello! What\'s up');
})

async function fetchClient() {
    const client = await connect();
    return client.query('SELECT * from clients')
}

app.get('/clients', async (req, res) => {
    const clients = await fetchClient();
    res.json(clients.rows);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})