import product from "../models/product.js";

export const getProducts = async(req, res) => {
    try{
        const products = await product.find({});
        res.json(products);
    } catch(error){
        res.status(500).json({message: "Error fetching products"});
    }
};

export const getProductById = async(req, res) =>{
    try{
        const product = await product.findById(req.params.id);
        res.json(product);
    }catch(error){
        res.status(500).json({message:"Product not found"});
    }
};