const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
          title: 'API REST de gestion de profil et des coiffures africaines feminines',
          version: '1.0.0',
          description: 'Cet API permet de gérer les profils utilisateurs (coiffeuses) avec MongoDB, Mongoose, Docker',
        },
        servers: [
          {
            url: 'http://localhost:3000 ',
            description: 'Serveur local',
          },
        ],
        components: {
          schemas: {
            Profile: {
              type: 'object',
              properties: {
                name: { type: 'string' },
                email: { type: 'string' },
                experience: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/Experience' },
                },
                skills: {
                  type: 'array',
                  items: { type: 'string' },
                },
                information: { $ref: '#/components/schemas/Information' },
                isDeleted: { type: 'boolean' },
                friends: {
                  type: 'array',
                  items: { type: 'string' },
                },
              },
            },
            Experience: {
              type: 'object',
              properties: {
                titre: { type: 'string' },
                entreprise: { type: 'string' },
                dates: { type: 'string' },
                description: { type: 'string' },
              },
            },
            Information: {
              type: 'object',
              properties: {
                posteActuel: { type: 'string' },
                adresses: { type: 'string' },
                ReseauxSociaux: { type: 'string' },
              },
            },
            Hairstyle: {
              type: 'object',
              properties: {
                name: { type: 'string' },
                description: { type: 'string' },
                price: { type: 'number' },
                duration: { type: 'number' },
                imageUrl: { type: 'string' },
                category: { type: 'string' },
              },
            },
          },
        },
    },
    // Chemin vers les fichiers de routes
    apis: [path.join(__dirname, '../src/routes/*.js')], 
};

const specs = swaggerJsdoc(options);
module.exports = specs;