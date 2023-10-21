import express from 'express';
import {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} from '../controllers/ProductController.js'; 

const ProductRouters = express.Router();

ProductRouters.post('/', createProduct);
ProductRouters.get('/', getProducts);
ProductRouters.get('/:id', getProductById);
ProductRouters.patch('/:id', updateProduct);
ProductRouters.delete('/:id', deleteProduct);

export default ProductRouters;
