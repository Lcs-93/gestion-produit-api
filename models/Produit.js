import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Produit = sequelize.define('Produit', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    prix: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: 10,
            max: 500
        }
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0
        }
    },
    codeEAN: {
        type: DataTypes.STRING,
        unique: true
    }
}, {
    tableName: 'Produits'
});

export default Produit;
