const Pool = require("pg").Pool
const pool = new Pool({
    user: "toma",
    password: "1234",
    host: "192.168.0.24",
    port: "5432",
    database: "db"
})

module.exports = pool