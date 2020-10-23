const router = require('express').Router();
const { getProducts, populateProducts } = require('../controllers/product')

router.get('/', getProducts);
router.post('/', populateProducts);

module.exports =  router;