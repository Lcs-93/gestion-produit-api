import Produit from '../models/Produit.js';
import Categorie from '../models/Categorie.js';
import { generateCodeEAN } from '../utils/generateCodeEAN.js'; // Assurez-vous de bien importer la fonction

// Lister tous les produits
export const getProduits = async (req, res) => {
    try {
        const produits = await Produit.findAll({
            include: [{ model: Categorie, as: 'Categorie' }]
        });
        res.json(produits);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Récupérer un produit par ID
export const getProduitById = async (req, res) => {
    try {
        const produit = await Produit.findByPk(req.params.id, {
            include: [{ model: Categorie, as: 'Categorie' }]
        });
        if (!produit) return res.status(404).json({ message: "Produit introuvable" });

        res.json(produit);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Créer un nouveau produit
export const createProduit = async (req, res) => {
    try {
        const { nom, description, prix, stock, CategorieId } = req.body;

        // Validation des données reçues
        if (!nom || !prix || !stock || !CategorieId) {
            return res.status(400).json({ message: "Les champs 'nom', 'prix', 'stock' et 'CategorieId' sont obligatoires." });
        }

        // Génération automatique du code EAN
        const codeEAN = generateCodeEAN();

        // Création du produit
        const produit = await Produit.create({ 
            nom, 
            description, 
            prix, 
            stock, 
            codeEAN, 
            CategorieId 
        });

        // Récupération du produit créé avec sa catégorie associée
        const produitCree = await Produit.findByPk(produit.id, {
            include: [{ model: Categorie, as: 'Categorie' }]
        });

        res.status(201).json(produitCree);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mettre à jour un produit
export const updateProduit = async (req, res) => {
    try {
        const produit = await Produit.findByPk(req.params.id);
        if (!produit) return res.status(404).json({ message: "Produit introuvable" });

        await produit.update(req.body);

        const produitMisAJour = await Produit.findByPk(req.params.id, {
            include: [{ model: Categorie, as: 'Categorie' }]
        });

        res.json(produitMisAJour);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Supprimer un produit
export const deleteProduit = async (req, res) => {
    try {
        const produit = await Produit.findByPk(req.params.id);
        if (!produit) return res.status(404).json({ message: "Produit introuvable" });

        await produit.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
