import React , {useEffect, useState} from "react";
import { useLocation } from 'react-router-dom';
import "./css/Drop_down_list.css";
import queryString from "query-string";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pro_Posts from "./Drop_Down_lists/Pro_Posts.js"


function Drop_down_list(props){
    const location = useLocation();
    const [pro_lists,set_pro_lists] = useState(null)

    useEffect(()=>{
        get_view_pro();
    },[])

    const get_view_pro = async() => {
        await axios(
            {
              url: '/product/list',
              method: 'get',
              params: {
                view : location.state.view
              } , 
              baseURL: 'http://localhost:8080',
            }
          ).then(function (response) {
            set_pro_lists(response.data)
          });
    }

    const settings = {
        arrows : false,
        fade : true,
        dots: false,
        autoplay:true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover : false,
 
    };

    return(
        <div id="Drop_down_list_wrap">
            <div className="top_area">
                <div className="img_wrap">
                    <div className="top_linear cutton"></div>
                    <Slider {...settings}>
                        <div><img src="/img/Drop_Down_detail/Notebook/K-001.png"></img></div>
                        <div><img src="/img/Drop_Down_detail/Notebook/K-002.png"></img></div>
                        <div><img src="/img/Drop_Down_detail/Notebook/K-003.png"></img></div>
                        <div><img src="/img/Drop_Down_detail/Notebook/K-004.png"></img></div>
                        <div><img src="/img/Drop_Down_detail/Notebook/K-005.png"></img></div>
                        <div><img src="/img/Drop_Down_detail/Notebook/K-006.png"></img></div>
                    </Slider>
                    <div className="bottom_linear cutton"></div>
                </div>
            </div>
            <div className="middle_area">
                <div className="middle_wrap">
                    <div class="videoWrapper">
                        <div className="top_cutton"></div>
                        <div className="top_liner_cutton"></div>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/IfFzCjMk3x4?autoplay=1&mute=1&start=110&end=120&controls=0&loop=1&autohide=1&playsinline=1&rel=0&disablekb=1&playlist=IfFzCjMk3x4" frameborder="0" allowfullscreen></iframe>
                        <div className="bottom_liner_cutton"></div>
                        <div className="bottom_cutton"></div>
                    </div>
                </div>
                <div className="transparency"></div>
            </div> 

            <div className="middle_area2">
                <div className="middle_wrap">
                    <div class="videoWrapper">
                        <div className="top_cutton"></div>
                        <div className="top_liner_cutton"></div>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/QauoNSNb6xE?autoplay=1&mute=1&showinfo=0&start=110&end=120&controls=0&loop=1&autohide=1&playsinline=1&rel=0&disablekb=1&playlist=QauoNSNb6xE" frameborder="0" allowfullscreen></iframe>
                        <div className="bottom_liner_cutton"></div>
                        <div className="bottom_cutton"></div>
                    </div>
                </div>
                <div className="transparency"></div>
            </div>

            <div className="product_list">
                <h1>List</h1>
                {pro_lists != null && <Pro_Posts
                    pro_posts = {pro_lists}
                    view = {location.state.view}
                />}
            </div>
        </div>
    )
}

export default Drop_down_list;