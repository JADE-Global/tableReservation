const mysql = require('mysql');
const moment = require('moment');
const restaurantData = require('./restaurantData.js');
const restaurantsName = restaurantData.restaurantData;
const db = require('./model.js');
const faker = require('faker');


const connection = mysql.createConnection({
    user: 'root',
    password: '',
    database: 'yelp'
});

connection.connect();

module.exports = {
    getRestaurant: () => {
        var restaurants = [];
        for (var i = 0; i < 100; i++) {
            var resName = restaurantsName[i];
            var minCap = (1 + Math.floor(Math.random() * 10));
            var maxCap = (Math.floor(Math.random() * 40 + 10));
            let openHr = 6 + Math.floor(Math.random() * 5);
        
            if (openHr > 10) {
                openHr = `0${openHr}`;
            }
            if (Math.random() >= 0.5) {
                openHr += ':30';
            } else {
                openHr += ':00';
            }
           
            let closeHr = 21 + Math.floor(Math.random() * 5);
            if (closeHr > 24) {
                closeHr -= 24;
            }
            if (Math.random() >= 0.5) {
                closeHr += ':30';
            } else {
                closeHr += ':00';
            }

            restaurants.push({
                res_Id: i,
                name: resName,
                minCapacity: minCap,
                maxCapacity: maxCap,
                openHr: openHr,
                closingHr: closeHr
            });
    
            const query = `INSERT INTO restaurant(name, minCapacity, maxCapacity, openHr, closingHr) VALUES('${resName}',${minCap},${maxCap},'${openHr}','${closeHr}')`;
        
            connection.query(query, (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(query);
                }
            });
        }      
    }
}

const seedReservation = () => {
    var reservation = [];
    for (var i = 0; i < 100; i++) {
        var custName = faker.name.findName();
        var restId = Math.floor(Math.random() * 100);
        var reservationDate = faker.date.future(0.05);
        var randomDate = parseInt(12 + (Math.random() * 10), 10);
        if (Math.random() >= 0.5) {
            randomDate += ':30';
        } else {
            randomDate += ':00';
        }
        randomDate = `${moment(reservationDate).format('YYYY-MM-DD')} ${randomDate}`;
        reservation.push({
            id: i,
            customerName: custName,
            date_time: randomDate,
            restaurantId: restId
        })
        var query = `INSERT INTO reservation(customerName, date_time, restaurantId) VALUES(?,?,?)`;
       // const query = `INSERT INTO restaurant(customerName, date_time, restaurantId) VALUES('${custName}','${randomDate}',${restId})`;

        // var query = `INSERT INTO reservation(customerName, date_time, restaurantId) VALUES('${customerName}', '${randomDate}' , ${restId})`;
        //const query = `INSERT INTO restaurant(name, minCapacity, maxCapacity) VALUES('${resName}',${minCap},${minCap})`;
        //[customerName, randomDate, restId]
        // var query = `INSERT INTO reservation(customerName, date_time, restaurantId) VALUES `;
        // query += `('${customerName}', '${randomDate}', ${restId});`;

        connection.query(query,[custName, randomDate, restId] ,(err,data) => {
            if (err) {
                console.log(err);
            }else {
                // console.log("reservation seeding done");
            }
        });
    }
    return reservation;

};
seedReservation();
