import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ListReviewsPage = () => {
    const [listReviews, setListReviews] = useState([]);
    const params = useParams();

    useEffect(() => {
        getReviews();
    }, []);

    const getReviews = async () => {
        var res = await axios.get("http://localhost:8080/getReviewsByBookId/" + params.id);
        setListReviews(res.data);
    }

    return (
        <>
            
            {
                listReviews.map((review, index) => {
                    return <div>
                                <label>Comentario #{ index + 1 }</label>
                                <p>{review.comment}</p>
                            </div>
                })
            }
        </>
    )
}

export default ListReviewsPage;