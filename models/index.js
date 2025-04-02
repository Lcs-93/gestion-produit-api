import Categorie from './Categorie.js';
import Produit from './Produit.js';

// Définir les associations ici
Categorie.hasMany(Produit, { foreignKey: 'CategorieId', as: 'Produits' });
Produit.belongsTo(Categorie, { foreignKey: 'CategorieId', as: 'Categorie' });

export { Categorie, Produit };
