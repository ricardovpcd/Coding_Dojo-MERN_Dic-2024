import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Console log de Search Page - Renderizado - 1");
        return(()=> {
            console.log("Console log de Search Page - unmounted - 3");
        })
    }, []);

    useEffect(() => {
        console.log("Console log de Search Page - Cambio de estado - 2");
    }, [count]);

    const changeState = () => {
        setCount(1);
    }

    const redirect = () => {
        navigate("/layout/about-us")
    }

    return(
        <>
            Hola SearchPage!
            <button onClick={changeState}>Cambiar</button>
            <button onClick={redirect}>redireccion a Aboutus</button>
        </>
    )
}

export default SearchPage;