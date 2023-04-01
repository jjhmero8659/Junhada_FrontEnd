import React , {useEffect, useState} from "react";
import "./css/Advertising_screen_left2.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Advertising_screen_left2(props){

    const [close_btn,set_close_btn] = useState(false)

    const settings = { 
        arrows:false,
        dots: false, 
        fade:true,
        autoplay:true,
        infinite: true,
        speed: 1000, 
        slidesToShow: 1, 
        slidesToScroll: 1 
    };
    return(
        <div id="Advertising_screen_left2_wrap" className={(close_btn == true) ? "active" : null}>
            <div>
                <Slider {...settings}>
                    <div>
                        <img src="https://s0.2mdn.net/11292364/Original_Show_STAR_Soundtrack1_All_Eps_Evergreen_LogoTextImage_NA_Subscribe_Now_Static_300x600_NA_NA_KO.jpg"></img>
                    </div>
                    <div>
                        <img src="https://image.useinsider.com/samsungkr/defaultImageLibrary/09_retention_800x1000_200kb_02-1651641072.jpeg"></img>
                    </div>
                    <div>
                        <img src="https://s0.2mdn.net/11292364/Brand_MAR_2Up-WandaStrange_NA_Evergreen_LogoTextImage_NA_Subscribe_Now_Static_300x600_NA_NA_KO.jpg"></img>
                    </div>
                </Slider>
            </div>
            <div id="close_btn" onClick={()=>set_close_btn(!close_btn)} ></div>        
        </div>
    )
}

export default Advertising_screen_left2;