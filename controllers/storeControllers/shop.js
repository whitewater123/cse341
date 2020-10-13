const Product = require('../../models/storeModels/product');
const Order = require('../../models/storeModels/order');

exports.getProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      console.log(products);
      res.render('storeViews/shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      res.render('storeViews/shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.find()
    .then(products => {
      res.render('storeViews/shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products = user.cart.items;
      res.render('storeViews/shop/cart', {
<<<<<<< HEAD
        path: '/products/cart',
=======
        path: '/cart',
>>>>>>> e1e5e0c5f5eb14e4c091a93ac25d98a3eff47ed4
        pageTitle: 'Your Cart',
        products: products
      });
    })
    .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then(product => {
      return req.user.addToCart(product);
    })
    .then(result => {
      console.log(result);
<<<<<<< HEAD
      res.redirect('/products/cart');
=======
      res.redirect('/cart');
>>>>>>> e1e5e0c5f5eb14e4c091a93ac25d98a3eff47ed4
    });
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .removeFromCart(prodId)
    .then(result => {
<<<<<<< HEAD
      res.redirect('/products/cart');
=======
      res.redirect('/cart');
>>>>>>> e1e5e0c5f5eb14e4c091a93ac25d98a3eff47ed4
    })
    .catch(err => console.log(err));
};

exports.postOrder = (req, res, next) => {
  req.user
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products = user.cart.items.map(i => {
        return { quantity: i.quantity, product: { ...i.productId._doc } };
      });
      const order = new Order({
        user: {
          email: req.user.email,
          userId: req.user
        },
        products: products
      });
      return order.save();
    })
    .then(result => {
      return req.user.clearCart();
    })
    .then(() => {
<<<<<<< HEAD
      res.redirect('/products/orders');
=======
      res.redirect('/orders');
>>>>>>> e1e5e0c5f5eb14e4c091a93ac25d98a3eff47ed4
    })
    .catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
  Order.find({ 'user.userId': req.user._id })
    .then(orders => {
      res.render('storeViews/shop/orders', {
<<<<<<< HEAD
        path: '/products/orders',
=======
        path: '/orders',
>>>>>>> e1e5e0c5f5eb14e4c091a93ac25d98a3eff47ed4
        pageTitle: 'Your Orders',
        orders: orders
      });
    })
    .catch(err => console.log(err));
};
