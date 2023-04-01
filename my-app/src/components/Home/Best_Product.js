import axios from "axios";
import React , {useEffect, useState} from "react";
import "./css/Best_Product.css";
// import Best_Post from "./Best_Product/Post.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Best_Product(props){

    const [Product,set_Product] = useState(props.Product)
    const [Represent_data,set_Represent_data] = useState(null)

    useEffect(()=>{
        Representative_review();
    },[])

    const Representative_review = async() => {
        await axios(
            {
              url: '/article/main/represent',
              method: 'GET',
              baseURL: 'http://localhost:8080',
            }
          ).then(function (response) {
            set_Represent_data(response.data)
          });
    }


    const Best_pro_settings = {
        fade : true,
        dots: false,
        autoplay:true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const representArticles = Represent_data != null ? Represent_data.map(
        (data) => (
            <div id="Best_review_first_div" className="Best_review_wrap">
                        <div className="product_model_txt">
                            {data.title}
                            <div className="review_writer_div">
                                {data.nickName} 님
                            </div>
                        </div> 
                        <div className="profile_img">
                            {
                                data.reviewImages.map(
                                    (src) => (
                                        <div className="profile_img_el">
                                            <img src={src}></img>
                                        </div>
                                    )
                                )
                            }
                        </div>
                        <div className="summary_div">
                            {data.summary}
                        </div>
                        <div className="rec_div">
                            <div className="good_rec_wrap">
                                <div className="img_div">
                                    
                                </div>
                                <div className="rec_num_txt">
                                    {data.good_rec}
                                </div>
                            </div>

                            <div className="bad_rec_wrap">
                                <div className="img_div">
                                    
                                </div>
                                <div className="rec_num_txt">
                                    {data.bad_rec}
                                </div>
                            </div>
                        </div>
                        <div className="detail_btn" onClick={()=>jumpArticleDetail()}>
                            자세히 보기
                        </div> 
                    </div>
        )
    ) : null

    const jumpArticleDetail = () => {
        window.location.href=`/review_board/detail?pro_id=${Represent_data[0].pro_id}&user_name=${Represent_data[0].writer}&title=${Represent_data[0].title}&view=${Represent_data[0].view}&create_time=${Represent_data[0].time}`
    }
    

    
    return(
        <div id="Best_Product_wrap">
            <div className="header">
                베스트 상품평
            </div>
            {Represent_data && <div className="Posts_wrap">
                <Slider {...Best_pro_settings}>
                    {representArticles}
                </Slider>
            </div>}
        </div>
    )
}

export default Best_Product;