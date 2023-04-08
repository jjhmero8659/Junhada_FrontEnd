import React , {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom'; 
import "./css/Product_board_post.css";
import axios from "axios";

function Product_board_post(props){
    const navigate = useNavigate();
    const [user_img,set_user_img] = useState(null);

    const jump_board_detail = async() => {
        await axios(
            {
              url: '/article/inquiry',
              method: 'put',
              params: {
                 id : props.data.id
              } , 
              baseURL: 'http://localhost:8080',
            }
          ).then(function (response) {
            navigate("/review_board/detail", {
                state: {
                  productId : props.data.id
                }
            });
          });
        
    }

    useEffect(()=>{
        get_profileImage();
    },[])

    const get_profileImage = async() => {
        await axios(
            {
              url: '/user/profile/image',
              method: 'get',
              params: {
                nickName : props.data.nickName
              } , 
              baseURL: 'http://localhost:8080',
            }
          ).then(function (response) {
            set_user_img(response.data)
          });
    } 

    return(
        <div id="Product_board_post_wrap">
            <div className="user_img">
                {user_img != null && <img src={user_img}></img>}
            </div>
            <div className="name">
                {props.data.nickName}님
            </div>
            <div className="title" onClick={()=>jump_board_detail()}>
                {props.data.title}
            </div>
            <div className="review_img" onClick={()=>jump_board_detail()}>
                <img src={props.data.reviewImages[0]}></img>
            </div>
            <div className="time">
                 {props.data.date != null && props.data.date.slice(0,10)} 작성
            </div>
            <div className="good_rec_wrap">
                <div className="good_rec">
                    
                </div>
                <div className="good_rec_text">
                    {props.data.good_rec}
                </div>
            </div>
            
        </div>
    )
}

export default Product_board_post;