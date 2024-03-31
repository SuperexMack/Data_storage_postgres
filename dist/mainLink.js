"use strict";
// // so this file contains all the important link related to the database
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
exports.Myclient = void 0;
// const {Client} = require("pg")
const pg_1 = require("pg");
function Myclient() {
    return __awaiter(this, void 0, void 0, function* () {
        let client = new pg_1.Client("postgres://qpaiklyv:CLQtRIahcXv-XjRzUQchITEhdM8SaZEI@arjuna.db.elephantsql.com/qpaiklyv");
        yield client.connect();
        return client;
    });
}
exports.Myclient = Myclient;
