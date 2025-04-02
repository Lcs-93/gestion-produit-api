import express from 'express';
import { 
    getProduits, 
    getProduitById, 
    createProduit, 
    updateProduit, 
    deleteProduit 
} from '../controller/ProduitController.js';

const router = express.Router();

router.get('/', getProduits);
router.get('/:id', getProduitById);
router.post('/', createProduit);
router.put('/:id', updateProduit);
router.delete('/:id', deleteProduit);

export default router;
