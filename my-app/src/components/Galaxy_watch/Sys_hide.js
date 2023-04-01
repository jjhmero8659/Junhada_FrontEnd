import React , {useEffect, useState} from "react";
import "./css/Sys_hide.css";


function Sys_hide(props){
    const [sys_Ty,set_sys_Ty] = useState("");    //구분

    const sys_ty_click = () => {
        
    }

    return(
        <div id="Sys_hide_wrap">
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

export default Sys_hide;