import express from 'express';
import sequelize from './db.js';
import CategorieRoute from './routes/CategorieRoute.js';
import ProduitRoute from './routes/ProduitRoute.js';
import StatsRoute from './routes/StatsRoute.js';
import { Categorie, Produit } from './models/index.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());

app.use('/categories', CategorieRoute);
app.use('/produits', ProduitRoute);
app.use('/stats', StatsRoute);

sequelize.sync({ alter: true }).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`✅ Serveur démarré sur le port ${process.env.PORT}`);
    });
}).catch(error => {
    console.error("❌ Erreur de connexion à la base de données : ", error);
});
