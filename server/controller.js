const Models= require('../database/model.js');

module.exports= {
    getRestaurant : (req,res) =>{
    Models.getRestaurant((err,data) => {
      if(err) {
        res.status(400).send(err);
      } else {
          console.log(data);
        res.send(data);
      }
    });
  }
}