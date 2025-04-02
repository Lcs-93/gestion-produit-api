import sequelize from '../db.js';
import Categorie from '../models/Categorie.js';
import Produit from '../models/Produit.js';

// 1. Afficher le nombre de produits par catégorie
export const getProduitsByCategoryCount = async (req, res) => {
    try {
        const result = await Categorie.findAll({
            include: [{
                model: Produit,
                as: 'Produits',  // Préciser l'alias ici
                attributes: []
            }],
            attributes: [
                'nom',
                [sequelize.fn('COUNT', sequelize.col('Produits.id')), 'nombre_produits']
            ],
            group: ['Categorie.id']
        });
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 2. Afficher les catégories ayant au moins 5 produits
export const getCategoriesWithAtLeastFiveProducts = async (req, res) => {
    try {
        const result = await Categorie.findAll({
            include: [{
                model: Produit,
                as: 'Produits',  // Préciser l'alias ici
                attributes: []
            }],
            attributes: [
                'nom',
                [sequelize.fn('COUNT', sequelize.col('Produits.id')), 'nombre_produits']
            ],
            group: ['Categorie.id'],
            having: sequelize.where(sequelize.fn('COUNT', sequelize.col('Produits.id')), '>=', 5)
        });
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 3. Calculer la moyenne des prix des produits pour chaque catégorie
export const getAveragePriceByCategory = async (req, res) => {
    try {
        const result = await Categorie.findAll({
            include: [{
                model: Produit,
                as: 'Produits',  // Préciser l'alias ici
                attributes: []
            }],
            attributes: [
                'nom',
                [sequelize.fn('AVG', sequelize.col('Produits.prix')), 'prix_moyen']
            ],
            group: ['Categorie.id']
        });
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 4. Afficher les catégories où la moyenne des prix des produits est supérieure à 100
export const getCategoriesWithHighAveragePrice = async (req, res) => {
    try {
        const result = await Categorie.findAll({
            include: [{
                model: Produit,
                as: 'Produits',  // Préciser l'alias ici
                attributes: []
            }],
            attributes: [
                'nom',
                [sequelize.fn('AVG', sequelize.col('Produits.prix')), 'prix_moyen']
            ],
            group: ['Categorie.id'],
            having: sequelize.where(sequelize.fn('AVG', sequelize.col('Produits.prix')), '>', 100)
        });
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 5. Identifier les produits en rupture de stock (stock = 0)
export const getOutOfStockProducts = async (req, res) => {
    try {
        const result = await Produit.findAll({
            where: { stock: 0 }
        });
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
