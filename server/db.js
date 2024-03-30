const Pool = require("pg").Pool;

const pool = new Pool({
    user: "uctn5dgmhp8th9",
    password: "pdf6662d822b75b35a14de7bf06222a2f92d7aa50ce596df2b1d1eac1de129c17",
    host: "c7gljno857ucsl.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com",
    port: 5432,
    database: "vocabai"
});

module.exports = pool;