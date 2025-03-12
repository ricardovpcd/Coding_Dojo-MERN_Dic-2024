import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [bookList, setBookList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = async () => {
        var response = await axios.get("http://localhost:8080/getAllBooks");
        setBookList(response.data);
    }

    const goToCreatePage = () => {
        navigate("/nuevo");
    }

    const goToEditPage = (id) => {
        navigate("/editar/" + id);
    }

    const deleteBook = async (id) => {
        var confirm = window.confirm("¿Seguro de eliminar el libro?");
        if(confirm){
            await axios.delete("http://localhost:8080/deleteBook/" + id);
            getBooks();
        }
    } 

    return (
        <>
            <h1>Listado de todos los libros</h1>
            
            <button onClick={goToCreatePage}>Crear Libro</button>

            <table style={{border: "1px solid black"}}>
                <thead>
                    <tr>
                        <th style={{border: "1px solid black"}}>Titulo</th>
                        <th style={{border: "1px solid black"}}>Año</th>
                        <th style={{border: "1px solid black"}}>Descripcion</th>
                        <th style={{border: "1px solid black"}}>Disponible?</th>
                        <th style={{border: "1px solid black"}}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    

                    {
                        bookList.map((book, index) => {
                            return <tr key={index}>
                                        <td style={{border: "1px solid black"}}> {book.title} </td>
                                        <td style={{border: "1px solid black"}}> {book.year} </td>
                                        <td style={{border: "1px solid black"}}> {book.description} </td>
                                        <td style={{border: "1px solid black"}}> { (book.available == true) ? "Si" : "No" } </td>
                                        <td style={{border: "1px solid black"}}>
                                            <button onClick={() => goToEditPage(book._id)}>Editar</button>
                                            <button onClick={() => deleteBook(book._id)}>Eliminar</button>
                                        </td>
                                    </tr>
                        })
                    }

                </tbody>
            </table>
        </>
    )
}

export default HomePage;