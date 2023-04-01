import React , {useEffect, useState} from "react";
import "./css/Advertising_screen.css";


function Advertising_screen(props){

    const [active,set_active] = useState(false);

    return(
        <div id="Advertising_screen_wrap" className={(active == true) ? "active" : null}>
            <div className="text1">
                최적의 가전제품 선택 리뷰
            </div>
            <div className="Logo">
                <img src="/img/Home_logo/logo3.png"/>
                <span>가 전하는</span>
            </div>
            <div id="close_btn" onClick={()=>set_active(!active)}/>
            <div className="text_mobile">
                모바일앱으로 이용하시면 더욱 편리해요.
            </div>
            <div className="character_img">
                <img src="/img/Home_logo/pinkbean.jpg"></img>
            </div>
            <div className="mobile_icon">
                <div className="google">
                    <img src="https://ping2g.com/img/wing_btn01.png"></img>
                </div>
                <div className="apple">
                    <img src="https://ping2g.com/img/wing_btn02.png"></img>
                </div>
            </div>
        </div>
    )
}

export default Advertising_screen;