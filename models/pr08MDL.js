const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
  );

  const getProducts = cb => {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(fileContent));
      }
    });
  };

  module.exports = class Product {
    constructor(id, title, imageUrl, description, price) {
      this.id = id;
      this.imageUrl = imageUrl;
      this.price = price;
      this.name = name;
      this.description = description;
      
    }

  static fetchAll(cb) {
    getProducts(cb);
  }

};