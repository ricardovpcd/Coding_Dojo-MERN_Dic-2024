import { useNavigate, useParams } from "react-router-dom";

const AccountPage = () => {
    const navigate = useNavigate();
    const params = useParams();

    const redirectToAdmin = () => {
        navigate("/admin");
    }

    const getSegmentParams = () => {
        alert("El usuario que estas visitando es: " + params.name);
    }

    return(
        <>
        Hola AccountPage!
        <br />
        <button onClick={getSegmentParams}>Capturar Variables del segmento</button>
        <br />
        <button onClick={redirectToAdmin}>Redirigir al AdminPage!</button>
        </>
    )
}

export default AccountPage;