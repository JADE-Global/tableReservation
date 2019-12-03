const mysql = require('mysql');
const seed = require('./seed.js');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'yelp'
});

connection.connect();

module.exports ={
getReservations: (id,callback) => {
  var query = 'SELECT * FROM restaurant;';
  // var query=`SELECT restaurant.name, reservation.customerName,reservation.date_time FROM reservation 
  //   INNER JOIN restaurant ON reservation.restaurantId = restaurant.id
  //   WHERE restaurantId = ${id}`;

     console.log(query);
  connection.query(query, function(err, result) {
    if (err) {
      callback(err);
    } else {
      console.log(result);
      callback(null, result);
    }
  });
},

seedRestaurant: (id,callback) => {
 var query='SELECT * FROM restaurant;';
  console.log(query);
  connection.query(query, function(err, result) {
    if (err) {
      callback(err);
    } else {
      console.log("result is ",result);
      callback(null, result);
    }
  });

}

};