const profileService = require('../services/profileService');

// Récupérer tous les profils
const getAllProfiles = async (req, res) => {
  try {
    const { skills, adresses, name } = req.query;
    const filter = { isDeleted: false };

    // Ajouter des filtres dynamiques
    if (skills) filter.skills = { $in: [skills] };
    if (adresses) filter['information.adresses'] = { $regex: adresses, $options: 'i' }; 
    if (name) filter.name = { $regex: name, $options: 'i' }; 

    // Utiliser le service pour récupérer les profils filtrés
    const profiles = await profileService.getAllProfiles(filter);
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer un profil par ID
const getProfileById = async (req, res) => {
  try {
    const profile = await profileService.getProfileById(req.params.id);
    if (!profile) return res.status(404).json({ message: 'Aucun profil trouvé' });
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Créer un nouveau profil
const createProfile = async (req, res) => {
  try {
    const newProfile = await profileService.createProfile(req.body);
    res.status(201).json(newProfile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Mettre à jour un profil par ID
const updateProfile = async (req, res) => {
  try {
    const updatedProfile = await profileService.updateProfile(req.params.id, req.body);
    if (!updatedProfile) return res.status(404).json({ message: 'Profil non trouvé' });
    res.json(updatedProfile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Supprimer un profil par ID (soft-delete)
const deleteProfile = async (req, res) => {
  try {
    const deletedProfile = await profileService.deleteProfile(req.params.id);
    if (!deletedProfile) return res.status(404).json({ message: 'Profil non trouvé' });
    res.json({ message: 'Profil supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Ajouter une expérience à un profil
const addExperience = async (req, res) => {
  try {
    const profile = await profileService.addExperience(req.params.id, req.body);
    if (!profile) return res.status(404).json({ message: 'Profil non trouvé' });
    res.json(profile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Supprimer une expérience d'un profil
const deleteExperience = async (req, res) => {
  try {
    const profile = await profileService.deleteExperience(req.params.id, req.params.expId);
    if (!profile) return res.status(404).json({ message: 'Profil non trouvé' });
    res.json(profile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Ajouter une compétence à un profil
const addSkill = async (req, res) => {
  try {
    const profile = await profileService.addSkill(req.params.id, req.body.skills);
    if (!profile) return res.status(404).json({ message: 'Profil non trouvé' });
    res.json(profile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Supprimer une compétence d'un profil
const deleteSkill = async (req, res) => {
  try {
    const profile = await profileService.deleteSkill(req.params.id, req.params.skilId);
    if (!profile) return res.status(404).json({ message: 'Profil non trouvé' });
    res.json(profile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Ajouter un ami à un profil
const addFriend = async (req, res) => {
  try {
    const profile = await profileService.findById(req.params.id);
    const friend = await profileService.findById(req.body.friendId);
    if (!profile || !friend) return res.status(404).json({ message: 'Profil ou ami non trouvé' });
    profile.friends.push(friend._id);
    await profile.save();
    res.json(profile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Supprimer un ami
const removeFriend = async (req, res) => {
  try {
    const profile = await profileService.findById(req.params.id);
    if (!profile) return res.status(404).json({ message: 'Pas de profil trouvé' });
    profile.friends = profile.friends.filter(friendId => friendId.toString() !== req.params.friendId);
    await profile.save();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour les informations d'un profil
const updateInformation = async (req, res) => {
  try {
    const profile = await profileService.updateInformation(req.params.id, req.body);
    if (!profile) return res.status(404).json({ message: 'Profil non trouvé' });
    res.json(profile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllProfiles,
  getProfileById,
  createProfile,
  updateProfile,
  deleteProfile,
  addExperience,
  deleteExperience,
  addSkill,
  deleteSkill,
  updateInformation,
  addFriend,
  removeFriend,
};