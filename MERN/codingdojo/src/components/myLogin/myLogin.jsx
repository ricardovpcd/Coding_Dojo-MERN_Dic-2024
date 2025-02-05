import { useState } from "react";

const MyLogin = () => {
    const [myEmail, setMyEmail] = useState("");
    const [myPassword, setMyPassword] = useState("");
    const [message, setMessage] = useState("");

    const login = () => {
        /*if(myEmail == "" || myPassword == ""){
            setMessage("Ingrese todos los datos");
        } else {
            if(myEmail != "admin@gmail.com" || myPassword != "123"){
                setMessage("Usuario o contraseña Invalido");
            } else {
                setMessage("Bienvenido");
            }
        }*/

        if(myEmail == "" || myPassword == ""){
            setMessage("Ingrese todos los datos");
            return;
        }

        if(myEmail != "admin@gmail.com" || myPassword != "123"){
            setMessage("Usuario o contraseña invalido");
            return;
        }

        setMessage("Bienvenido");
    }

    return(
        <>
            <div>
                <input type="email" placeholder="Ingresar Email" value={myEmail} onChange={(e) => setMyEmail(e.target.value)}/>
            </div>

            <div>
                <input type="password" placeholder="Ingresar Contraseña" value={myPassword} onChange={(e) => setMyPassword(e.target.value)}/>
            </div>

            <div>
                <button onClick={login}>Ingresar</button>
            </div>

            <div>
                <p style={{color: "red"}}>{message}</p>
            </div>
        </>
    )
}

export default MyLogin;