const express = require('express')
const app = express()
const port = 1113
const path=require('path');
const db= require('../database/model.js');
const seed= require('../database/seed.js');
const Controller = require('./controller.js');

app.use('/', express.static(path.join(__dirname, '../client/dist/')))

//app.get('/repo', (req, res) => res.send('Hello World from server!'))

app.get('/api/:restaurantId', (req, res) => {
    const id = req.params.restaurantId;
    //console.log("server id",id);
    db.getReservations(id,(err, result) => {
      if (err) {
          console.log(err);
        res.send(err);
      } else {
          console.log("data received",result);
        res.send(result);
      }
    });
  });
app.get('/seeding/restaurant', (req, res) => {
    console.log("seeding api");
    Controller.getRestaurant(req,res);
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))