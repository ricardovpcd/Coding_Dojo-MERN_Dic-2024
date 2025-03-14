import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const {
            register,
            getValues,
            trigger,
            reset,
            formState: { errors },
          } = useForm({
            defaultValues: {
                email: "",
                password: "",
            }
        });

    const createUser = async () => {
        var validate = await trigger(["email", "password"]);
        if(!validate){
            return;
        }

        var data = getValues();
        var result = await axios.post("http://localhost:8080/login", data);

        if(result.data.exist == false){
            alert("Usuario / Contraseña Incorrecto");
            return;
        }

        alert("Se logueo correctamente");
        localStorage.setItem("jwt", result.data.jwt);
        navigate("/");
    }

    return (
        <>
            <h1>Login</h1>
            <div style={{display: "flex", flexDirection: "column", alignItems: "start", gap: "10px"}}>
                <label>Email</label>
                <input type="email" {...register("email", { required: "Es obligatorio el Email", 
                                                            maxLength: { value: 100, message: "El email debe contener maximo 100 caracteres" } })}/>
                <p>{ errors.email?.message }</p>

                <label>Contraseña</label>
                <input type="password" {...register("password", { required: "Es obligatorio la Contraseña" })}/>
                <p>{ errors.password?.message }</p>

                <button onClick={createUser}>Logueame</button>
            </div>
        </>
    )
}

export default LoginPage;