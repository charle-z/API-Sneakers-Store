const Product = require('../models/Product');
const User = require('../models/User');
const SpecialPrice = require('../models/SpecialPrice');

const getProductsInStock = async (req, res) => {
    try {
        const productsInStock = await Product.find({ inStock: true });
        res.json(productsInStock);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getPriceForUserAndProduct = async (req, res) => {
    try {
        const { userId, productName } = req.params;
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

        const specialPriceEntry = await SpecialPrice.findOne({ userId, productName });
        if (specialPriceEntry) {
            return res.json({ price: specialPriceEntry.specialPrice });
        } else {
            const product = await Product.findOne({ name: productName });
            if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
            return res.json({ price: product.price });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getProductsInStock,
    getPriceForUserAndProduct
};