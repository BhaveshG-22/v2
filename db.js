const { MongoClient } = require('mongodb')
const env = require('dotenv').config()

const express = require('express')
const app = express()
app.use(express.json())
// env

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(process.env.MONGODB_URI);

let dbConnection
let uri = process.env.MONGODB_URI


module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
            .then((client) => {
                dbConnection = client.db()

                return cb()
            })
            .catch(err => {
                console.log(err)
                return cb(err)
            })
    },
    getDb: () => dbConnection

}