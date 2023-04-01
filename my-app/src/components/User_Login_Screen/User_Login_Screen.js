import axios from "axios";
import React , {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import "./css/User_Login_Screen.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function User_Login_Screen(props){
    const navigate = useNavigate();
    const [user_id,set_id] = useState("");
    const [user_pw,set_pw] = useState("");
    const [active_status,set_active_status] = useState(false);

    const check_log_info = async() => {
        await axios(
            {
              url: '/login',
              method: 'get',
              params: {
                 id : user_id
                ,password : user_pw
              } , 
              baseURL: 'http://localhost:8024',
            }
          ).then(function (response) {
            if(response.data != null && response.data.trim() != ""){
                window.sessionStorage.setItem("user_name",response.data);
                window.sessionStorage.setItem("user_id",user_id);
                window.sessionStorage.setItem("user_pw",user_pw);
                window.location.href = "/";
            }
            else{
                alert("Id 또는 Password 가 맞지 않습니다.")
            }
        });

    }

    const onchange_id = (e) => {
        set_id(e.target.value)
    }

    const onchange_pw = (e) => {
        set_pw(e.target.value)
    }

    const settings = {
        fade : true,
        dots: false,
        autoplay:true,
        infinite: true,
        arrows:false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover:false,
    };


    return(
        <div id="User_Login_Screen_wrap">
            <div class="blue-circle">
                <div class="light-blue-circle"></div>
            </div>
            <div className="right_top_circle">
                <img src="/img/Login/rightTop.jpg"></img>
            </div>
            <div className="right_bottom_circle">
                <img src="/img/Login/rightBottom.jpg"></img>
            </div>

            <div id="login_div_area">
                <p id="login_text">Login</p>
                <input className="input_id" type="text" placeholder="userName" onChange={(e)=>onchange_id(e)} />
                <input className="input_pw" type="password" placeholder="passWord" onChange={(e)=>onchange_pw(e)} />
                <div class="login_btn_wrap">
                    <button class="login_btn" onClick={()=>check_log_info()}>Login</button>
                    <div id="login_result"></div>
                </div>
            </div>
        </div>
    )
}

export default User_Login_Screen;