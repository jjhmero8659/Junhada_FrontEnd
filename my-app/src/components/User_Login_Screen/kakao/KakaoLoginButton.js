
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import "./css/KakaoLoginButton.css";
import buttonImage from "./image/kakao_login_large_wide.png";
import { KAKAO_REST_API_KEY } from '../SocialPlatform/PlatformInfo.js';
import { KAKAO_REDIRECT_URI } from '../SocialPlatform/PlatformInfo.js';

//Login.js

const KakaoLoginButton = () => {
    const REST_API_KEY = KAKAO_REST_API_KEY;
    const REDIRECT_URI =  KAKAO_REDIRECT_URI;

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
