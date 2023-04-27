
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import "./css/KakaoLoginButton.css";
import buttonImage from "./image/kakao_login_large_wide.png";

//Login.js

const KakaoLoginButton = () => {
    const REST_API_KEY = "01cec589f64b5160f2696412194687dd";
    const REDIRECT_URI =  "http://localhost:3000/kakaoLogin";

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

    const navigate = useNavigate();

    return (
      <div id="KakaoLoginButton_Wrap">
          <a href={KAKAO_AUTH_URL}>
            <img id="KakaoButtonImage" src={buttonImage}/>
          </a>
      </div>
    );
};

export default KakaoLoginButton
