import axios from "axios";
import React , {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

import "./css/Review_Board_Post.css";


function Review_Board_Post(props){
    const navigate = useNavigate();
    const jump_board_detail = async() => {

        await axios(
            {
              url: '/article/inquiry',
              method: 'put',
              params: {
                id : props.data.id,
              } , 
              baseURL: 'http://localhost:8080',
            }
          ).then(function (response) {
            navigate("/review_board/detail", {
                state: {
                  productId : props.productId,
                  ArticleId : props.data.id
                }
            });
          });

        
    }

    // if(props.startArticleNum != null){
    //     setMyIndex(props.startArticleNum + (props.Page_per_page - props.index))
    // }

    return(
        <div id="Review_Board_Post_wrap">
            <div className="num">
                {props.startArticleNum != null && (props.startArticleNum + (props.articlesLen - props.index) )}
            </div>
            <div className="title" onClick={()=>jump_board_detail()}>
                {props.data.title}
            </div>
            <div className="name">
                {props.data.nickName} 
            </div>
            <div className="date">
                {props.data.date != null && props.data.date.slice(0, 10)}
            </div>
            <div className="inquiry">
                {props.data.inquiry}
            </div>
        </div>
    )
}
export default Review_Board_Post;