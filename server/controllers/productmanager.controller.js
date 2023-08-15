// 1. import the model
const Product_Manager = require ("../models/product_manager")

// 2. export all the functions with placeholder
module.exports.apiTest = (req, res)=>{
    res.json({message: "ok"})
}

// Example: 
module.exports.allProducts = (req, res)=>{
    Product_Manager.find()
    .then(productList => res.json (productList))
    .catch(err => res.json (err))
}

module.exports.oneProducts = (req, res)=>{
    Product_Manager.findOne({_id: req.params.id})
    .then(oneProduct => res.json (oneProduct))
    .catch(err => res.json (err))
}

module.exports.addProducts = (req, res)=>{
    Product_Manager.create(req.body)
        .then(newProduct => res.json (newProduct))
        .catch(err => res.json (err))
}

module.exports.updateProducts = (req, res)=>{
    Product_Manager.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
    .then(updatedProduct => res.json(updatedProduct))
    .catch(err => res.json (err))
}

module.exports.deleteProducts = (req, res)=>{
    Product_Manager.deleteOne({_id: req.params.id})
    .then(status => res.json (status))
    .catch(err => res.json (err))
}

