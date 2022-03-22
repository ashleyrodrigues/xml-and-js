const products = require("./products.json")
const getAll = () =>
    new Promise((resolve) => resolve({ code: 200, data: products }))
const getById = id => new Promise(resolve => {
    const product = products.find((item) => item.id === id);
    if (product) {
        resolve({ code: 200, data: product })
    }
    else {
        resolve({ code: 404, data: { message: 'No data found for id'} })
    }
})
module.exports = { getAll, getById }