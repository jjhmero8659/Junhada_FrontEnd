import React , {useEffect, useState} from "react";
import "./css/Galaxy_watch.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Sys_hide from "./Sys_hide.js";
import Sys from "./Sys.js";

import Size_hide from "./Size_hide.js";
import Size_first from "./Size_first.js";
import Size_second from "./Size_second.js";

import Model_color_fff from "./Model_color/Model_color_fff.js";
import Model_color_ffs from "./Model_color/Model_color_ffs.js";
import Model_color_classic from "./Model_color/Model_color_classic.js";
import Model_color_hide from "./Model_color/Model_color_hide.js";

import Slick_buy_model from "./Slick_buy_model/Slick_buy_model.js";





function Galaxy_watch(props){

    const [model,set_model] = useState(""); //model 값
    const [sys_Ty,set_sys_Ty] = useState("");    //구분
    const [size,set_size] = useState(""); //크기
    const [color,set_color] = useState(""); //하위 컬러 색깔

    const model_click = (click_data) =>{
        set_model(click_data) //모델 버튼 클릭시 active
        set_sys_Ty("") //모델 클릭시에 구분이 초기화면
        set_size("")  //모델 클릭시에 size가 초기화면
    }

    const jump_galaxywatch = () => {
        window.location.href = "personal_prodcut?product_id=8001&view=smart_watch"
    }

    // const sys_ty_click = (click_data) => {
    //     set_size("") //구분 클릭시에 size가 초기화면
    // }


    // const settings = {
    //     // fade : true,
    //     dots: false,
    //     autoplay:false,
    //     infinite: true,
    //     speed: 1000,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
 
    // };
    if(model == ""){                    //제품 구분 영역
        var model_sys = <Sys_hide
        />
    }
    else{
        var model_sys = <Sys
            sys_Ty = {sys_Ty}
            set_sys_Ty = {set_sys_Ty}
        />
    }

    if(model == "first"){
        var model_size = <Size_first
            sys_Ty = {sys_Ty} //sys_Ty 값이 ""일 때만 작동
            size = {size}
            set_size = {set_size}
            set_color = {set_color}
        />
    }
    else if(model == ""){
        var model_size = <Size_hide
        />
    }
    else{
        var model_size = <Size_second
            sys_Ty = {sys_Ty} //sys_Ty 값이 ""일 때만 작동
            size = {size}
            set_size = {set_size}
            set_color = {set_color}
        />
    }

    if( (model == "first" && sys_Ty == "first" && size == "first") || (model == "first" && sys_Ty == "second" && size == "first")){  /*블실핑 */
        var model_color = <Model_color_fff
            size = {size}
            color = {color}
            set_color = {set_color}
        />
    }
    else if( (model == "first" && sys_Ty == "first" && size == "second") || (model == "first" && sys_Ty == "second" && size == "second")){ /*블실그*/
        var model_color = <Model_color_ffs
            size = {size}
            color = {color}
            set_color = {set_color}
        />
    }
    else if((model == "second" && sys_Ty == "first" && size == "third") || (model == "second" && sys_Ty == "first" && size == "fourth") || (model == "second" && sys_Ty == "second" && size == "third") || (model == "second" && sys_Ty == "second" && size == "fourth")){
        var model_color = <Model_color_classic
            size = {size}
            color = {color}
            set_color = {set_color}
        />
    }
    else{  //초기 화면
        var model_color = <Model_color_hide

        />
    }




    if(model == "first" && sys_Ty =="first" && size == "second"){ //ffs
        var price_img = <img src="/img/Slide_Banner/galaxy_watch/buy_product/price_img/ffs.png"></img>
    }
    else if(model == "first" && sys_Ty =="second" && size == "second"){ //fsf
        var price_img = <img src="/img/Slide_Banner/galaxy_watch/buy_product/price_img/fsf.png"></img>
    }
    else if(model == "first" && sys_Ty =="second" && size == "second"){ //fss
        var price_img = <img src="/img/Slide_Banner/galaxy_watch/buy_product/price_img/fss.png"></img>
    }
    else if(model == "second" && sys_Ty =="first" && size == "fourth"){ //sff
        var price_img = <img src="/img/Slide_Banner/galaxy_watch/buy_product/price_img/sff.png"></img>
    }
    else if(model == "second" && sys_Ty =="first" && size == "third"){ //sft
        var price_img = <img src="/img/Slide_Banner/galaxy_watch/buy_product/price_img/sft.png"></img>
    }
    else if(model == "second" && sys_Ty =="second" && size == "third"){ //sst
        var price_img = <img src="/img/Slide_Banner/galaxy_watch/buy_product/price_img/sst.png"></img>
    }
    else if(model == "second" && sys_Ty =="second" && size == "fourth"){ //ssf
        var price_img = <img src="/img/Slide_Banner/galaxy_watch/buy_product/price_img/ssf.png"></img>
    }
    else{ //fff
        var price_img = <img src="/img/Slide_Banner/galaxy_watch/buy_product/price_img/fff.png"></img>
    }

    if(model != "" && sys_Ty != "" && size != "" && color != ""){
        var slick_img = <Slick_buy_model
            model = {model}
            sys_Ty = {sys_Ty}
            size = {size}
            color = {color}
        />
    }
    else{
        var slick_img = <img src="/img/Slide_Banner/galaxy_watch/buy_product/galaxy_slick_main.jpg"></img>
    }

    return(
        <div id="Galaxy_watch_wrap">
            <div className="top_img_timer">
                <img src="/img/Slide_Banner/galaxy_watch/banner_timer.png"></img>
            </div>

            <div className="buy_model">
                <p className="header_p">Galaxy Watch4 <i>I</i> Watch4 Classic</p>
                <h2>우리 가족 건강 관리는 갤럭시 워치로!</h2>

                <div className="slick_wrap">
                    {slick_img}
                </div>
                <div className="right_side">
                    <div className="model">
                        <p>제품</p>
                        <div className="button_wrap">
                            <div className={model == "first" ? "left_button active" : "left_button"} onClick={()=>model_click("first")}>
                                <img src="/img/Slide_Banner/galaxy_watch/buy_product/small_watch.jpg"></img>
                                <p>갤럭시 워치4</p>
                            </div>

                            <div className={model == "second" ? "right_button active" : "right_button"} onClick={()=>model_click("second")}>
                                <img src="/img/Slide_Banner/galaxy_watch/buy_product/small_watch2.jpg"></img>
                                <p>갤럭시 워치4 클래식</p>
                            </div>
                        </div>
                    </div>

                    <div className="sys_Ty">
                        {model_sys}
                    </div>


                    <div className="size">
                        {model_size}
                    </div>

                    <div className="color">
                        {model_color}
                    </div>

                    <div className="price">
                        {price_img}
                    </div>

                    <div className="info_button_wrap">
                        <a href="https://www.samsung.com/sec/event/galaxy-watch4/javascript/">자세히보기</a>
                        <div className="pro_info" onClick={()=>jump_galaxywatch()}>제품 상세정보</div>
                    </div>
                    <div className="user_event">
                        <img src="/img/Slide_Banner/galaxy_watch/buy_product/event_samsung.png"></img>
                    </div>
                </div>
            </div>

            <div className="event_benefit1">
                <img src="/img/Slide_Banner/galaxy_watch/event_benefit1.png"></img>
            </div>

            <div className="event_benefit2">
                <img src="/img/Slide_Banner/galaxy_watch/event_benefit2.png"></img>
            </div>

            <div className="footer_info1">
                <img src="/img/Slide_Banner/galaxy_watch/footer_info1.png"></img>
            </div>
            <div className="footer_info2">
                <img src="/img/Slide_Banner/galaxy_watch/footer_info2.png"></img>
            </div>
        </div>
    )
}

export default Galaxy_watch;