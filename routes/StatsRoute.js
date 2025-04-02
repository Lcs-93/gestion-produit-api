import express from 'express';
import { 
    getProduitsByCategoryCount, 
    getCategoriesWithAtLeastFiveProducts, 
    getAveragePriceByCategory, 
    getCategoriesWithHighAveragePrice, 
    getOutOfStockProducts 
} from '../controller/StatsController.js';

const router = express.Router();

router.get('/produits-par-categorie', getProduitsByCategoryCount);
router.get('/categories-5-produits', getCategoriesWithAtLeastFiveProducts);
router.get('/prix-moyen-par-categorie', getAveragePriceByCategory);
router.get('/categories-prix-sup-100', getCategoriesWithHighAveragePrice);
router.get('/produits-rupture', getOutOfStockProducts);

export default router;
