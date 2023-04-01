// import React, {Component} from "react";
import { useNavigate } from 'react-router';
import React, {useState} from "react";
import "../css/Post.css";

function Post(props){
    const navigate = useNavigate();

    const[view,set_view] = useState(props.view);
    const detail_product = () => {
        navigate('/personal_prodcut', {
            state: {
              id: props.data.id,
              view : props.view
            }
        });
    }
    
    return(
                    <div id="Post_wrap">
                        <div className="ranking">{props.data.ranking}</div>
                        <div className="triangle-left"></div>
                        <div className="triangle-right"></div>
                        <div className="name" onClick={() => detail_product()}>
                            <span>{props.data.name}</span>
                        </div>
                        <div className="image" onClick={() => detail_product()}>
                            <img src={props.data.image}/>
                        </div>

                        
                        <div className='gpa'>
                            상품 평점 : <span>{props.data.gpa}</span>
                        </div>
                        <div className='review'>
                            상품 리뷰 : <span>{props.data.review}</span>
                        </div>
                    </div>
    )
}

export default Post;
