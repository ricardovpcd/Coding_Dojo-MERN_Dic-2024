import { Link, NavLink, useNavigate } from "react-router-dom";
import MyLikes from "../../components/myLikes";

const HomePage = () => {
    const navigate = useNavigate();

    const redirectToAdmin = () => {
        //window.location.href = "/admin";
        if(1 == 1){
            navigate("/admin");
        } else {
            navigate("/account");
        }
    }

    return(
        <>
            Hola HomePage

            <br />
            <Link to={"/admin"}>Go To Admin</Link>
            <br />
            <Link to={"/account"}>Go To Account</Link>
            <br />

            <NavLink to={"/admin"}>Go To Admin - NavLink</NavLink>
            <br />
            <NavLink to={"/account"}>Go To Admin - NavLink</NavLink>

            <br />
            <br />
            <button onClick={redirectToAdmin}>Redirigir al AdminPage!</button>

            <MyLikes></MyLikes>
        </>
    )
}

export default HomePage;