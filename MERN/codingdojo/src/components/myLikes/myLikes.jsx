import { useState } from "react";
import style from "./MyLikes.module.css";

const MyLikes = (props) => {
    const [numberLikes, setNumberLikes] = useState(0);
    const like = () => {
        setNumberLikes(numberLikes + 1);
    }

    const dislike = () => {
        setNumberLikes(numberLikes - 1);
    }

    return (
        <>
            <p className={style.title}> {numberLikes} </p>
            <button className={style.likeBtn} onClick={like}> {props.likeBtnName} </button>
            <button className={style.dislikeBtn} onClick={dislike}> {props.dislikeBtnName} </button>
        </>
    )
}

export default MyLikes;