import React , {lazy, memo, useEffect, useState} from "react";
import "./css/Galaxy_S22.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from "jquery";


function Galaxy_S22(props){

    const [view,set_view] = useState(false);
    const [memory,set_memory] = useState("512GB");
    const [ScrollY, setScrollY] = useState(0);  // 스크롤값을 저장하기 위한 상태

    const [pro_color,set_pro_color] = useState("gra");
    const [color_arrow,set_color_arrow] = useState(false);

    const select_color = (data) => {
        set_pro_color(data)
    }

    const handleFollow = () => {
        var tab8 = document.querySelector("body");
        setScrollY(tab8.scrollTop); // window 스크롤 값을 ScrollY에 저장
    }


    useEffect(()=>{
        let pro_price = document.getElementsByClassName("pro_price")[0]
        if(memory == "512GB"){
            pro_price.innerHTML = "1,551,000"
        }
        else{
            pro_price.innerHTML = "1,749,000"
        }
    },[memory])

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
        let color_name = document.getElementsByClassName("color_name")[0];
        let left_slick_ele = document.getElementsByClassName("left_slick")[0].querySelectorAll("button")
        
        if(pro_color == "gra"){
            color_name.innerHTML = "그라파이트";
            for(let i=0; i<left_slick_ele.length; i++){
                left_slick_ele[i].style.backgroundImage = `url(/img/Slide_Banner/galaxy_S22/slick/gra/s22_gra${i+1}.jpg`;
            }
        }
        else if(pro_color == "sky_blue"){
            color_name.innerHTML = "스카이 블루";
            for(let i=0; i<left_slick_ele.length; i++){
                left_slick_ele[i].style.backgroundImage = `url(/img/Slide_Banner/galaxy_S22/slick/sky_blue/s22_sky_blue${i+1}.jpg`;
            }
        }
        else{
            color_name.innerHTML = "레드";
            for(let i=0; i<left_slick_ele.length; i++){
                left_slick_ele[i].style.backgroundImage = `url(/img/Slide_Banner/galaxy_S22/slick/red/s22_red${i+1}.jpg`;
            }
        }
    },[pro_color])


    useEffect(()=>{
        $(function(){
            $(".arrow_icon").click(
                function(e){
                    e.stopImmediatePropagation();
                    $(this).toggleClass("active");
                    // $(".ul_arrow").removeClass("active")
                    $(".sys_Ty").removeClass("active")
                    $(".option_sub").stop().slideUp(200)
                    $(".select_memory_box").find("ul").stop().slideToggle(200);
                    $(".product_detail").toggleClass("active");
                    $(".user_benefit").toggleClass("active");
                }
            )

            $(".color_wrap , .ul_arrow").click(
                function(e){
                    e.stopImmediatePropagation();
                    // $(".ul_arrow").toggleClass("active")

                    $(".product_detail").removeClass("active");
                    $(".user_benefit").removeClass("active");
                    $(".select_memory_box").find("ul").stop().slideUp(200);

                    if($(".option_sub").css("display") == "block"){
                        $(".sys_Ty").removeClass("active")
                    }
                    else{
                        $(".sys_Ty").addClass("active")
                    }

                    $(".option_sub").stop().slideToggle(200,function(){
                        if($(".option_sub").css("display") == "none"){

                            if($(".color_name").text() == "그라파이트"){
                                $(".a_color").css({"backgroundColor":"#6d7074"})
                            }
                            else if($(".color_name").text() == "스카이 블루"){
                                $(".a_color").css({"backgroundColor":"#b8c9e1"})
                            }
                            else{
                                $(".a_color").css({"backgroundColor":"#cc5853"})
                            }
                            $(".a_color").css({"display":"block"})
                            // 
                        }
                        else{
                            $(".a_color").css({"display":"none"})
                            // 
                        }
                    });

                    
                }
            )
        })
    },[])
    
    const jump_s22 = () => {
        window.location.href = "/personal_prodcut?product_id=9051&view=smartphone"
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
        <div id="Galaxy_S22_wrap">
            <div className={view ? "Galaxy_S22_transparency active" : "Galaxy_S22_transparency"}>
                <div className="slick_background_wrap">
                    <div className="slick_wrap">
                        <Slider {...trans_settings}>
                            <div>
                                <img src={`/img/Slide_Banner/galaxy_S22/slick/${pro_color}/s22_${pro_color}1.jpg`}></img>
                            </div>
                            <div>
                                <img src={`/img/Slide_Banner/galaxy_S22/slick/${pro_color}/s22_${pro_color}2.jpg`}></img>
                            </div>
                            <div>
                                <img src={`/img/Slide_Banner/galaxy_S22/slick/${pro_color}/s22_${pro_color}3.jpg`}></img>
                            </div>
                            <div>
                                <img src={`/img/Slide_Banner/galaxy_S22/slick/${pro_color}/s22_${pro_color}4.jpg`}></img>
                            </div>
                            <div>
                                <img src={`/img/Slide_Banner/galaxy_S22/slick/${pro_color}/s22_${pro_color}5.jpg`}></img>
                            </div>
                            <div>
                                <img src={`/img/Slide_Banner/galaxy_S22/slick/${pro_color}/s22_${pro_color}6.jpg`}></img>
                            </div>
                            <div>
                                <img src={`/img/Slide_Banner/galaxy_S22/slick/${pro_color}/s22_${pro_color}7.jpg`}></img>
                            </div>
                            <div>
                                <img src={`/img/Slide_Banner/galaxy_S22/slick/${pro_color}/s22_${pro_color}8.jpg`}></img>
                            </div>
                        </Slider>
                    </div>
                    <div className="close_icon" onClick={()=>set_view(!view)}>
                        <img src="/img/Slide_Banner/galaxy_tab8/icon/icon-close.jpg"></img>
                    </div>
                </div>
                
            </div>
            <div className="product_wrap">
                <div className="left_slick">
                    <div className="slick_wrap">
                        <Slider {...settings}>
                            <div>
                                <img src={`/img/Slide_Banner/galaxy_S22/slick/${pro_color}/s22_${pro_color}1.jpg`}></img>
                            </div>
                            <div>
                                <img src={`/img/Slide_Banner/galaxy_S22/slick/${pro_color}/s22_${pro_color}2.jpg`}></img>
                            </div>
                            <div>
                                <img src={`/img/Slide_Banner/galaxy_S22/slick/${pro_color}/s22_${pro_color}3.jpg`}></img>
                            </div>
                            <div>
                                <img src={`/img/Slide_Banner/galaxy_S22/slick/${pro_color}/s22_${pro_color}4.jpg`}></img>
                            </div>
                            <div>
                                <img src={`/img/Slide_Banner/galaxy_S22/slick/${pro_color}/s22_${pro_color}5.jpg`}></img>
                            </div>
                            <div>
                                <img src={`/img/Slide_Banner/galaxy_S22/slick/${pro_color}/s22_${pro_color}6.jpg`}></img>
                            </div>
                            <div>
                                <img src={`/img/Slide_Banner/galaxy_S22/slick/${pro_color}/s22_${pro_color}7.jpg`}></img>
                            </div>
                            <div>
                                <img src={`/img/Slide_Banner/galaxy_S22/slick/${pro_color}/s22_${pro_color}8.jpg`}></img>
                            </div>
                        </Slider>
                    </div>
                    <div className="view_icon" onClick={()=>set_view(!view)}>
                        <img src="/img/Slide_Banner/galaxy_tab8/icon/icon_big-view.jpg"></img>
                    </div>
                </div>
                <div className="right_side">
                    <span className="pro_status_text">청구할인</span><span className="pro_plan_text">My 갤럭시 플랜</span>
                    <div className="icon_wrap">
                        <div className="share">
                            <img src="/img/Slide_Banner/galaxy_tab8/icon/icon-share.jpg"></img>
                        </div>

                        <div className="heart">
                            <img src="/img/Slide_Banner/galaxy_tab8/icon/icon-heart-black.jpg"></img>
                        </div>
                    </div>
                    <h1 className="pro_name">
                        갤럭시 S22 Ultra 자급제 (삼성닷컴 단독컬러)
                    </h1>
                    <div className="pro_model_name">
                        SM-S908NZAMKOO
                    </div>
                    <div className="gpa_wrap">
                        <img src="/img/Slide_Banner/galaxy_tab8/gpa/total.png"></img>
                    </div>
                    <div className="event_price">
                        <span>판매가</span>
                        <button>
                            <img src="/img/Slide_Banner/galaxy_tab8/icon/icon-tooltip.jpg"></img>
                        </button>
                        <p><span className="pro_price">1,749,000 </span>원</p>
                    </div>

                    <div className="option_choice">
                        <div className="color">
                            <span>색상</span>
                            <div className="ul_wrap">
                                <ul className="option_gnb">
                                    <a className="color_wrap">
                                        <div className="a_color"></div>
                                        <p className="color_name">그라파이트</p>
                                    </a>
                                    <div className="ul_arrow"></div>
                                    <ul className="option_sub">
                                        <li>
                                            <div>
                                                <div className={pro_color == "gra" ? "gra active" : "gra"} onClick={()=>select_color("gra")}></div>
                                                <div className={pro_color == "sky_blue" ? "sky_blue active" : "sky_blue"} onClick={()=>select_color("sky_blue")}></div>
                                                <div className={pro_color == "red" ? "red active" : "red"} onClick={()=>select_color("red")}></div>
                                            </div>
                                        </li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                        <div className="sys_Ty active">
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
                                    <li><a href="#" className={memory == "512GB" ? "active" : null} onClick={()=>set_memory("512GB")}>512GB</a></li>
                                    <li><a href="#" className={memory == "1TB" ? "active" : null} onClick={()=>set_memory("1TB")}>1TB</a></li>
                                    </div>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="product_detail" onClick={()=>jump_s22()}>
                        제품 상세보기
                    </div>
                    <div className="user_benefit">
                        <a href="https://www.samsung.com/sec/galaxy-s22/promotion/"><img src="/img/Slide_Banner/Galaxy_S22/right_side/benefit_s22.jpg"></img></a>
                    </div>
                </div>

                <div className="advertise1">
                        <img src="/img/Slide_Banner/Galaxy_S22/footer/advertise1.png"></img>
                </div>

                <div className="advertise2">
                        <img src="/img/Slide_Banner/Galaxy_S22/footer/advertise2.png"></img>
                </div>

                <div className="footer_img">
                        <img src="/img/Slide_Banner/Galaxy_S22/footer/merge_pro_img.jpg"></img>
                </div>
            </div>
        </div>
    )
}

export default Galaxy_S22;