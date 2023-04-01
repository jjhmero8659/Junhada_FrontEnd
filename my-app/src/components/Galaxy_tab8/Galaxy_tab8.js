import React , {memo, useEffect, useState} from "react";
import "./css/Galaxy_tab8.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from "jquery";


function Galaxy_tab8(props){

    const [view,set_view] = useState(false);
    const [memory,set_memory] = useState("128GB");
    const [ScrollY, setScrollY] = useState(0);  // 스크롤값을 저장하기 위한 상태

    const handleFollow = () => {
        var tab8 = document.querySelector("body");
        setScrollY(tab8.scrollTop); // window 스크롤 값을 ScrollY에 저장
    }

    useEffect(() => {
        var left_side = document.querySelector(".left_slick");
        if(ScrollY < 150){
            left_side.style.top = `0px`;
        }
        else if(ScrollY >= 150 && ScrollY <= 355){
            left_side.style.top = `${ScrollY-150}px`;
        }
        else if(ScrollY > 355){
            left_side.style.top = `210px`;
        }

    }, [ScrollY])

    useEffect(() => {
        var tab8 = document.querySelector("body");
        const watch = () => {
            tab8.addEventListener('scroll', handleFollow);
        }
        watch(); // addEventListener 함수를 실행
        return () => {
            tab8.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
        }
    })

    useEffect(()=>{
        $(function(){
            $(".arrow_icon").click(
                function(e){
                    e.stopImmediatePropagation();
                    $(this).toggleClass("active");
                    $(".select_memory_box").find("ul").stop().slideToggle(200);
                    if($(".product_detail").css("margin-top") == "420px"){
                        $(".product_detail").css({"margin-top":"520px"})
                        $(".user_benefit").css({"margin-top":"620px"})
                    }
                    else{
                        $(".product_detail").css({"margin-top":"420px"})
                        $(".user_benefit").css({"margin-top":"520px"})
                    }
                }
            )
        })
    },[])
    
    
    const jump_ultra = () => {
        window.location.href = `/personal_prodcut?product_id=9063&view=tap_ipad`

    }


    const settings = {
        // fade : true,
        dots: true,
        autoplay:false,
        infinite: true,
        speed: 1000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const trans_settings = {
        fade : true,
        // dots: true,
        autoplay:false,
        infinite: true,
        speed: 1000,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return(
        <div id="Galaxy_tab8_wrap">
            <div className={view ? "Galaxy_tab8_transparency active" : "Galaxy_tab8_transparency"}>
                <div className="slick_background_wrap">
                    <div className="slick_wrap">
                        <Slider {...trans_settings}>
                            <div>
                                <img src={`/img/Slide_Banner/galaxy_tab8/slick/${memory}/galaxy8_tab1.jpg`}></img>
                            </div>
                            <div>
                                <img src={`/img/Slide_Banner/galaxy_tab8/slick/${memory}/galaxy8_tab2.jpg`}></img>
                            </div>
                            <div>
                                <img src={`/img/Slide_Banner/galaxy_tab8/slick/${memory}/galaxy8_tab3.jpg`}></img>
                            </div>
                            <div>
                                <img src={`/img/Slide_Banner/galaxy_tab8/slick/${memory}/galaxy8_tab4.jpg`}></img>
                            </div>
                            <div>
                                <img src={`/img/Slide_Banner/galaxy_tab8/slick/${memory}/galaxy8_tab5.jpg`}></img>
                            </div>
                            <div>
                                <img src={`/img/Slide_Banner/galaxy_tab8/slick/${memory}/galaxy8_tab6.jpg`}></img>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="close_icon" onClick={()=>set_view(!view)}>
                    <img src="/img/Slide_Banner/galaxy_tab8/icon/icon-close.jpg"></img>
                </div>
            </div>
            <div className="product_wrap">
                <div className="left_slick">

                    <div className="slick_wrap">
                        <Slider {...settings}>
                            <div>
                                <img src={`/img/Slide_Banner/galaxy_tab8/slick/${memory}/galaxy8_tab1.jpg`}></img>
                            </div>
                            <div>
                                <img src={`/img/Slide_Banner/galaxy_tab8/slick/${memory}/galaxy8_tab2.jpg`}></img>
                            </div>
                            <div>
                                <img src={`/img/Slide_Banner/galaxy_tab8/slick/${memory}/galaxy8_tab3.jpg`}></img>
                            </div>
                            <div>
                                <img src={`/img/Slide_Banner/galaxy_tab8/slick/${memory}/galaxy8_tab4.jpg`}></img>
                            </div>
                            <div>
                                <img src={`/img/Slide_Banner/galaxy_tab8/slick/${memory}/galaxy8_tab5.jpg`}></img>
                            </div>
                            <div>
                                <img src={`/img/Slide_Banner/galaxy_tab8/slick/${memory}/galaxy8_tab6.jpg`}></img>
                            </div>
                        </Slider>
                    </div>
                    <div className="view_icon" onClick={()=>set_view(!view)}>
                        <img src="/img/Slide_Banner/galaxy_tab8/icon/icon_big-view.jpg"></img>
                    </div>
                </div>
                <div className="right_side">
                    <span className="pro_status_text">일시품절</span>
                    <div className="icon_wrap">
                        <div className="share">
                            <img src="/img/Slide_Banner/galaxy_tab8/icon/icon-share.jpg"></img>
                        </div>

                        <div className="heart">
                            <img src="/img/Slide_Banner/galaxy_tab8/icon/icon-heart-black.jpg"></img>
                        </div>
                    </div>
                    <h1 className="pro_name">
                        갤럭시 탭 S8 Ultra 5G
                    </h1>
                    <div className="pro_model_name">
                        SM-X906NZAAKOO
                    </div>
                    <div className="gpa_wrap">
                        <img src="/img/Slide_Banner/galaxy_tab8/gpa/total.png"></img>
                    </div>
                    <div className="event_price">
                        <span>판매가</span>
                        <button>
                            <img src="/img/Slide_Banner/galaxy_tab8/icon/icon-tooltip.jpg"></img>
                        </button>
                        <p><span>1,578,500 </span>원</p>
                    </div>

                    <div className="option_choice">
                        <div className="color">
                            <span>색상</span>
                            <div>
                                <div className="color_img">
                                    <img src="/img/Slide_Banner/galaxy_tab8/icon/color_gra.png"></img>
                                </div>
                                그라파이트
                            </div>
                        </div>
                        <div className="sys_Ty">
                            <span className="">구분</span>
                            <div>
                                자급제
                            </div>
                        </div>
                        <div className="memory">
                            <span>메모리</span>
                            <div className="select_memory_box">
                                <a>{memory}</a>
                                <div className = "arrow_icon">
                                    
                                </div>
                                <ul>
                                    <div className="li_btn_wrap">
                                    <li><a href="#" className={memory == "128GB" ? "active" : null} onClick={()=>set_memory("128GB")}>128GB</a></li>
                                    <li><a href="#" className={memory == "256GB" ? "active" : null} onClick={()=>set_memory("256GB")}>256GB</a></li>
                                    <li><a href="#" className={memory == "512GB" ? "active" : null} onClick={()=>set_memory("512GB")}>512GB</a></li>
                                    </div>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="product_detail" onClick={()=>jump_ultra()}>
                        제품 상세보기
                    </div>

                    <div className="user_benefit">
                        <img src="/img/Slide_Banner/galaxy_tab8/benefit/benefit.png"></img>
                    </div>
                </div>

                <div className="may_benefit">
                        <img src="/img/Slide_Banner/galaxy_tab8/footer_image/may_benefit.png"></img>
                </div>

                <div className="footer_img">
                        <img src="/img/Slide_Banner/galaxy_tab8/footer_image/footer_image.jpg"></img>
                </div>
            </div>
        </div>
    )
}

export default Galaxy_tab8;