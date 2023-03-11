const db = require("../db/DBConnection");



module.exports = {

    getAllEmployess: async () => {


        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM employees`, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        })

    }


}