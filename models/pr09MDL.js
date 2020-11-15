const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10'
  );

  const getPokemon = cb => {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(fileContent));
      }
    });
  };

  module.exports = class Product {
    constructor(id, title, imageUrl, url, price) {
      this.id = id;
      this.imageUrl = imageUrl;
      this.price = price;
      this.name = name;
      this.url = url;
      
    }

  static fetchAll(cb) {
    getProducts(cb);
  }

};