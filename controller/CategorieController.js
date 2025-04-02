import Categorie from '../models/Categorie.js';
import Produit from '../models/Produit.js';

// Lister toutes les catégories
export const getCategories = async (req, res) => {
    try {
        const categories = await Categorie.findAll();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Récupérer une catégorie par ID
export const getCategorieById = async (req, res) => {
    try {
        const categorie = await Categorie.findByPk(req.params.id, { include: [{ model: Produit, as: 'Produits' }] });
        if (!categorie) return res.status(404).json({ message: "Catégorie introuvable" });

        res.json(categorie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Créer une nouvelle catégorie
export const createCategorie = async (req, res) => {
    try {
        const categorie = await Categorie.create(req.body);
        res.status(201).json(categorie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mettre à jour une catégorie
export const updateCategorie = async (req, res) => {
    try {
        const categorie = await Categorie.findByPk(req.params.id, { include: [{ model: Produit, as: 'Produits' }] });
        if (!categorie) return res.status(404).json({ message: "Catégorie introuvable" });

        await categorie.update(req.body);
        res.json(categorie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Supprimer une catégorie (empêcher si elle contient des produits)
export const deleteCategorie = async (req, res) => {
    try {
        const categorie = await Categorie.findByPk(req.params.id, { include: [{ model: Produit, as: 'Produits' }] });

        if (!categorie) {
            return res.status(404).json({ message: "Catégorie introuvable" });
        }

        if (categorie.Produits && categorie.Produits.length > 0) {
            return res.status(400).json({ message: "Impossible de supprimer une catégorie qui contient des produits." });
        }

        await categorie.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
