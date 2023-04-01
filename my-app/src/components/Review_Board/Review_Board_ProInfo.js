import React , {useEffect, useState} from "react";
import "./css/Review_Board_ProInfo.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Review_Board_ProInfo(props){
    const settings = {
        // fade : true,
        dots: false,
        autoplay:true,
        infinite: true,
        speed: 1000,
        fade :true,
        arrows:false
    };

    const images = props.images.map(
        (data) => (
            <div>
                <img src={data}></img>
            </div>
        )
    )

    return(
        <div id="Review_Board_ProInfo_wrap">
            <div className="pro_name">
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    {props.name}
                </a>
            </div>
            <div className="img_wrap">
                    <Slider {...settings}>
                        {images}
                    </Slider>
            </div>
        </div>
    )
}

export default Review_Board_ProInfo;