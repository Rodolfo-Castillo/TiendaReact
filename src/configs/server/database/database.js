import mysql from "promise-mysql";

const connection = mysql.createConnection({
    host: "localhost",
    database: "Tienda",
    user: "root",
    password: ""
});

const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection
};