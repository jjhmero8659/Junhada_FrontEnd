import React , {useEffect, useState} from "react";
import "./css/Advertising_screen_left.css";


function Advertising_screen_left(props){

    const [close_btn,set_close_btn] = useState(false)

    const settings = {
        // fade : true,
        arrows:false,
        autoplay:true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
 
    };



    return(
        <div id="Advertising_screen_left_wrap" className={(close_btn == true) ? "active" : null}>
                <div>
                    <img className="img1" src="https://cf.channel.io/thumb/780x,cover/pub-file/50553/6268f2c9ad681e52482e/_-2.png"></img>
                    <div className="text">
                        애플 브랜드 중고 상품 최대 50% 할인전
                    </div>
                    <div className="button">
                        애플 리뉴 상품 할인전
                    </div>
                    
                </div>
                <div id="close_btn" onClick={()=>set_close_btn(!close_btn)} ></div>
        </div>
    )
}

export default Advertising_screen_left;