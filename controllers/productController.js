const { StatusCodes } = require('http-status-codes');
const Product = require('../models/product');

exports.createProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body);

        return res.status(StatusCodes.OK).json({
            success: true,
            data: product,
        })
    } catch (error) {
        next(error);
    }
};

exports.getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.findAll();

        return res.status(StatusCodes.OK).json({
            success: true,
            data: products,
        })
    } catch (error) {
        next(error);
    }
};

exports.getProduct = async (req, res, next) => {
    try {
        const { id } = req.params;

        const product = await Product.findByPk(id);

        return res.status(StatusCodes.OK).json({
            success: true,
            data: product,
        })
    } catch (error) {
        next(error);
    }
};

exports.updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;

        await Product.update(req.body, {
            where: { id },
        });

        const updatedProduct = await Product.findByPk(id);

        return res.status(StatusCodes.OK).json({
            success: true,
            data: updatedProduct,
        })
    } catch (error) {
        next(error);
    }
};

exports.deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;

        const product = await Product.destroy({
            where: { id },
        });

        return res.status(StatusCodes.OK).json({
            success: true,
            data: product,
        })
    } catch (error) {
        next(error);
    }
};
