const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "pc_rent_platform",
});

connection.connect((err)=>{
    if (err) console.log(err);
    else {
        console.log("connected!");
        executeStatement();
    }
});

async function executeStatement(){
    const result = await connection
        .promise()
        .execute("SELECT * FROM 'addresses' WHERE 'id' =  1");
    console.log(result);    
}