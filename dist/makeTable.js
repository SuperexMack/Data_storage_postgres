"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mainLink_1 = require("./mainLink");
// now we are going to make a table so that we can make a schema
function CreateTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, mainLink_1.Myclient)();
        const createUserTableQuary = `
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    )

    `;
        yield client.query(createUserTableQuary);
        const createTodoQuery = `
CREATE TABLE todos(

id SERIAL PRIMARY KEY,
title TEXT NOT NULL,
description TEXT,
user_id INTEGER REFERENCES users(id),
done BOOLEAN DEFAULT FALSE

)

`;
        yield client.query(createTodoQuery);
        console.log("Table created successfully");
    });
}
CreateTable();
