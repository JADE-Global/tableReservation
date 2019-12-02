const mysql = require('mysql');
const seed = require('./seed.js');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'yelp',
});

connection.connect();

module.exports ={
getReservations: (id,callback) => {
  var query = 'SELECT * FROM restaurant;';
     console.log(query);
  connection.query(query, function(err, result) {
    if (err) {
      callback(err);
    } else {
      console.log(result);
      callback(null, result);
    }
  });
}

};