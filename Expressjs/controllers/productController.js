import mongoose from "mongoose";
import Product from "../models/product.js";
import User from "../models/user.js";

const createProduct = async (req, res) => {
    try {
        var data = req.body;
        var newProduct = new Product(
            {
                name: data.name,
                quantity: data.quantity,
                isActive: true,
                user: new mongoose.Types.ObjectId(data.userId),
                address: {
                    description: data.description,
                    zipCode: data.zipCode,
                    country: data.country
                }
            }
        )

        await newProduct.save();

        res.status(201).json( { status: true } );
    } catch (error) {
        res.status(500).json( { status: false, message: error.message } );
    }
}

const listProducts = async (req, res) => {
    var listProducts = await Product.find();
    res.status(200).json( listProducts );
}

const singleProduct = async (req, res) => {
    var id = req.params.id;
    var productFind = await Product.findById(id).populate("user")
    res.status(200).json(productFind);
}

const deleteProduct = async (req, res) => {
    var id = req.params.identificador;

    await Product.findByIdAndDelete(id);

    res.status(200).json();
}

const updateProduct = async (req, res) => {
    try {
        var id = req.params.id;
        var data = req.body;

        await Product.findByIdAndUpdate(id, {
            name: data.name,
            quantity: data.quantity
        }, { runValidators: true })
        
        res.status(200).json();
    } catch (error) {
        res.status(500).json( { status: false, message: "Error en actualizar producto" } );
    }
}

const searchProducts = async (req, res) => {
    var nameSearch = req.query.name;
    var quantitySearch = req.query.quantity;

    var listProducts = await Product.find({
        name: nameSearch,
        quantity: quantitySearch
    })
    
    res.status(200).json(listProducts);
}

export default {createProduct, listProducts, singleProduct, deleteProduct, updateProduct, searchProducts}