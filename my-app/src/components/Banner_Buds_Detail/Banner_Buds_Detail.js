import React , {useEffect, useState} from "react";
import "./css/Banner_Buds_Detail.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Banner_Buds_Detail(props){

    const buds_detail = () => {
        window.location.href = "/personal_prodcut?product_id=8201&view=Wireless_earphones";
    }
    
    const settings = {
        // fade : true,
        dots: true,
        autoplay:true,
        infinite: true,
        speed: 1000,
        arrows : true,
        slidesToShow: 1,
        slidesToScroll: 1,
 
    };

    const settings_second = {
        // fade : true,
        dots: true,
        autoplay:false,
        infinite: true,
        speed: 200,
        arrows : true,
        slidesToShow: 1,
        slidesToScroll: 1,
 
    };

    return(
        <div id="Banner_Buds_Detail_wrap">
            <div className="top_banner">
                <img src="/img/Slide_Banner/buds_detail/detail_banner.png"></img>
            </div>
            <div className="user_event">
                <img src="/img/Slide_Banner/buds_detail/event.png"></img>
            </div>

            <div className="slick_animate">
                <div className="slick_wrap">
                    <Slider {...settings}>
                        <div>
                            <img src="/img/Slide_Banner/buds_detail/slide1/buds2_buying1.jpg"></img>
                        </div>
                        <div>
                            <img src="/img/Slide_Banner/buds_detail/slide1/buds2_buying2.jpg"></img>
                        </div>
                        <div>
                            <img src="/img/Slide_Banner/buds_detail/slide1/buds2_buying3.jpg"></img>
                        </div>
                        <div>
                            <img src="/img/Slide_Banner/buds_detail/slide1/buds2_buying4.jpg"></img>
                        </div>
                        <div>
                            <img src="/img/Slide_Banner/buds_detail/slide1/buds2_buying5.jpg"></img>
                        </div>
                    </Slider>
                </div>
                <div className="right_side">
                    <div className="pro_name_txt">갤럭시 버즈2 오닉스 + 펩시</div>
                    <p className="pro_code_txt">SM-R177NZKAGCP</p>
                    <div className="pro_color_price">
                        <img src="/img/Slide_Banner/buds_detail/slide1/buds_color_price.png"></img>
                    </div>
                    <a href="https://www.samsung.com/sec/buds/package-sm-r177nzkagcp/SM-R177NZKAGCP/" className="link_buds">자세히 보기</a>
                    <div className="detail_product" onClick={() => buds_detail()}>
                        제품 상세정보
                    </div>
                </div>
            </div>

            <div className="slide_animate2">
                <p>시크한 매력의 새로운 컬러</p>
                <p>Galaxy Buds2 Onyx</p>
                <div className="slick_wrap">
                    <Slider {...settings_second}>
                        <div>
                            <img src="/img/Slide_Banner/buds_detail/slide2/buds_onyx1.jpg"></img>
                        </div>
                        <div>
                            <img src="/img/Slide_Banner/buds_detail/slide2/buds_onyx2.jpg"></img>
                        </div>
                        <div>
                            <img src="/img/Slide_Banner/buds_detail/slide2/buds_onyx3.jpg"></img>
                        </div>
                        <div>
                            <img src="/img/Slide_Banner/buds_detail/slide2/buds_onyx4.jpg"></img>
                        </div>
                        <div>
                            <img src="/img/Slide_Banner/buds_detail/slide2/buds_onyx5.jpg"></img>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="footer_event">
                <img src="/img/Slide_Banner/buds_detail/buds_info_txt.png"></img>
            </div>
        </div>
    )
}

export default Banner_Buds_Detail;