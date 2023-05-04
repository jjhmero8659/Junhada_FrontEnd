
import {GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";
import axios from "axios"
import { useNavigate } from 'react-router-dom';



const GoogleLoginButton = () => {
    const clientId = '131723005062-ph339iicfnr4siddarsi1totd18e384r.apps.googleusercontent.com'
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
            console.log(response.data)
            if(response.data.socialLoginPlatform.google !== true){
                navigate("/Sign/Add/Detail", {
                    state: {
                      data : response.data,
                      platform : "google"
                    }
                });
            }
            else{
                window.sessionStorage.setItem("username",response.data.userInfo.nickname);
                // window.sessionStorage.setItem("role",response.data.userName);
                window.location.href = "/";
            }
          });
    }

    return (
        <>
            <GoogleOAuthProvider clientId={clientId}>
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
