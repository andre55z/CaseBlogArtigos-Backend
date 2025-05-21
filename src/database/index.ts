import mysql from "mysql2/promise";

export const BD = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Lucca1209#',
    database: 'blogArtgs',
})