const db = require("../db/DBConnection");
const GenericResponse = require("../dto/GenericResponse");






// ********************            Hash Password Util         **********************************


const hashPass = require('../utils/hashPassword');









module.exports = {



  saveUser: async (req, res) => {



    const { name, email, password, role } = req.body


    const query = 'SELECT * FROM users WHERE email = ?';


    db.query(query, [email], (err, result) => {


      if (err) {

        return res.status(500).send(new GenericResponse("Error in inserting user", err));

      }


      else {

        if (result.length > 0) {

          return res.status(409).send(new GenericResponse("User already exists", null));

        }


        else {


          const insertQuery = 'INSERT INTO users (name, email, role, password) VALUES (?, ?, ?, ?)';

          hashPass(password, (hash, error) => {


            if (error) {

              return res.status(409).send(new GenericResponse("Error in hashing password", error));

            }


            else {


              db.query(insertQuery, [name, email, role, hash], (error, results) => {


                if (error) {

                  return res.status(500).send(new GenericResponse("Error in inserting user", error));

                }


                else {

                  return res.status(200).send(new GenericResponse("User succesfully added", results));

                }
              })
            }
          })

        }



      }
    })

  }




}