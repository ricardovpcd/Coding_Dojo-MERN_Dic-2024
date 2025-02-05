import { useState } from "react";
import MyButton from "./components/myButton/myButton";

const App = () => {
    const [image, setImage] = useState(true);

    const showClick = () => {
        console.log("Show");
        setImage(true);
    }

    const hideClick = () => {
        console.log("Hide");
        setImage(false);
    }

    return (
        <>
            {
                (image == true) ? 
                <img src="https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic_1468962.jpg?w=1900&h=1400"
                width={100}/> : <></>}
            
            <MyButton title="Mostrar" 
                      color="green" 
                      clickAction={showClick}></MyButton>

            <MyButton title="Ocultar" 
                      color="red" 
                      clickAction={hideClick}></MyButton>
        </>
    )
}

export default App