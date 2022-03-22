const http = require("http")

const product = require("./products.js")
const server = http.createServer(async (req, res) => {
    if (req.url === '/api/products') {
        res.writeHead(200, { "Content-Type": "application/json" })
        const { code, data } = await product.getAll();
        console.log(data);
        res.end(JSON.stringify(data));
    }
    else {
        console.log("here server")
        res.writeHead(404, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ message: 'No route Found' }));
    }
});
server.listen(8080);    