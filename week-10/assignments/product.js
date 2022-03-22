const products = require("../../api/data/products.json")

const getAll = ({ id, name, description, price }) =>
  new Promise((resolve) => {
    let result = Array.from(products);

    if (id) {
      result = result.filter((item) => item.id === id);
    }
    if (name) {
      result = result.filter((item) => item.name === name);
    }
    if (description) {
      result = result.filter((item) => item.description === description);
    }
    if (price) {
      result = result.filter((item) => item.price === Number(price));
    }
    resolve({ code: 200, data: JSON.stringify(result) });
  });

const getById = id => new Promise(resolve => {

    console.log("id: " + id)
    const product = products.find((product) => product.id === id);  
    console.log("product with id: " + product)

    if (product) {
      resolve({ code: 200, data: JSON.stringify(product) });
    }
    else {
        resolve ({code: 404, data: {message: 'No data found for id'}})
    }
    })

module.exports = { getAll, getById }