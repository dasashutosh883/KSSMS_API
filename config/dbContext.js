const sql = require("mssql")


module.exports = {
    query: (query) => {
        return new Promise((resolve, reject) => {
            sql.connect("<connection-string>", function (err) {
                if (err) reject(err);
                sql.query(query, function (err, recordset) {
                    if (err) reject(err)
                    resolve(recordset);
                });
            });
        })
    }
};