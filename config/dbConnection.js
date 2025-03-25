const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB est connecté');
  } catch (error) {
    console.error('La connexion mongoDb est erronée:', error);
    process.exit(1);
  }
};

//J'exporte le fichier de connexion à ma BDD
module.exports = connectDB;