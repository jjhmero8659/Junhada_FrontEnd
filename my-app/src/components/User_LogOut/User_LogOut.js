import React , {useEffect, useState} from "react";
import "./css/User_LogOut.css";
import $ from "jquery"; 
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'; 

function User_LogOut(props){
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{
    })

    const user_logOut = () => {
        window.sessionStorage.setItem("username",null);
        window.sessionStorage.setItem("role",null);
        
        window.location.href = "/";
    }

    const Mypage_jump = () => {
        navigate("/MyPage", {
            state: {
              nickName : window.sessionStorage.getItem("username")
            }
        });
    }

    return(
        <div className={window.sessionStorage.getItem("username") != null ? "User_LogOut_wrap active": "User_LogOut_wrap"}>
            <div>{window.sessionStorage.getItem("username")} 님</div>
            <div onClick={()=>Mypage_jump()}>마이페이지</div>
            <div onClick={()=>user_logOut()}>로그아웃</div>
        </div>
    )
    
    
}

export default User_LogOut;