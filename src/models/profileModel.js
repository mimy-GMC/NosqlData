const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  entreprise: { type: String, required: true },
  dates: { type: String, required: true }, 
  description: { type: String, required: true },
});

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  experience: [experienceSchema], //expériences
  skills: [{ type: String }], //compétences
  information: {
    posteActuel: { type: String },
    adresses: { type: String },
    ReseauxSociaux: { type: String },
  },
  isDeleted: { type: Boolean, default: false }, // Pour le soft-delete,
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }],
});

// J'exporte le modèle Profile
module.exports = mongoose.model('Profile', profileSchema);