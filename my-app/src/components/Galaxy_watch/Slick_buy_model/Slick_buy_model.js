import React , {useEffect, useState} from "react";
import "./css/Slick_buy_model.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Slick_buy_model(props){

    const [background , set_background] = useState("")
    const [path_name , set_path_name] = useState("")

    const settings = {
        // fade : true,
        dots: false,
        autoplay:false,
        infinite: true,
        speed: 1000,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
 
    };

    console.log("buy_model_slick",props)


    useEffect(()=>{
        if(props.model == "first" && props.sys_Ty != "" && props.size == "first"){
            set_path_name("fff")
            set_background(props.color)
        }
        else if(props.model == "first" && props.sys_Ty != "" && props.size == "second"){
            set_path_name("ffs")
            set_background(props.color)
        }
        else if(props.model == "second" && props.sys_Ty != "" && props.size == "third"){
            set_path_name("sft")
            set_background(props.color)
        }
        else if(props.model == "second" && props.sys_Ty != "" && props.size == "fourth"){
            set_path_name("sff")
            set_background(props.color)
        }
    },[props.color])

    

    return(
        <div id="Slick_buy_model_wrap" className={background != "" ? background : null}>
            <Slider {...settings}>
                        <div>
                            <img src={`/img/Slide_Banner/galaxy_watch/Slick_buy_product/${path_name}/${background}/${path_name}1.jpg`}></img>
                        </div>
                        <div>
                            <img src={`/img/Slide_Banner/galaxy_watch/Slick_buy_product/${path_name}/${background}/${path_name}2.jpg`}></img>
                        </div>
                        <div>
                            <img src={`/img/Slide_Banner/galaxy_watch/Slick_buy_product/${path_name}/${background}/${path_name}3.jpg`}></img>
                        </div>
                        <div>
                            <img src={`/img/Slide_Banner/galaxy_watch/Slick_buy_product/${path_name}/${background}/${path_name}4.jpg`}></img>
                        </div>
                        <div>
                            <img src={`/img/Slide_Banner/galaxy_watch/Slick_buy_product/${path_name}/${background}/${path_name}5.jpg`}></img>
                        </div>
                        <div>
                            <img src={`/img/Slide_Banner/galaxy_watch/Slick_buy_product/${path_name}/${background}/${path_name}6.jpg`}></img>
                        </div>
            </Slider>
        </div>
    )
}

export default Slick_buy_model;