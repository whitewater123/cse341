const path = require('path');

const express = require('express');

const adminController = require('../../controllers/storeControllers/admin');
<<<<<<< HEAD
const isAuth = require('../../middleware/is-auth');
=======
//const isAuth = require('../../middleware/is-auth');
>>>>>>> e1e5e0c5f5eb14e4c091a93ac25d98a3eff47ed4

const router = express.Router();

// /admin/add-product => GET
<<<<<<< HEAD
router.get('/add-product', isAuth, adminController.getAddProduct);

// /admin/products => GET
router.get('/products', isAuth, adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', isAuth, adminController.postAddProduct);

router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

router.post('/edit-product', isAuth, adminController.postEditProduct);

router.post('/delete-product', isAuth, adminController.postDeleteProduct);
=======
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);
>>>>>>> e1e5e0c5f5eb14e4c091a93ac25d98a3eff47ed4

module.exports = router;
