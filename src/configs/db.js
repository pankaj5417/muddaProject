const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("",{
    //useNewUrlParser:true,
    //useUnifiedTopology:true,
    //useCreateIndex:true,
    
  });
};
