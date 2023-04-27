import axios from "axios";
import React , {useEffect, useState} from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import "./css/User_Login_Screen.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GoogleLoginButton from "./google/GoogleLoginButton.js"
import KakaoLoginButton from "./kakao/KakaoLoginButton.js";
import NaverLoginButton from "./naver/NaverLoginButton.js";

function User_Login_Screen(props){
    const navigate = useNavigate();
    const location = useLocation();
    
    const [user_id,set_id] = useState("");
    const [user_pw,set_pw] = useState("");
    const [active_status,set_active_status] = useState(false);
    const REST_API_KEY = '01cec589f64b5160f2696412194687dd'
    const REDIRECT_URI = 'http://localhost:3000/kakaoLogin'
    const Kakao_Code = location.search.split('=')[1];

    useEffect(()=>{
        if(!location.search) return;
        getKakaoToken();
    },[])

    const getKakaoToken = async() => {
        await axios({
            url: 'https://kauth.kakao.com/oauth/token',
            method: 'post',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
            data: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${Kakao_Code}`
          }).then( async(res) => {
            await axios(
                {
                  url: '/sign/oauth2/kakao',
                  method: 'post',
                  params: {
                    kakoToken : res.data.id_token
                  } , 
                  baseURL: 'http://localhost:8080',
                }
              ).then(function (response) {
                if(response.data.onlyKakao == true){
                    navigate("/Sign/Add/Detail", {
                        state: {
                          data : response.data
                        }
                    });
                }
                else{
                    window.sessionStorage.setItem("username",response.data.userInfo.nickname);
                    // window.sessionStorage.setItem("role",response.data.userInfo.role);
                    window.location.href = "/";
                }
              });

          }).catch(error => {
            console.error(error); // 오류 발생 시 오류 정보를 출력합니다.
          });
          
    }

    const check_log_info = async() => {
        await axios(
            {
              url: '/sign/login',
              method: 'get',
              params: {
                 email : "wkd86591@naver.com"
                ,password : "86598659"
              } , 
              baseURL: 'http://localhost:8080',
            }
          ).then(function (response) {
            if(response.data != null){
                window.sessionStorage.setItem("username",response.data.nickname);
                window.sessionStorage.setItem("role",response.data.role);
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

                <div id="Oauth2LoginArea">
                    <GoogleLoginButton/>    
                    <KakaoLoginButton/>
                    <NaverLoginButton/>
                </div>
            </div>

            
        </div>
    )
}

export default User_Login_Screen;