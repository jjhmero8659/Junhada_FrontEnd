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
import Tiger from "./image/TigerRemove.png";
import Pumpkin from "./image/Pumpkin.png";
import { KAKAO_REST_API_KEY } from './SocialPlatform/PlatformInfo.js';
import { KAKAO_REDIRECT_URI } from './SocialPlatform/PlatformInfo.js';


function User_Login_Screen(props){
    const navigate = useNavigate();
    const location = useLocation();
    
    const [Email,setEmail] = useState(null);
    const [Password,setPassword] = useState(null);
    const [active_status,set_active_status] = useState(false);

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
            data: `grant_type=authorization_code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${Kakao_Code}`
          }).then( async(res) => {
            await axios(
                {
                  url: '/sign/social/login',
                  method: 'post',
                  data: {
                    token : res.data.id_token,
                    platform : "kakao"
                  } , 
                  baseURL: 'http://localhost:8080',
                }
              ).then(function (response) {
                console.log(response.data)
                if(response.data.socialLoginPlatform.kakao !== true && response.data.nickname == null){
                    navigate("/Sign/Add/Detail", {
                        state: {
                          data : response.data,
                          platform : "kakao"
                        }
                    });
                }
                else{
                    window.sessionStorage.setItem("username",response.data.nickname);
                    // window.sessionStorage.setItem("role",response.data.userInfo.role);
                    window.location.href = "/";
                }
              });

          }).catch(error => {
            console.error(error); // 오류 발생 시 오류 정보를 출력합니다.
          });
          
    }

    const check_log_info = async() => {
        let regExp =new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
        
        if(!regExp.test(Email)){
            alert("이메일 형식이 맞지 않습니다.")
            return false;
        }

        await axios(
            {
              url: '/sign/login',
              method: 'get',
              params: {
                 email : Email
                ,password : Password
              } , 
              baseURL: 'http://localhost:8080',
            }
          ).then(function (response) {
            if(response.data){
                window.sessionStorage.setItem("username",response.data.nickname);
                window.location.href = "/";
            }
            else{
                alert("Email 또는 Password 가 맞지 않습니다.")
            }
        });

    }


    const handleOnKeyPress = e => {
        if (e.key === 'Enter') {
            check_log_info(); // Enter 입력이 되면 클릭 이벤트 실행
        }
      };


    return(
        <div id="User_Login_Screen_wrap">
             <div id="JapanSpan">人間が失敗するのは知恵が不足しているからというケースは少ないです</div>
            <img id="Tiger" src={Tiger}></img>
            {/* <img id="Pumpkin" src={Pumpkin}></img> */}
            {/* <div class="blue-circle">
                <div class="light-blue-circle"></div>
            </div>
            <div className="right_top_circle">
                <img src="/img/Login/rightTop.jpg"></img>
            </div>
            <div className="right_bottom_circle">
                <img src="/img/Login/rightBottom.jpg"></img>
            </div> */}

            <div id="login_div_area">
                <p id="login_text">Login</p>
                <input className="input_id" type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
                <input className="input_pw" type="password" placeholder="passWord" onChange={(e)=>setPassword(e.target.value)} onKeyDown = {(e) => handleOnKeyPress(e)} />
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