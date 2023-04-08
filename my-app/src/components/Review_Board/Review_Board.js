import React , {useEffect, useState} from "react";
import { useNavigate , useLocation } from 'react-router-dom';
import "./css/Review_Board.css";
import queryString from "query-string";
import axios from "axios";
import Review_Board_Posts from "./Review_Board_Posts.js";
import Review_Board_ProInfo from "./Review_Board_ProInfo.js";

function Review_Board(){ //날짜 넘겨받아야함
    const location = useLocation();
    const navigate = useNavigate();
    const [review,setReview] = useState([])
    const [view,setView] = useState("")
    const [length,set_len] = useState(0)
    const [proView,set_proView] = useState(null)
    const [pro_info,set_pro_info] = useState(null)



    useEffect(()=>{
        get_proinfo();
    },[])

    const get_proinfo = async() => { //추후 수정
        await axios(
            {
              url: '/product/image',
              method: 'get',
              params: {
                 id : location.state.id
              } , 
              baseURL: 'http://localhost:8080',
            }
          ).then(function (response) {
            set_proView(response.data)
          });
    }
    
    return(
        <div id="Review_Board_wrap">
            <div className="Pro_img">
                {proView != null && <Review_Board_ProInfo
                    name= {proView.name}
                    images = {proView.proImages}
                />}
            </div>
            <div className="review_board_head">
                {/* <div className="num">
                    번호
                </div> */}
                <div className="title">
                    제목
                </div>
                <div className="writer">
                    작성자
                </div>
                <div className="date">
                    등록일
                </div>
                <div className="inquiry">
                    조회
                </div>
            </div>
            <Review_Board_Posts
                id = {location.state.id}
            />
        </div>
    )
}

export default Review_Board;