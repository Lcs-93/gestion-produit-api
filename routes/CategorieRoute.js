import express from 'express';
import { 
    getCategories,
    getCategorieById,
    createCategorie,
    updateCategorie,
    deleteCategorie
} from '../controller/CategorieController.js';

const router = express.Router();

router.get('/', getCategories);
router.get('/:id', getCategorieById);
router.post('/', createCategorie);
router.put('/:id', updateCategorie);
router.delete('/:id', deleteCategorie);

export default router;
