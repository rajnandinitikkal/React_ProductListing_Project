require('dotenv').config();
const express= require('express');
const mongoose= require('mongoose');
const cors = require('cors');
const productModel = require('./models/products')

const app= express();
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URL,
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Mongodb connected"))
.catch(err => console.log("MongoDB connection error:", err));

app.get('/getProducts', async (req, res) =>{
    try{
        const products = await productModel.find({});
        res.status(200).json(products);
    }
    catch(err){
        console.error("Error fetching products:", err);
        res.status(500).json({ error: "Failed to fetch products" });
    }
    // productModel.find()
    // .then(products => res.json(products))
    // .catch(err => res.json(err))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})