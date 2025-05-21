import mysql from "mysql2/promise";

export const BD = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blogArtgs',
})