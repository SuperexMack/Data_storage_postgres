"use strict";
// now we are going to set the value of the data using this file
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
function InsertData() {
    return __awaiter(this, void 0, void 0, function* () {
        let client = yield (0, mainLink_1.Myclient)();
        let makeAlistofuser = `INSERT INTO users (email,password) VALUES ($1,$2) RETURNING id`;
        let insertUserData = ["mackbhai@gmail.com", "ye_password_mera_hai"];
        let response = yield client.query(makeAlistofuser, insertUserData);
        let makelistoftodo = `INSERT INTO todos (title , description , user_id , done) VALUES ($1,$2,$3,$4) RETURNING id`;
        let insertUsertodo = ["groceries", "this is my list", response.rows[0].id, false];
        yield client.query(makelistoftodo, insertUsertodo);
        console.log("Your data had been inserted mje he mje");
    });
}
InsertData();
