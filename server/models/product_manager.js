// 1. import mongoose
const mongoose = require("mongoose");

// 2.1 create the schema with all keys & validation
const ProductManagerSchema = new mongoose.Schema({
    title:{
        type: String,
        // require: [true, "Title is required"],
        // minlength: [2, "Title must be at least 2 characters"]
    },
    price:{
        type: Number,
        require: [true, "Price is required"],
        // min:[1, "Price must be between 1 and 10"],
        // max:[10, "Price must be between 1 and 10"]
    },
    description:{
        type: String,
        // require: [true, "Description is required"],
        // minlength: [4, "Description must be at least 4 characters"]
    }

}, {timestamps: true}) // 2.2 enable the timestamp for createdAt & updatedAt


// 3. create a mongoose model based on the schema & export it
const Product_Manager = mongoose.model('Product_Manager', ProductManagerSchema )

module.exports = Product_Manager

