# Gestion Produit API

Gestion Produit API est une application backend développée avec **Node.js** utilisant **Express** et une base de données **MariaDB**. Elle permet de créer, lire, mettre à jour et supprimer des produits via une API REST.

## 📌 Description
Cette API est conçue pour gérer des produits avec des opérations CRUD complètes (Create, Read, Update, Delete). Elle utilise un environnement Node.js avec Express pour gérer les routes et des requêtes SQL pour interagir avec une base de données MariaDB.

## 🚀 Fonctionnalités principales
- **Création d'un produit** (`POST /api/products`)
- **Récupération de tous les produits** (`GET /api/products`)
- **Récupération d'un produit par ID** (`GET /api/products/:id`)
- **Mise à jour d'un produit** (`PUT /api/products/:id`)
- **Suppression d'un produit** (`DELETE /api/products/:id`)

## 📂 Structure du projet
```
.
├── app.js            # Point d'entrée principal de l'application
├── routes/           # Définition des routes de l'API
├── controllers/      # Logique métier de chaque route
├── models/           # Modèles pour interagir avec la base de données
├── config/           # Configuration de la base de données
├── package.json      # Dépendances Node.js
├── README.md         # Documentation du projet
```

## 🔧 Prérequis
- Node.js >= 18.x
- npm ou yarn
- MariaDB

## 📥 Installation
1. Clonez ce dépôt :
```bash
$ git clone https://github.com/Lcs-93/gestion-produit-api.git
```
2. Rendez-vous dans le répertoire cloné :
```bash
$ cd gestion-produit-api
```
3. Installez les dépendances :
```bash
$ npm install
```
4. Configurez votre base de données MariaDB dans le fichier `config/database.js` :
```javascript
module.exports = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gestion_produit'
};
```
5. Créez la base de données MariaDB et importez les tables nécessaires.
6. Démarrez le serveur Node.js :
```bash
$ npm start
```

## 📌 Utilisation
L'application est accessible via l'adresse :
```
http://localhost:3000
```

### Utilisation avec Postman
Pour tester les routes de l'API, vous pouvez utiliser Postman en configurant les requêtes comme suit :
- **POST** `/api/products` : Ajouter un produit (Envoyer un JSON avec les informations du produit).
- **GET** `/api/products` : Récupérer tous les produits.
- **GET** `/api/products/:id` : Récupérer un produit spécifique par son ID.
- **PUT** `/api/products/:id` : Modifier un produit (Envoyer un JSON avec les nouvelles informations).
- **DELETE** `/api/products/:id` : Supprimer un produit.

## 🛠️ Technologies utilisées
- **Node.js** (Backend)
- **Express** (Framework web)
- **MariaDB** (Base de données)
- **JavaScript** (Langage principal)

## 📄 Licence
Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 📣 Auteur
Projet créé par **Lcs-93**. N'hésitez pas à me contacter pour toute suggestion ou amélioration !

---

🔥 Bon développement !

