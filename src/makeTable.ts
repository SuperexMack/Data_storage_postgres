import {Myclient} from "./mainLink"

// now we are going to make a table so that we can make a schema

async function CreateTable(){
    const client  = await Myclient()
    const createUserTableQuary = `
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    )

    `;

await client.query(createUserTableQuary)

const createTodoQuery = `
CREATE TABLE todos(

id SERIAL PRIMARY KEY,
title TEXT NOT NULL,
description TEXT,
user_id INTEGER REFERENCES users(id),
done BOOLEAN DEFAULT FALSE

)

`

await client.query(createTodoQuery)

console.log("Table created successfully")

}

CreateTable()