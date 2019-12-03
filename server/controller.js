const Models= require('./model.js');

module.exports= {
    seedRestaurant : (req,res) =>{
    Models.seedRestaurant((err,data) => {
      if(err) {
        res.status(400).send(err);
      } else {
        res.send(data);
      }
    });
  }
}