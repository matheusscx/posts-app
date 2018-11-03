const { Pool } = require('pg')
const connectionString = process.env.URIDB;


const pool = new Pool({
    connectionString: connectionString,
});

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    }
}