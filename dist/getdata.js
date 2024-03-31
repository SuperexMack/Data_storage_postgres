"use strict";
// now this is the last data now here we are going to get the data
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
function displayData() {
    return __awaiter(this, void 0, void 0, function* () {
        let client = yield (0, mainLink_1.Myclient)();
        const selectData = `SELECT email , password FROM users`;
        let user = yield client.query(selectData);
        console.log("This is the user data :: ");
        for (let userData of user.rows) {
            console.log(`USER ID ${userData.password} and Email is ${userData.email}`);
        }
        console.log("saara data mil gya aab to kush :)");
    });
}
displayData();
