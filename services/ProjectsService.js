const db = require("../db/DBConnection");



module.exports = {

    getAllProjects: async () => {


        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM projects`, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        })

    }


}