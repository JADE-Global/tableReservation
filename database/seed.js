const mysql = require('mysql');
const moment = require('moment');
const restaurantData = require('./restaurantData.js');
const restaurants = restaurantData.restaurantData;
const db=require('./model.js');

const connection = mysql.createConnection({
    user: 'root',
    password: '',
    database: 'yelp'
  });
  
  connection.connect();

module.exports={
    seedRestaurant: () => {
        const list = [];
        console.log(restaurants.length-1);
        for (var i = 0; i <= 100; i++) {
            const resName = restaurants[i];
            const minCap = (5 + Math.floor(Math.random() * 10));

            restaurants.push({
                id: i,
                name: resName,
                minCapacity: minCap,
                maxCapacity: minCap,
            });
            console.log(resName);
            const query = `INSERT INTO restaurant(name, minCapacity, maxCapacity) VALUES('${resName}',${minCap},${minCap})`;
            console.log(query);
            connection.query(query, (err) => {
                if (err) { 
                    console.log(err);                    
                 }
                 else {
                     console.log("seeding succeseed");
                 }
            });
        }
        // return restaurant;        
    }
}


