import React , {useEffect, useState} from "react";
import "./css/Pro_Posts.css";
import Pro_post from "./Pro_post.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Pro_Posts(props){

    const [Current_page,set_Current_page] = useState(1)
    const [Page_per_page,set_Page_per_page] = useState(3)

    useEffect(()=>{
    },[])

    const slice_post = (data) => {
        var indexOfLast = Current_page * Page_per_page;
        var indexOfFirst = indexOfLast - Page_per_page;

        var slice_list = data.slice(indexOfFirst,indexOfLast);
        return slice_list;
    }

    const pro_post_map =  props.pro_posts.map(
        (data,index) => (
            <Pro_post
                key = {index}
                data = {data}
                view = {props.view}
            />
        )
    )
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };

    return(
        <div id="Pro_Posts_wrap">
            <Slider {...settings}>
                {pro_post_map}
            </Slider>
        </div>
    )
}

export default Pro_Posts;