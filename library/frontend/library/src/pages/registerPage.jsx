import axios from "axios";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
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
                name: ""
            }
        });

    const createUser = async () => {
        var validate = await trigger(["email", "password", "name"]);
        if(!validate){
            return;
        }

        var data = getValues();
        /*var data = {
            "email": getValues().email,
            "password": getValues().password,
            "name": getValues().name
        }*/

        await axios.post("http://localhost:8080/register", data);
        alert("Se registro correctamente el usuario");
        reset();
    }

    return (
        <>
            <h1>Registro</h1>
            <div style={{display: "flex", flexDirection: "column", alignItems: "start", gap: "10px"}}>
                <label>Email</label>
                <input type="email" {...register("email", { required: "Es obligatorio el Email", 
                                                            maxLength: { value: 100, message: "El email debe contener maximo 100 caracteres" } })}/>
                <p>{ errors.email?.message }</p>

                <label>Contraseña</label>
                <input type="password" {...register("password", { required: "Es obligatorio la Contraseña" })}/>
                <p>{ errors.password?.message }</p>

                <label>Nombre Completo</label>
                <input type="text" {...register("name", { required: "Es obligatorio el Nombre Completo" })}/>
                <p>{ errors.name?.message }</p>

                <button onClick={createUser}>Registrarme</button>
            </div>
        </>
    )
}

export default RegisterPage;