import { useState } from "react";

const PersonCard = (props) => {
    const [numberLikes, setNumberLikes] = useState(0);

    const like = () => {
        setNumberLikes(numberLikes + 1);
    }

    const dislike = () => {
        setNumberLikes(numberLikes - 1);
    }

    return (
        <>
            <p>Hola Mi Nombre es: {props.name}</p>
            <p>Tengo {props.age} años</p>
            <p>Vivo en el País: {props.country}</p>

            <p>{numberLikes}</p>
            <button onClick={like}>Like</button>
            <button onClick={dislike}>Dislike</button>
        </>
    )
}

export default PersonCard;