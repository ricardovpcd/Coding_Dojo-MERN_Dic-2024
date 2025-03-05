import Product from "./models/product.js";

const createProduct = async (req, res) => {
    try {
        var data = req.body;
        var newProduct = new Product(
            {
                name: data.name,
                quantity: data.quantity,
                isActive: true
            }
        )

        await newProduct.save();

        res.status(201).json( { status: true } );
    } catch (error) {
        res.status(500).json( { status: false, message: "Error en crear producto" } );
    }
}

const listProducts = async (req, res) => {
    var listProducts = await Product.find();
    res.status(200).json( listProducts );
}

const singleProduct = async (req, res) => {
    var id = req.params.id;

    var productFind = await Product.findById(id);

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
            isActive: data.isActive,
            quantity: data.quantity
        }, { runValidators: true })
        
        res.status(200).json();
    } catch (error) {
        res.status(500).json( { status: false, message: "Error en actualizar producto" } );
    }
}

const searchProducts = (req, res) => {
    console.log(req.query.nombre);
    console.log(req.query.cantidad);
    
    res.status(200).json();
}

export default {createProduct, listProducts, singleProduct, deleteProduct, updateProduct, searchProducts}