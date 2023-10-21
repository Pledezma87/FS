import Product from '../models/ProductModel.js';  

// CREATE: Agregar un nuevo producto
export const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.created(product);  
    } catch (error) {
        res.badRequest(error);  
    }
};

// READ: Obtener todos los productos
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.ok(products);  
    } catch (error) {
        res.internalServerError(error);  
    }
};

// READ: Obtener un producto por ID
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.notFound();  
        }
        res.ok(product);  
    } catch (error) {
        res.internalServerError(error);  
    }
};

// UPDATE: Actualizar un producto por ID
export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!product) {
            return res.notFound();  
        }
        res.ok(product);  
    } catch (error) {
        res.badRequest(error);  
    }
};

// DELETE: Eliminar un producto por ID
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.notFound();  
        }
        res.ok(product);  
    } catch (error) {
        res.internalServerError(error);  
    }
};
