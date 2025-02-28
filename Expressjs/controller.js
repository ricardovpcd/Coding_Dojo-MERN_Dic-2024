const createProduct = (req, res) => {
    // request = contener datos que se envian del frontend
    //console.log(req.body.cantidad);
    var cantidadProd = req.body.cantidad;
    /* LOGICA */

    // cantidadProd = cantidadProd + 20;
    cantidadProd += 100;

    // response = les va a permitir enviar datos al frontend como respuesta
    res.status(201).json( { 
        "message": "Todo estuvo bien!",
        "year": "2026",
        "newCantidad": cantidadProd
    } );
}

const listProducts = (req, res) => {
    /* LOGICA */
    var lista = [
        {
            nombre: "Leche",
            cantidad: 10
        }, 
        {
            nombre: "Azucar",
            cantidad: 20
        }, 
        {
            nombre: "Cebolla",
            cantidad: 30
        }
    ]

    // response = les va a permitir enviar datos al frontend como respuesta
    res.status(200).json( lista );
}

const singleProduct = (req, res) => {
    var product = {
        nombre: "Leche",
        cantidad: 10
    };

    res.status(200).json(product);
}

const deleteProduct = (req, res) => {
    console.log(req.params.identificador);

    // LOGICA

    res.status(200).json();
}

const updateProduct = (req, res) => {
    var identi = req.params.id;
    var datos = req.body;

    console.log(identi);
    console.log(datos);
    
    res.status(200).json();
}

const searchProducts = (req, res) => {
    console.log(req.query.nombre);
    console.log(req.query.cantidad);
    
    res.status(200).json();
}

export default {createProduct, listProducts, singleProduct, deleteProduct, updateProduct, searchProducts}