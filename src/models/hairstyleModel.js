const mongoose = require('mongoose');

const hairstyleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true }, // Durée en heures des tresses
  imageUrl: { type: String, required: true },
  category: { type: String, required: true }, // Par exemple : "Tresses", "Dreadlocks", etc.
  createdAt: { type: Date, default: Date.now },
});

//J'exporte le modèle
module.exports = mongoose.model('Hairstyle', hairstyleSchema);