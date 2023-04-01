import React , {useEffect, useState} from "react";
import "./css/Sys.css";


function Sys(props){
    const [sys_Ty,set_sys_Ty] = useState("");    //구분

    useEffect(()=>{
        set_sys_Ty(props.sys_Ty)
    },[props.sys_Ty])

    const sys_ty_click = (data) => {
        props.set_sys_Ty(data)
    }

    return(
        <div id="Sys_wrap">
            <p>구분</p>
            <div className="button_wrap">
                <div className={sys_Ty == "first" ? "left_button active" : "left_button"} onClick={()=>sys_ty_click("first")}>
                    <p>블루투스</p>
                </div>

                <div className={sys_Ty == "second" ? "right_button active" : "right_button"} onClick={()=>sys_ty_click("second")}>
                    <p>LTE자급제</p>
                </div>
            </div>
        </div>
    )
}

export default Sys;