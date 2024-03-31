// // so this file contains all the important link related to the database

// const {Client} = require("pg")
import { Client } from 'pg';

export async function Myclient(){
    let client = new Client("postgres://qpaiklyv:CLQtRIahcXv-XjRzUQchITEhdM8SaZEI@arjuna.db.elephantsql.com/qpaiklyv")
    await client.connect()
    return client
}

