const Hairstyle = require('../models/hairstyleModel');

// Récupérer toutes les coiffures
const getAllHairstyles = async () => {
  return await Hairstyle.find();
};

// Récupérer une coiffure par ID
const getHairstyleById = async (id) => {
  return await Hairstyle.findById(id);
};

// Créer une nouvelle coiffure
const createHairstyle = async (hairstyleData) => {
  const hairstyle = new Hairstyle(hairstyleData);
  return await hairstyle.save();
};

// Mettre à jour une coiffure par ID
const updateHairstyle = async (id, updateData) => {
  return await Hairstyle.findByIdAndUpdate(id, updateData, { new: true });
};

// Supprimer une coiffure par ID
const deleteHairstyle = async (id) => {
  return await Hairstyle.findByIdAndDelete(id);
};

module.exports = {
  getAllHairstyles,
  getHairstyleById,
  createHairstyle,
  updateHairstyle,
  deleteHairstyle,
};