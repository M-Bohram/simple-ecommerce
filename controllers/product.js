const Product = require("../models/Product");
const products = require("../products.json");

const getProducts = async (req, res) => {

    const products = await Product.find();
    return res.json(products);
}

const populateProducts = async (req, res) => {

    const result = await Product.insertMany(products);
    return res.json({result})
}

module.exports = { getProducts, populateProducts };