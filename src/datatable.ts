// now we are going to set the value of the data using this file

import { Myclient } from "./mainLink";

async function InsertData(){

    let client = await Myclient()
    let makeAlistofuser = `INSERT INTO users (email,password) VALUES ($1,$2) RETURNING id`
    let insertUserData = ["mackbhai@gmail.com" , "ye_password_mera_hai"]
    let response  =  await client.query(makeAlistofuser , insertUserData)

    let makelistoftodo = `INSERT INTO todos (title , description , user_id , done) VALUES ($1,$2,$3,$4) RETURNING id`
    let insertUsertodo = ["groceries" , "this is my list" , response.rows[0].id , false]
    await client.query(makelistoftodo , insertUsertodo)

    console.log("Your data had been inserted mje he mje")


}

InsertData()

