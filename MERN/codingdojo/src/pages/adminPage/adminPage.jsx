import { useNavigate, useSearchParams } from "react-router-dom";

const AdminPage = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const goBack = () => {
        navigate(-1);
    }

    const showQueryParams = () => {
        var id = searchParams.get("userId");
        var type = searchParams.get("type");
        var color = searchParams.get("color");

        alert("El id del usuario es: " + id + " El type es: " + type + " y el color es: " + color);
    }

    return(
        <>
            Hola AdminPage!
            <br />
            <button onClick={showQueryParams}>Mostrar QueryParams</button>
            <br />
            <button onClick={goBack}>Retroceder</button>
        </>
    )
}

export default AdminPage;