import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
    const [listProducts, setListProducts] = useState([]);

    // Formulario de Crear
    const [nameProduct, setNameProduct] = useState("");
    const [quantityProduct, setQuantityProduct] = useState(0);
    
    // Formulario de Actualizar
    const [updateNameProduct, setUpdateNameProduct] = useState("");
    const [updateQuantityProduct, setUpdateQuantityProduct] = useState(0);
    const [idProduct, setIdProduct] = useState("");

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        var response = await axios.get("http://localhost:8080/products");
        setListProducts(response.data);
    }

    const createProducto = async () => {
        var objNewProd = {
            name: nameProduct,
            quantity: quantityProduct
        }

        var response = await axios.post("http://localhost:8080/createProduct", objNewProd);
        await getProducts();
    }

    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:8080/deleteProduct/${id}`);
        await getProducts();
    }

    const getProduct = async (id) => {
        var product = await axios.get(`http://localhost:8080/singleProduct/${id}`);

        setUpdateNameProduct(product.data.name);
        setUpdateQuantityProduct(product.data.quantity);
        setIdProduct(product.data._id);
    }

    const updateProductSelected = async () => {
        var updateProdObj = {
            name: updateNameProduct,
            quantity: updateQuantityProduct
        }

        await axios.put(`http://localhost:8080/updateProduct/${idProduct}`, updateProdObj);
        await getProducts();
    }

    return (
        <>  
            <div>
                <h1>Crear Producto</h1>
                <label>Nombre</label>
                <input type="text" value={nameProduct} onChange={(e) => setNameProduct(e.target.value)}/>
                <label>Cantidad</label>
                <input type="number" value={quantityProduct} onChange={(e) => setQuantityProduct(e.target.value)}/>
                <button onClick={createProducto}>Crear</button>
            </div>

            <div>
                <h1>Listar Producto</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            listProducts.map((prod, index) => {
                                return (<tr key={index}>
                                            <td>{prod.name}</td>
                                            <td>{prod.quantity}</td>
                                            <td>
                                                <button onClick={ () => deleteProduct(prod._id) }>Delete</button>
                                                <button onClick={ () => getProduct(prod._id) }>Update</button>
                                            </td>
                                        </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>

            <div>
                <h1>Actualizar Producto</h1>
                <label>Nombre</label>
                <input type="text" value={updateNameProduct} onChange={(e) => setUpdateNameProduct(e.target.value)}/>
                <label>Cantidad</label>
                <input type="number" value={updateQuantityProduct} onChange={(e) => setUpdateQuantityProduct(e.target.value)}/>
                <button onClick={updateProductSelected}>Actualizar</button>
            </div>
        </>
    )
}

export default App;