const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    imgUrl:String,
    name:String,
    price:Number,
    description:String,
    category:String,
    rating:Number
});

export default mongoose.model("products", productSchema);
