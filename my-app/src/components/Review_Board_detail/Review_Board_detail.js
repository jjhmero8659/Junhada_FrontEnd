import React , {useEffect, useState ,useRef} from "react";
import { useLocation , useNavigate } from 'react-router-dom'; 
import "./css/Review_Board_detail.css";
import queryString from "query-string";
import axios from "axios";
import Summary_text from "./Summary_text.js";
import $ from "jquery";

import Comment_Posts from "./Comment_Posts.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Review_Board_detail(props,callback, delay){
    const navigate = useNavigate();
    const location = useLocation();

    const [review,set_review] = useState(null);
    const [summary_info,set_summary_info] = useState([]);
    const [pro_id,set_pro_id] = useState("");
    const [update_summary, set_update_summary] = useState("");
    const [view,set_view] = useState("");
    const [comment,set_comment] = useState([]);
    const [create_time,set_create_time] = useState(null);

    const [Current_page,set_Current_page] = useState(3)
    const [Page_per_page,set_Page_per_page] = useState(5)
    const [comment_arr_len, set_comment_arr_len] = useState(0)

    const [count, set_count] = useState(1)
    const [left_distance,set_distance] = useState([400,800,1200,1600,2000])
    const [w,set_w] = useState(400)
    let [current,set_current] = useState(0)
    let [slick_moving,set_slick_moving] = useState(false);

    

    useEffect(()=>{
        get_reviewData();
    },[])

    const interval_func = () => {
            left_slide()
    }

    const get_reviewData = async() => {
        await axios(
            {
              url: '/article/information',
              method: 'GET',
              params: {
                 id : location.state.productId
              } , 
              baseURL: 'http://localhost:8080',
            }
          ).then(function (response) {
            console.log(response.data)
            set_review(response.data)
          });
    }


    function useInterval(callback, delay) {
        const savedCallback = useRef(); // 최근에 들어온 callback을 저장할 ref를 하나 만든다.
      
        useEffect(() => {
          savedCallback.current = callback; // callback이 바뀔 때마다 ref를 업데이트 해준다.
        }, [callback]);
      
        useEffect(() => {
          function tick() {
            savedCallback.current(); // tick이 실행되면 callback 함수를 실행시킨다.
          }
          if (delay !== null) {
            // 만약 delay가 null이 아니라면
            let id = setInterval(tick, delay); // delay에 맞추어 interval을 새로 실행시킨다.
            return () => clearInterval(id); // unmount될 때 clearInterval을 해준다.
          }
        }, [delay]); // delay가 바뀔 때마다 새로 실행된다.
    }

    const left_slide = () => {
        var total=$(".make_slick_wrap div").length;
        
        if(slick_moving == false){
            set_slick_moving(true)
            if(count <5){
                set_count((count)=>count+1)
            }
            else{
                set_count((count)=>1)
            }
            $(".make_slick_wrap>div:first").clone().appendTo(".make_slick_wrap"); //첫번째를 마지막에
			$(".make_slick_wrap").stop().animate({left:"-="+w+"px"}, 600, function(){
				$(".make_slick_wrap").css({left:"+="+w+"px"});
				$(".make_slick_wrap div:first").remove();
				if(current < total-1){
					current++;
				}else{
					current=0;
				}
                set_slick_moving(false)
		    });
        
        }
    }

    const right_slide = () => {
        var total=$(".make_slick_wrap div").length;
        if(slick_moving == false){
            set_slick_moving(true)
            if(count > 1){
                set_count((count)=>count-1)
            }
            else{
                set_count((count)=>5)
            }

            $(".make_slick_wrap>div:last").clone().prependTo(".make_slick_wrap"); //첫번째를 마지막에
            $(".make_slick_wrap").css({left:"-="+w+"px"});
			$(".make_slick_wrap").stop().animate({left:"+="+w+"px"}, 600, function(){
				
				$(".make_slick_wrap>div:last").remove();
				if(current > 0){
					current--;
				}else{
					current=total-1;
				}

                set_slick_moving(false)
		    });
        
        }
    }

    const left_slick_btn_fuc = () => {
        right_slide()
    }

    const right_slick_btn_fuc = () => {
        left_slide()
    }
    
    useInterval(interval_func,5000)

    const modify_summary = async(summary) => { //본문 수정
        set_update_summary(summary)
        const res = await axios.put(`/api/put/modify_summary${pro_id}&${summary}&${review.name}&${review.title}`);
    }

    const get_comment = async(review_data) => {
        const queryObj = queryString.parse(window.location.search)
        if(review_data.length != 0){
            var replace_title_ = review_data.title.replace(/ /g,"_");
            var replace_date_ = review_data.date.replace(/-/g,"_");
            
            const res = await axios.get(`/api/get_comment${queryObj.pro_id}&${review_data.title}&${replace_title_}&${review_data.name}&${replace_date_}&${review_data.time}`,{
            });

            let array = [res.data.Product]

            set_comment(array)
            set_comment_arr_len(res.data.Product.length)
        }
        
    }

    const back_detail = () => {
        window.location.href="/review_board?pro_id="+pro_id+"&view="+view;
    }

    const jump_mainscreen = () => {
        window.location.href = "/"
    }

    const jump_reviewscreen = () => {
        navigate("/review_board", {
            state: {
              productId : review.product_id
            }
        });
        // window.location.href = `/review_board?pro_id=${pro_id}&view=${view}`
    }

    const jump_proscreen = () => {
        // window.location.href = `/personal_prodcut?product_id=${pro_id}&view=${view}`
        navigate("/personal_prodcut", {
            state: {
              id : review.product_id,
              view : review.category
            }
        });
    }

    const jump_onix = () => {
        window.location.href = "/Slide_banner_Buds?product_id=9001&view=wirelessearphone"
    }

    const jump_s22 = () => {
        window.location.href = "/Slide_banner_Galaxy_S22"
    }

    const jump_tab8 = () => {
        window.location.href = "/Slide_banner_Galaxy_tab8"
    }

    const jump_watch4 = () => {
        window.location.href = "/Slide_banner_Galaxy_watch"
    }

    const jump_campus = () => {
        window.location.href = "https://www.samsung.com/sec/galaxycampus/?cid=sec_paid_ppc_google-pc_pc-campustore_ecommerce_searchad_text_20210719_%EC%82%BC%EC%84%B1%EB%AA%A8%EB%B0%94%EC%9D%BC%EC%9D%B4%EB%B2%A4%ED%8A%B8&utm_source=google-pc&utm_medium=2021campusstore-searchad&utm_campaign=2021campusstore&utm_term=%EC%82%BC%EC%84%B1%EB%AA%A8%EB%B0%94%EC%9D%BC%EC%9D%B4%EB%B2%A4%ED%8A%B8&gclid=CjwKCAjww8mWBhABEiwAl6-2RWLQysOS0yHs9p709KdqSVeOaQWQrIIaPe_upEw6qPh6FjxJsnRK1xoCVTQQAvD_BwE"
    }

    const summary = summary_info.map(
        (data,index) => (
            <Summary_text
                key={index}
                view = {view}
                pro_id = {pro_id}
                name = {data.name}
                data = {data}
                bagic_summary = {review.summary}
                summary_text = {update_summary}
                modify_summary = {modify_summary}
            />
        )
    )

    const comment_posts = comment.map(
        (data,index) => <Comment_Posts
            view = {view}
            review_data = {review}
            review_db_time = {review.time}
            review_db_date = {review.date}
            pro_id = {pro_id}
            data = {data}
            key = {index}
            review_create_time = {create_time}
        />
    )

    const settings_rev_detail = {
        // fade : true,
        arrows:true,
        dots: true,
        autoplay:true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed : 3000,
 
    };

    const change_main_image_fuc = (e) => {
        let tmp = "";
        let main_dom = document.getElementById("main_image");
        let target_dom = e.target;

        tmp = target_dom.src;
        target_dom.src = main_dom.src;
        main_dom.src = tmp;
    }

    
    
    return(
        <div id="Review_Detail_total_wrap">
            
            <div id="Review_Board_border">
                <h1 onClick={()=>back_detail()}>리뷰게시판</h1>
                {review != null && <div id="Review_Board_detail_wrap">
                    <div className="Review_title_wrap">
                        <p>제목</p>
                        <div className="Reivew_title">
                            {review.title}
                        </div>
                    </div>
                    <div className="Review_writer_wrap">
                        <p>작성자</p>
                        <div className="Reivew_writer">
                            {review.nickName}
                        </div>
                        <p className="date_title">등록일</p>
                        <div className="Reivew_date">
                            {review.date}
                        </div>
                        <p className="inquiry_img"><img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/eye_new.png"></img></p>
                        <div className="Reivew_inquiry">
                            {review.inquiry}
                        </div>
                        <p className="good_rec_img"><img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/heart2_new.png"></img></p>
                        <div className="Reivew_good_rec">
                            {review.good_rec}
                        </div>
                    </div>
                    <div className="image_area">
                        <img id="main_image" src={review.review_img1}></img>
                    </div>
                    <div className="sub_img_div">
                        {review.review_img2 != null && review.review_img2 != null && <img id="sub_seconde_image" src={review.review_img2} onClick={(e)=>change_main_image_fuc(e)}></img>}
                        {review.review_img3 != null && review.review_img2 != null && <img id="sub_third_image" src={review.review_img3} onClick={(e)=>change_main_image_fuc(e)}></img>}
                        {review.review_img4 != null && review.review_img2 != null && <img id="sub_forth_image" src={review.review_img4} onClick={(e)=>change_main_image_fuc(e)}></img>}
                        {review.review_img5 != null && review.review_img2 != null && <img id="sub_fifth_image" src={review.review_img5} onClick={(e)=>change_main_image_fuc(e)}></img>}   
                    </div>
                    <div className="Reivew_summary_wrap">
                        {review.summary}
                    </div>
                    <div className="img_test_src">
                        <span>원본파일 : </span>{review.review_img1}
                    </div>

                    <div className="Comments">
                        <h4 className="title">
                        {/* 댓글 {comment_arr_len} */}
                        </h4>
                        <div className="Borad_Comment_Posts_wrap">
                            {/* {comment_posts} */}
                        </div>
                    </div>
                </div>}
                <div className="right_menu">
                    <div className="banner_event">
                        <div id="jump_head">
                            화면 이동
                            <div className="jump_head_icon">
                                <img src="/img/others/side_board_more_off.png"></img>
                            </div>
                        </div>
                        <div className="child_div" onClick={()=>jump_proscreen()}>
                            해당 제품 메인 화면으로 이동
                        </div>
                        <div className="child_div" onClick={()=>jump_mainscreen()}>
                            사이트 메인 화면으로 이동
                        </div>
                        <div className="child_div" onClick={()=>jump_reviewscreen()}>
                            리뷰 게시판으로 이동
                        </div>
                    </div>
                    <div className="slide_banner">
                        <div id="detail_left_slick_btn" className="detail_slick_btn" onClick={()=>left_slick_btn_fuc()}></div>
                        <div id="detail_right_slick_btn" className="detail_slick_btn" onClick={()=>right_slick_btn_fuc()}></div>
                        <div className="pagination_div">
                            <span>{count}</span>/5
                        </div>
                        <div className="make_slick_wrap">
                            <div id="rev_first_post" className="event_poster">
                                <div className="poster_img" onClick={()=>jump_campus()}>
                                    <img src="/img/review_img_banner_img/campus.png"></img>
                                </div>
                                <div className="poster_text" onClick={()=>jump_campus()}>
                                    <div className="banner_title">
                                        삼성전자 공식 교육 할인 스토어!<br/>
                                        대학/대학원생/교원/교직원이라면 10~44% 교육 할인 혜택!
                                    </div>
                                </div>
                            </div>

                            <div id="rev_second_post" className="event_poster">
                                <div className="poster_img" onClick={()=>jump_onix()}>
                                    <img src="/img/review_img_banner_img/onix.png"></img>
                                </div>
                                <div className="poster_text">
                                    <div className="banner_title" onClick={()=>jump_onix()}>
                                        Galaxy Buds2와 pepsi의 톡 쏘는 만남! <br/>
                                        한정 수량의 기회 놓치지 마세요!
                                    </div>
                                </div>
                            </div>

                            <div id="rev_third_post" className="event_poster">
                                <div className="poster_img" onClick={()=>jump_s22()}>
                                    <img src="/img/review_img_banner_img/s22.png"></img>
                                </div>
                                <div className="poster_text" onClick={()=>jump_s22()}>
                                    <div className="banner_title">
                                        더욱 강력해진 갤럭시를 삼성카드 결제 시 최대 32만원 상당 <br/> 
                                        혜택으로 만나보세요 <br/> S22 Ultra
                                    </div>
                                </div>
                            </div>

                            <div id="rev_forth_post" className="event_poster">
                                <div className="poster_img" onClick={()=>jump_tab8()}>
                                    <img src="/img/review_img_banner_img/tab.png"></img>
                                </div>
                                <div className="poster_text" onClick={()=>jump_tab8()}>
                                    <div className="banner_title">
                                        갤럭시 탭 S22 누구나. 탭하나. 더크게 <br/>
                                        구매 혜택 보기
                                    </div>
                                </div>
                            </div>
                            <div id="rev_fifth_post" className="event_poster">
                                <div className="poster_img" onClick={()=>jump_watch4()}>
                                    <img src="/img/review_img_banner_img/watch.png"></img>
                                </div>
                                <div className="poster_text" onClick={()=>jump_watch4()}>
                                    <div className="banner_title">
                                        Galaxy Watch4 I Watch4 Classic 최대 30% 할인 <br/>
                                        감사의 마음을 담아 5월 가정의 달을 챙기세요
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review_Board_detail;