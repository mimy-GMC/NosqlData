const express = require('express');
const connectDB = require('./config/dbConnection');
const swaggerUi = require('swagger-ui-express');
const specs = require('./config/swagger');
const hairstyleRoutes = require('./src/routes/hairstyleRoutes');
const profileRoutes = require('./src/routes/profileRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connexion à MongoDB
connectDB();

// Routes
app.use('/api/hairstyles', hairstyleRoutes);
app.use('/api/profiles', profileRoutes);

// Documentation Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur se lance sur le port ${PORT}`);
});