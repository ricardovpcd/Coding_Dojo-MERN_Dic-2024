import { useState } from "react";
import styles from "./myButton.module.css";

const MyButton = (props) => {

    return(
        <div>
            <button onClick={props.clickAction}
                    style={{backgroundColor: props.color}}>{props.title}</button>
        </div>
    )
}

export default MyButton;