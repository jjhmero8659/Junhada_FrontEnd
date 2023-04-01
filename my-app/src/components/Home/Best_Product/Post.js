import React , {useEffect, useState} from "react";
import "./css/Post.css";
import axios from "axios";

function Post(props){

    // console.log("Best_pro",props.data)

    return(
        <div id="BestProduct_Post_wrap">
            <div className="image">
                <img src={props.data.src}></img>
            </div>
            <div className="profile">
                <img src={props.data.profile}></img>
            </div>
            <div className="good_rec">
                추천수 : <span>{props.data.good_rec}</span>
            </div>
            <div className="gpa">
                <img src="https://www.lottecinema.co.kr/NLCHS/Content/images/icon/star_14.png"></img>
                <p>{props.data.gpa}</p>
            </div>
            <div className="title">
                {props.data.title}
            </div>

            <div className="writer">
                {props.data.writer} 님
            </div>
            <div className="date">
                {props.data.date}
            </div>
        </div>
    )
}

export default Post;