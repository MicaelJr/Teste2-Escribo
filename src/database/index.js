const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, {}, (error) => {
  if (error) {
    console.log("Falha ao autenticar no mongodb");
    console.log(error);
    return;
  }
  console.log("conexão com mongodb estavel");
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
