const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://juniomicael:12345670@desafio2-escribo.zmmgfje.mongodb.net/",
  {},
  (error) => {
    if (error) {
      console.log("Falha ao autenticar no mongodb");
      console.log(error);
      return;
    }
    console.log("conexão com mongodb estavel");
  }
);

mongoose.Promise = global.Promise;

module.exports = mongoose;
