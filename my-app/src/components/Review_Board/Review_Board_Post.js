import axios from "axios";
import React , {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

import "./css/Review_Board_Post.css";


function Review_Board_Post(props){
    const navigate = useNavigate();

    const jump_board_detail = async() => {
        navigate("/review_board/detail", {
            state: {
              productId : props.data.id
            }
        });
    }

    return(
        <div id="Review_Board_Post_wrap">
            <div className="num">
                {props.totalNum - props.index}
            </div>
            <div className="title" onClick={()=>jump_board_detail()}>
                {props.data.title}
            </div>
            <div className="name">
                {props.data.nickName} 
            </div>
            <div className="date">
                {props.data.date}
            </div>
            <div className="inquiry">
                {props.data.inquiry}
            </div>
        </div>
    )
}
export default Review_Board_Post;