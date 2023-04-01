import React , {useEffect, useState} from "react";
import "./css/User_Login.css";


function User_Login(props){

    const [status,set_status] = useState(false)

    useEffect(()=>{
        set_status(props.Login_status)
    },[])

    const jump_Login_detail = () => {
        window.location.href = "/User_login";
    }

    const jump_join_membership_detail = () => {
        window.location.href = "/join_membership";
    }

    return(
        <div className={window.location.href.split("/")[3] == "Drop_Down" ? "User_Login_wrap active": "User_Login_wrap"}>
            <a href="#" onClick={()=>jump_Login_detail()}>Login</a>
            <span> / </span>
            <a href="#" onClick={()=>jump_join_membership_detail()}>Member-ship</a>
        </div>
    )

}

export default User_Login;