import MyButton from "./components/myButton/myButton";
import MyCalculator from "./components/myCalculator";
import MyInput from "./components/myInput/myInput";
import MySpecialSelect from "./components/mySpecialSelect";
import Productos from "./components/productos";

const App = () => {

    return (
        <>
            <MyButton titulo="Registrame" color="black"></MyButton>
            <br />
            <MyInput etiqueta={"Ingresar Usuario"} 
                     contador={2}
                     total={20.56}
                     dato={ {} }
                     list={ [] }
                     isTeacher={true}></MyInput>
            <MyInput etiqueta="Ingresar Contraseña"></MyInput>

            <MySpecialSelect items={["Peru", "Argentina", "Venezuela", "Colombia"]}></MySpecialSelect>

            <MySpecialSelect items={["Jose", "Carlos", "Ricardo", "Maria", "Juana"]}></MySpecialSelect>
            
            <Productos lista={["Arroz", "Leche", "Menestras"]}></Productos>

            <br />
            <MyCalculator></MyCalculator>
        </>
    )
}

export default App