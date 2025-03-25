const hairstyleService = require('../services/hairstyleService');

// Récupérer toutes les coiffures
const getAllHairstyles = async (req, res) => {
  try {
    const { category, price, duration } = req.query;
    const filter = {};

    // Ajouter des filtres dynamiques
    if (category) filter.category = { $regex: category, $options: 'i' }; 
    if (price) filter.price = { $lte: parseFloat(price) }; 
    if (duration) filter.duration = { $lte: parseFloat(duration) }; 

    // Utiliser le service pour récupérer les hairstyles filtrés
    const hairstyles = await hairstyleService.getAllHairstyles(filter);
    res.json(hairstyles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer une coiffure par ID
const getHairstyleById = async (req, res) => {
  try {
    const hairstyle = await hairstyleService.getHairstyleById(req.params.id);
    if (!hairstyle) return res.status(404).json({ message: 'Aucune coiffure trouvée' });
    res.json(hairstyle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Créer une nouvelle coiffure
const createHairstyle = async (req, res) => {
  try {
    const newHairstyle = await hairstyleService.createHairstyle(req.body);
    res.status(201).json(newHairstyle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Mettre à jour une coiffure par ID
const updateHairstyle = async (req, res) => {
  try {
    const updatedHairstyle = await hairstyleService.updateHairstyle(req.params.id, req.body);
    if (!updatedHairstyle) return res.status(404).json({ message: 'Coiffure non trouvée' });
    res.json(updatedHairstyle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Supprimer une coiffure par ID
const deleteHairstyle = async (req, res) => {
  try {
    const deletedHairstyle = await hairstyleService.deleteHairstyle(req.params.id);
    if (!deletedHairstyle) return res.status(404).json({ message: 'Aucune coiffure est supprimée' });
    res.json(deletedHairstyle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllHairstyles,
  getHairstyleById,
  createHairstyle,
  updateHairstyle,
  deleteHairstyle,
};