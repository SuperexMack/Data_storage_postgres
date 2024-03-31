// now this is the last data now here we are going to get the data

import { Myclient } from "./mainLink";

async function displayData(){
    let client = await Myclient()
    const selectData = `SELECT email , password FROM users`
    let user = await client.query(selectData)
    console.log("This is the user data :: ")
    for(let userData of user.rows){
        console.log(`USER ID ${userData.password} and Email is ${userData.email}`)
    }
    console.log("saara data mil gya aab to kush :)")
}

displayData()