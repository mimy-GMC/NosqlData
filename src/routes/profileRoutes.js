const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

/**
 * @swagger
 * tags:
 *   name: Profils
 *   description: Cet API permet de gérer des profils utilisateur (travailleurs) avec MongoDB et Mongoose, docker.
 */

/**
 * @swagger
 * /profiles:
 *   get:
 *     summary: Récupérer tous les profils
 *     tags: [Profils]
 *     parameters:
 *       - in: query
 *         name: skills
 *         schema:
 *           type: string
 *         description: Filtrer par compétence
 *       - in: query
 *         name: adresses
 *         schema:
 *           type: string
 *         description: Filtrer par localisation (adresse)
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Filtrer par nom
 *     responses:
 *       200:
 *         description: Liste des profils récupérée avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Profile'
 */
router.get('/', profileController.getAllProfiles);

/**
 * @swagger
 * /profiles:
 *   post:
 *     summary: Créer un nouveau profil
 *     tags: [Profils]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Profile'
 *     responses:
 *       201:
 *         description: Profil créé avec succès.
 *       400:
 *         description: Données invalides.
 */
router.post('/', profileController.createProfile);

/**
 * @swagger
 * /profiles/{id}:
 *   get:
 *     summary: Récupérer un profil par ID
 *     tags: [Profils]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du profil
 *     responses:
 *       200:
 *         description: Profil récupéré avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 *       404:
 *         description: Profil non trouvé.
 */
router.get('/:id', profileController.getProfileById);

/**
 * @swagger
 * /profiles/{id}:
 *   put:
 *     summary: Mettre à jour un profil par ID
 *     tags: [Profils]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du profil
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Profile'
 *     responses:
 *       200:
 *         description: Profil mis à jour avec succès.
 *       404:
 *         description: Profil non trouvé.
 *       400:
 *         description: Données invalides.
 */
router.put('/:id', profileController.updateProfile);

/**
 * @swagger
 * /profiles/{id}:
 *   delete:
 *     summary: Supprimer un profil par ID (soft-delete)
 *     tags: [Profils]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du profil
 *     responses:
 *       200:
 *         description: Profil supprimé avec succès.
 *       404:
 *         description: Profil non trouvé.
 */
router.delete('/:id', profileController.deleteProfile);

/**
 * @swagger
 * /profiles/{id}/experience:
 *   post:
 *     summary: Ajouter une expérience à un profil
 *     tags: [Profils]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du profil
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Experience'
 *     responses:
 *       200:
 *         description: Expérience ajoutée avec succès.
 *       404:
 *         description: Profil non trouvé.
 *       400:
 *         description: Données invalides.
 */
router.post('/:id/experience', profileController.addExperience);

/**
 * @swagger
 * /profiles/{id}/experience/{expId}:
 *   delete:
 *     summary: Supprimer une expérience d'un profil
 *     tags: [Profils]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du profil
 *       - in: path
 *         name: expId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'expérience
 *     responses:
 *       200:
 *         description: Expérience supprimée avec succès.
 *       404:
 *         description: Profil ou expérience non trouvé.
 */
router.delete('/:id/experience/:expId', profileController.deleteExperience);

/**
 * @swagger
 * /profiles/{id}/skills:
 *   post:
 *     summary: Ajouter une compétence à un profil
 *     tags: [Profils]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du profil
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               skills:
 *                 type: string
 *     responses:
 *       200:
 *         description: Compétence ajoutée avec succès.
 *       404:
 *         description: Profil non trouvé.
 *       400:
 *         description: Données invalides.
 */
router.post('/:id/skills', profileController.addSkill);

/**
 * @swagger
 * /profiles/{id}/skills/{skillId}:
 *   delete:
 *     summary: Supprimer une compétence d'un profil
 *     tags: [Profils]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du profil
 *       - in: path
 *         name: skillId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la compétence
 *     responses:
 *       200:
 *         description: Compétence supprimée avec succès.
 *       404:
 *         description: Profil ou compétence non trouvé.
 */
router.delete('/:id/skills/:skillId', profileController.deleteSkill);

/**
 * @swagger
 * /profiles/{id}/information:
 *   put:
 *     summary: Mettre à jour les informations d'un profil
 *     tags: [Profils]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du profil
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Information'
 *     responses:
 *       200:
 *         description: Informations mises à jour avec succès.
 *       404:
 *         description: Profil non trouvé.
 *       400:
 *         description: Données invalides.
 */
router.put('/:id/information', profileController.updateInformation);

/**
 * @swagger
 * /profiles/{id}/friends:
 *   post:
 *     summary: Ajouter un ami à un profil
 *     tags: [Profils]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du profil
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               friendId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Ami ajouté avec succès.
 *       404:
 *         description: Profil ou ami non trouvé.
 *       400:
 *         description: Données invalides.
 */
router.post('/:id/friends', profileController.addFriend);

/**
 * @swagger
 * /profiles/{id}/friends/{friendId}:
 *   delete:
 *     summary: Supprimer un ami d'un profil
 *     tags: [Profils]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du profil
 *       - in: path
 *         name: friendId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'ami
 *     responses:
 *       200:
 *         description: Ami supprimé avec succès.
 *       404:
 *         description: Profil ou ami non trouvé.
 */
router.delete('/:id/friends/:friendId', profileController.removeFriend);

module.exports = router;