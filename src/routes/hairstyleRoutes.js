const express = require('express');
const router = express.Router();
const hairstyleController = require('../controllers/hairstyleController');

/**
 * @swagger
 * tags:
 *   name: Hairstyles
 *   description: Liste des routes pour les différents styles de Coiffures africaines féminines.
 */

/**
 * @swagger
 * /hairstyles:
 *   get:
 *     summary: Récupérer toutes les coiffures avec filtres
 *     tags: [Hairstyles]
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Filtrer par catégorie (par exemple "Tresses", "Dreadlocks")
 *       - in: query
 *         name: price
 *         schema:
 *           type: number
 *         description: Filtrer par prix maximum
 *       - in: query
 *         name: duration
 *         schema:
 *           type: number
 *         description: Filtrer par durée maximum en heures
 *     responses:
 *       200:
 *         description: Liste des coiffures récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Hairstyle'
 */
router.get('/', hairstyleController.getAllHairstyles);

/**
 * @swagger
 * /hairstyles:
 *   post:
 *     summary: Créer une nouvelle coiffure
 *     tags: [Hairstyles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Hairstyle'
 *     responses:
 *       201:
 *         description: Coiffure créée avec succès.
 *       400:
 *         description: Données invalides.
 */
router.post('/', hairstyleController.createHairstyle);

/**
 * @swagger
 * /hairstyles/{id}:
 *   get:
 *     summary: Récupérer une coiffure par ID
 *     tags: [Hairstyles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la coiffure
 *     responses:
 *       200:
 *         description: Coiffure récupérée avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Hairstyle'
 *       404:
 *         description: Coiffure non trouvée.
 */
router.get('/:id', hairstyleController.getHairstyleById);

/**
 * @swagger
 * /hairstyles/{id}:
 *   put:
 *     summary: Mettre à jour une coiffure par ID
 *     tags: [Hairstyles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la coiffure
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Hairstyle'
 *     responses:
 *       200:
 *         description: Coiffure mise à jour avec succès.
 *       404:
 *         description: Coiffure non trouvée.
 *       400:
 *         description: Données invalides.
 */
router.put('/:id', hairstyleController.updateHairstyle);

/**
 * @swagger
 * /hairstyles/{id}:
 *   delete:
 *     summary: Supprimer une coiffure par ID
 *     tags: [Hairstyles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la coiffure
 *     responses:
 *       200:
 *         description: Coiffure supprimée avec succès.
 *       404:
 *         description: Coiffure non trouvée.
 */
router.delete('/:id', hairstyleController.deleteHairstyle);

module.exports = router;