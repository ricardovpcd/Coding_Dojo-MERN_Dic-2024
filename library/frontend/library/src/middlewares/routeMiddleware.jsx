import { Navigate, Outlet } from "react-router-dom"
import { jwtDecode } from "jwt-decode";

const RouteMiddleware = () => {
    const validate = () => {
        var jwt = localStorage.getItem("jwt");
        if(!jwt){
            return false;
        }

        var decode = jwtDecode(jwt);
        console.log(decode.exp);
        var currentTime = Date.now() / 1000;
        
        if(currentTime > decode.exp){
            localStorage.removeItem("jwt");
            return false;
        }
        
        return true;
    }

    return(
        <>
            {
                (validate()) ? 
                <Outlet /> : 
                <Navigate to={"/login"}/>
            }
        </>
    )
}

export default RouteMiddleware;