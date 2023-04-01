import React , {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import Product_board_post from "./Product_board_post.js";
import axios from "axios";
import "./css/Product_board.css";

function Product_board(props){
    const navigate = useNavigate();
    const [product_id,set_product_id] = useState("")

    useEffect(()=>{
        set_product_id(props.product_id)
    },[])

    const Representative_review = props.review.map(
        (data,index) => (<Product_board_post
            data = {data}
            key={index}
            id = {props.product_id}
            view = {props.view}
        />)
    )

    const jump_board_page = () => {
        navigate("/review_board", {
            state: {
              id : props.product_id
            }
        });
    }



    return(
        <div id="Product_board_wrap">
            <div className="board_header">
                대표 리뷰
                <div className="jump_board" onClick={()=>jump_board_page()}>
                    리뷰 더보기
                </div>
            </div>
            {Representative_review}
        </div>
    )
}

export default Product_board;