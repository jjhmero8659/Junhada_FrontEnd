import React , {useEffect, useState} from "react";
import "./css/User_LogOut.css";
import $ from "jquery"; 


function User_LogOut(props){

    // console.log("Log_out",props)
    useEffect(()=>{

        // let log_out_div = document.getElementsByClassName("User_LogOut_wrap")[0]
        // console.log(log_out_div)
        // log_out_div.addEventListener('click', (e) => {
        //     log_out_div.style.right = "400px";
        // });

        // $(function(){
        //     $(".User_LogOut_wrap").hover(
        //         function(e){
        //             e.stopImmediatePropagation();
        //             // $(".User_sub").stop().slideToggle(200)
        //             // $("User_LogOut_wrap").animate
        //                 $(".User_LogOut_wrap").stop().animate({right:400+"px"}, 600, function(){
                        
        //             });
        //         },
        //         function(e){
        //             e.stopImmediatePropagation();
        //             // $(".User_sub").stop().slideToggle(200)
        //             // $("User_LogOut_wrap").animate
        //                 $(".User_LogOut_wrap").stop().animate({right:20+"px"}, 600, function(){
                        
        //             });
        //         }
        //     )
        // })
    })

    const user_logOut = () => {
        window.sessionStorage.setItem("user_name",null);
        window.sessionStorage.setItem("user_id",null);
        window.sessionStorage.setItem("user_pw",null);

        window.location.href = "/";
    }

    const Mypage_jump = () => {
        window.location.href = "/User_LogOut/MyPage"
    }

    return(
        <div className={window.location.href.split("/")[3] == "Drop_Down" ? "User_LogOut_wrap active": "User_LogOut_wrap"}>
            <div>{window.sessionStorage.getItem("user_name")} 님</div>
            <div onClick={()=>Mypage_jump()}>마이페이지</div>
            <div onClick={()=>user_logOut()}>로그아웃</div>
        </div>
    )
    
    
}

export default User_LogOut;