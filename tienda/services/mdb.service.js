const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test_tienda_cafe'
});

const Mdb = {
    query: function (query, fields){
        return new Promise( (resolve, reject) => {
            connection.connect();
            connection.query(query, fields, function (error, results, fields) {
                if(error){
                    reject(error)
                } else {
                    resolve(results)
                }
            })
        })
    }
}
module.exports = Mdb