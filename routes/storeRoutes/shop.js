const path = require('path');

const express = require('express');

const shopController = require('../../controllers/storeControllers/shop');
<<<<<<< HEAD
const isAuth = require('../../middleware/is-auth');
=======
//const isAuth = require('../../middleware/is-auth');
>>>>>>> e1e5e0c5f5eb14e4c091a93ac25d98a3eff47ed4

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

<<<<<<< HEAD
router.get('/cart', isAuth, shopController.getCart);

router.post('/cart', isAuth, shopController.postCart);

router.post('/cart-delete-item', isAuth, shopController.postCartDeleteProduct);

router.post('/create-order', isAuth, shopController.postOrder);

router.get('/orders', isAuth, shopController.getOrders);
=======
router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.post('/create-order', shopController.postOrder);

router.get('/orders', shopController.getOrders);
>>>>>>> e1e5e0c5f5eb14e4c091a93ac25d98a3eff47ed4

module.exports = router;
