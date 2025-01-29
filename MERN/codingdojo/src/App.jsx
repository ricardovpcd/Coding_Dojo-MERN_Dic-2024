import MyButton from "./components/myButton";
import MyInput from "./components/myInput";
import MySpecialSelect from "./components/mySpecialSelect";

const App = () => {
    return (
        <>
            <MyButton titulo="Registrame" color="black"></MyButton>
            <MyInput etiqueta={"Ingresar Usuario"} 
                     contador={2}
                     total={20.56}
                     dato={ {} }
                     list={ [] }
                     isTeacher={true}></MyInput>
            <MyInput etiqueta="Ingresar Contraseña"></MyInput>
            <MyButton titulo="Login" color="red"></MyButton>
            <MySpecialSelect list={ [] }></MySpecialSelect>
        </>
    )
}

export default App