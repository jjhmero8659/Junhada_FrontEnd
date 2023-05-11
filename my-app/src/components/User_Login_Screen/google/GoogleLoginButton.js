
import {GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { GOOGLE_CLIENT_ID } from '../SocialPlatform/PlatformInfo.js';



const GoogleLoginButton = () => {
    const navigate = useNavigate();

    const googleOauth2DataReturn = async(res) => {
        await axios(
            {
              url: '/sign/social/login',
              method: 'post',
              data: {
                token : res.credential,
                platform : "google"
              } , 
              baseURL: 'http://localhost:8080',
            }
          ).then(function (response) {
            if(response.data.socialLoginPlatform.google !== true && response.data.nickname == null){
                navigate("/Sign/Add/Detail", {
                    state: {
                      data : response.data,
                      platform : "google"
                    }
                });
            }
            else{
                window.sessionStorage.setItem("username",response.data.nickname);
                // window.sessionStorage.setItem("role",response.data.userName);
                window.location.href = "/";
            }
          });
    }

    return (
        <>
            <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
                <GoogleLogin
                    onSuccess={(res) => {
                        googleOauth2DataReturn(res);
                    }}
                    onFailure={(err) => {
                        console.log(err);
                    }}
                />
            </GoogleOAuthProvider>
        </>
    );
};

export default GoogleLoginButton
