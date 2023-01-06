const express = require('express')
const { Client } = require('pg')

const app = express()
const port = 3000

async function connect(){
    const client = new Client({
        user: 'postgres',
        host: 'my-postgres-db',
        database: 'postgres',
        password: 'postgres',
        port: 5432,
      });
    await client.connect();
    return client
}

app.get('/', async (req, res) => {
    try{
        const client = await connect();
        const connectionString = `${client.connectionString} ${client.database}`
        res.send('Hello! You are connected to: ' + connectionString)
    }catch(error){
        res.send('Error connection postgres ' + error)
        console.log(error)
    }
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})