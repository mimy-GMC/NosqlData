# API de Gestion de Profils et Coiffures Africaines Féminines

Cette API permet de gérer des profils utilisateurs (travailleurs) et des coiffures africaines féminines en utilisant MongoDB, Mongoose, et Docker.

## Prérequis

- Node
- nodemon
- Docker
- MongoDB
- Swagger

## Installation

1. Clonez le repository :
'''
   git clone https://github.com/votre-utilisateur/votre-repo.git
   cd votre-repo

2. Installez les dépendances :

npm install

3. Créez un fichier .env à la racine du projet avec les variables suivantes :

MONGODB_URI=mongodb://root:example@localhost:27017/coiffure-africaine?authSource=admin
PORT=3000

4. Démarrez les services avec Docker Compose :

docker compose up

5. Démarrez l'application avec :

npm start 

6. Ou le démarrez en mode développement (rechargement automatique lors des modifications) :

npm run dev

7. L'application sera disponible à l'adresse :

 http://localhost:3000.

8. Routes API
Profils

    GET /api/profiles - Récupérer tous les profils
    POST /api/profiles - Créer un nouveau profil
    GET /api/profiles/:id - Récupérer un profil par ID
    PUT /api/profiles/:id - Mettre à jour un profil par ID
    DELETE /api/profiles/:id - Supprimer un profil par ID (soft-delete)
    POST /api/profiles/:id/experience - Ajouter une expérience à un profil
    DELETE /api/profiles/:id/experience/:expId - Supprimer une expérience d'un profil
    POST /api/profiles/:id/skills - Ajouter une compétence à un profil
    DELETE /api/profiles/:id/skills/:skillId - Supprimer une compétence d'un profil
    PUT /api/profiles/:id/information - Mettre à jour les informations d'un profil
    POST /api/profiles/:id/friends - Ajouter un ami à un profil
    DELETE /api/profiles/:id/friends/:friendId - Supprimer un ami d'un profil

Filtres pour les Profils

    GET /api/profiles?skills=compétence - Filtrer les profils par compétence
    GET /api/profiles?adresses=adresse - Filtrer les profils par adresse
    GET /api/profiles?name=nom - Filtrer les profils par nom

Coiffures

    GET /api/hairstyles - Récupérer toutes les coiffures
    POST /api/hairstyles - Créer une nouvelle coiffure
    GET /api/hairstyles/:id - Récupérer une coiffure par ID
    PUT /api/hairstyles/:id - Mettre à jour une coiffure par ID
    DELETE /api/hairstyles/:id - Supprimer une coiffure par ID

Filtres pour les Coiffures

    GET /api/hairstyles?category=catégorie - Filtrer les coiffures par catégorie
    GET /api/hairstyles?price=prix - Filtrer les coiffures par prix maximum
    GET /api/hairstyles?duration=durée - Filtrer les coiffures par durée maximum (en heures)

## Structure du Projet

- **docker-compose.yml** : Configuration Docker pour lancer MongoDB et l'application Node.js.

- **Dockerfile** : Définition de l'image Docker pour l'application.

- **.env** : Stocke les variables d'environnement (URI MongoDB, port, etc.).

- **app.js** : Point d'entrée de l'application, configure le serveur Express et les routes.

- **config/dbConnection.js** : Gère la connexion à la base de données MongoDB.

- **controllers/** : Contient les contrôleurs pour gérer la logique métier des profils et des coiffures.

- **models/** : Définit les modèles Mongoose pour les profils et les coiffures.

- **routes/** : Définit les routes de l'API pour les profils et les coiffures.

- **services/** : Contient la logique pour interagir avec la base de données.

- **/config/swagger.js** : Configure la documentation Swagger pour l'API.


## Documentation Swagger

La documentation de l'API est disponible à l'adresse http://localhost:3000/api-docs.

## Auteurs
Miryam GAKOSSO