import axios from "axios";
import { useEffect, useState } from "react";

const MyCatsList = () => {
    const [catsList, setCatsList] = useState([]);

    useEffect( () => {
        console.log("UseEffect se ejecuto!");
        getList();
    }, [])

    const getList = () => {
        axios.get("https://api.thecatapi.com/v1/images/search?limit=2")
        .then((result) => {
            setCatsList(result.data);
        })
    }

    return (
        <>
            {
                catsList.map((cat) => {
                    return <img src={cat.url} width={50}/>
                })
            }
        </>
    )
}

export default MyCatsList;