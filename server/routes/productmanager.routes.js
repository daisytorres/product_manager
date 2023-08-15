// 1. import the controller
const ProductManagerController = require ("../controllers/productmanager.controller")
// 2. export a function that reads one argument (app)
module.exports = (app)=>{
    app.get("/api/testing", ProductManagerController.apiTest);
    app.get("/api/products", ProductManagerController.allProducts);
    app.get("/api/products/:id",ProductManagerController.oneProducts );
    app.post("/api/products", ProductManagerController.addProducts);
    app.patch("/api/products/:id", ProductManagerController.updateProducts);
    app.delete("/api/products/:id", ProductManagerController.deleteProducts)   
}
// 3. include all the routes with the corresponding logic from controller