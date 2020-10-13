const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  products: [
    {
      product: { type: Object, required: true },
      quantity: { type: Number, required: true }
    }
  ],
  user: {
    email: {
      type: String,
      required: true
    },
    userId: {
      type: Schema.Types.ObjectId,
<<<<<<< HEAD
      required: false,
=======
      required: true,
>>>>>>> e1e5e0c5f5eb14e4c091a93ac25d98a3eff47ed4
      ref: 'User'
    }
  }
});

module.exports = mongoose.model('Order', orderSchema);
