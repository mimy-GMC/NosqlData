const Profile = require('../models/profileModel');

// Récupérer tous les profils (sauf ceux supprimés)
const getAllProfiles = async () => {
  return await Profile.find({ isDeleted: false }).populate('friends', 'name email');
};

// Récupérer un profil par ID
const getProfileById = async (id) => {
  return await Profile.findOne({ _id: id, isDeleted: false }).populate('friends', 'name email');
};

// Créer un nouveau profil
const createProfile = async (profileData) => {
  const profile = new Profile(profileData);
  return await profile.save();
};

// Mettre à jour un profil par ID
const updateProfile = async (id, updateData) => {
  return await Profile.findByIdAndUpdate(id, updateData, { new: true });
};

// Supprimer un profil par ID (soft-delete)
const deleteProfile = async (id) => {
  return await Profile.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
};

// Ajouter une expérience à un profil
const addExperience = async (id, experienceData) => {
  const profile = await Profile.findById(id);
  if (!profile) return null;
  profile.experience.push(experienceData);
  return await profile.save();
};

// Supprimer une expérience d'un profil
const deleteExperience = async (id, expId) => {
  const profile = await Profile.findById(id);
  if (!profile) return null;
  profile.experience = profile.experience.filter(exp => exp._id.toString() !== expId);
  return await profile.save();
};

// Ajouter une compétence à un profil
const addSkill = async (id, skillData) => {
  const profile = await Profile.findById(id);
  if (!profile) return null;
  profile.skills.push(skillData);
  return await profile.save();
};

// Supprimer une compétence d'un profil
const deleteSkill = async (id, skillId) => {
  const profile = await Profile.findById(id);
  if (!profile) return null;
  profile.skills = profile.skills.filter(skill => skill !== skillId);
  return await profile.save();
};

// Ajouter un ami à un profil
const addFriend = async (id, friendId) => {
  const profile = await Profile.findById(id);
  const friend = await Profile.findById(friendId);
  if (!profile || !friend) return null;
  profile.friends.push(friendId);
  return await profile.save();
};

// Supprimer un ami d'un profil
const removeFriend = async (id, friendId) => {
  const profile = await Profile.findById(id);
  if (!profile) return null;
  profile.friends = profile.friends.filter(friend => friend.toString() !== friendId);
  return await profile.save();
};

// Mettre à jour les informations d'un profil
const updateInformation = async (id, informationData) => {
  const profile = await Profile.findById(id);
  if (!profile) return null;
  profile.information = informationData;
  return await profile.save();
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