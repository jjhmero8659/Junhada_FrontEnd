import axios from "axios";
import React , {useEffect, useState} from "react";
import "./css/Create_review.css";
import File_Posts from "./File_Posts.js";
import queryString from "query-string";
import $ from "jquery";
import {useLocation, useNavigate} from "react-router-dom";




function Create_review(props){
    const navigate = useNavigate();
    const location = useLocation();
    const [review_header , set_review_header] = useState("");
    const [review_summary , set_review_summary] = useState("");
    const [review_date , set_review_date] = useState("");
    const [review_time , set_review_time] = useState("");
    const [review_inquiry , set_review_inquiry] = useState(0);
    const [review_good_rec , set_good_rec] = useState(0);
    const [review_num , set_review_num] = useState(0);
    const [pro_name,set_pro_name] = useState(null);
    const [left_distance,set_distance] = useState([400,800,1200,1600,2000])
    const [w,set_w] = useState(400)
    let [current,set_current] = useState(0)
    let [slick_moving,set_slick_moving] = useState(false);
    const [count, set_count] = useState(1)

    const [upload_img,set_upload_img] = useState([]);

    const del_upload_file = (data) => {
        // alert(upload_img[data].file.name)
        let tmp = [];
        for(let i=data; i<upload_img.length; i++){
            if(i == data){
                continue;
            }
            else{
                tmp.push(upload_img[i])
            }
        }

        set_upload_img(tmp)
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
    
    const add_review = async() => {
        alert("load")

        let today = new Date();
        let year = today.getFullYear();
        let temp = [];
        await handlePost();
    }


    const handleFileInput = (e)=>{
        if(upload_img.length <5){
            let temp = [];

            const photoToAdd = e.target.files;
            for (let i = 0; i < photoToAdd.length; i++) {
                temp.push(
                    { 
                        file: photoToAdd[i],
                    }
                )
            };
            set_upload_img(temp.concat(upload_img))
        }
        else{
            alert("이미지는 5개 까지만 등록이 가능합니다.");
        }
        
    }


    // const handleFileInput = (e)=>{
    //     // console.log("///////")
    //     let change_value = document.getElementById("input-file")
    //     let index_of = change_value.value.lastIndexOf("\\");
    //     let replace_str = change_value.value.slice(index_of+1,change_value.value.length)
    //     // change_value.value = `${e.target.files[0].name}`
    //     let dom_upload_name = document.getElementsByClassName("upload-name")[0];
    //     // console.log(dom_upload_name.value)
    //     dom_upload_name.value = replace_str
    //     // console.log("!!!!!!!!!")
    //     // console.log(dom_upload_name)
    //     set_upload_img(e.target.files[0])
    // }
    
    const handlePost = async()=>{
        for(let i=0; i<upload_img.length; i++){
            const formData = new FormData();
            formData.append('file', upload_img[i].file);

            await axios(
                {
                    url: '/file/upload',
                    method: 'POST',
                    data : formData,
                    params : {
                        articleId : location.state.id
                    },
                    headers: {
                        'Content-Type': 'multipart/form-data' // 요청 헤더에 Content-Type을 지정
                    },
                    baseURL: 'http://localhost:8080',
                }
            ).then(function (response) {
                console.log(response.data)
            });
        }
    }
    
    

    useEffect(()=>{
        let today = new Date();  
        let year = today.getFullYear(); // 년도
        let month = today.getMonth() + 1;  // 월
        let date = today.getDate();  // 날짜
        let hours = today.getHours();
        let minutes = today.getMinutes();  // 분
        let seconds = today.getSeconds();

        if(date < 10 && month < 10){
            set_review_date(`${year}-0${month}-0${date}`)
        }
        else if(date < 10){
            set_review_date(`${year}-${month}-0${date}`)
        }
        else if(month < 10){
            set_review_date(`${year}-0${month}-${date}`)
        }
        else{
            set_review_date(`${year}-${month}-${date}`)
        }
        set_review_time(`${hours}_${minutes}_${seconds}`)
        
    },[])

    const rtn_review_board = () => {
        navigate("/create_review", {
                state: {
                    id: props.id
                }
            });
    }

    const get_pro_name = async(id,view) => {
        // console.log("hi")   
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
                // console.log($(".make_slick_wrap div:first"))
				$(".make_slick_wrap").css({left:"+="+w+"px"});
				$(".make_slick_wrap div:first").remove();
                // console.log($(".make_slick_wrap div:first"))
				if(current < total-1){
					current++;
				}else{
					current=0;
				}
				// console.log("current : "+current);
				// $(".btn_group li").removeClass("active");
				// $(".btn_group li").eq(current).addClass("active");

				// var arrayData=distance.pop();
				// distance.unshift(arrayData);
				// console.log("distance : "+distance.join(", "));
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
                // console.log($(".make_slick_wrap div:first"))
				
				$(".make_slick_wrap>div:last").remove();
                // console.log($(".make_slick_wrap div:first"))
				if(current > 0){
					current--;
				}else{
					current=total-1;
				}
				// console.log("current : "+current);
				// $(".btn_group li").removeClass("active");
				// $(".btn_group li").eq(current).addClass("active");

				// var arrayData=distance.pop();
				// distance.unshift(arrayData);
				// console.log("distance : "+distance.join(", "));
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


    return(
        <div id="Create_review_wrap">
            <div id="Review_Board_border">
                <div id="Review_Board_detail_wrap">
                    <div className="right_submenu">
                        <div className="advertise_banner">
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

                    <div className="return_review_board" onClick={()=>rtn_review_board()}>
                        <p className="rtn_p">{pro_name}</p>
                        <p className="rtn_p_sec">제품 리뷰 작성</p>
                    </div>
                    <div className="Review_title_wrap">
                        <p>제목</p>
                        <div className="Reivew_title">
                            <input type="text" placeholder="제목을 입력해주세요" onChange={(e)=>set_review_header(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="Review_writer_wrap">
                        <p>작성자</p>
                        <div className="Reivew_writer">
                            {window.sessionStorage.getItem("username")}
                        </div>
                        <p className="create_date">등록일</p>
                        <div className="Reivew_date">
                            {review_date}
                        </div>
                        <p>조회</p>
                        <div className="Reivew_inquiry">
                            {review_inquiry}
                        </div>
                        <p>추천 수</p>
                        <div className="Reivew_good_rec">
                            {review_good_rec}
                        </div>
                    </div>
                    <div className="upload_img_wrap">
                        <div class="upload-name">
                            {
                                (upload_img.length > 0) && <File_Posts
                                    data = {upload_img}
                                    del_upload_file = {del_upload_file}
                                />
                            }
                        </div>
                        <input id="input-file"  accept="image/jpg, image/jpeg, image/png"  className="upload_img_input" type="file" multiple name="file" style={{display:"none"}} onChange={(e) => handleFileInput(e)}/>
                        <label for="input-file" className="file_label">
                            이미지 추가
                        </label>
                        {/* <button type="button" onClick={()=>handlePost()}>업로드</button> */}
                    </div>
                    <div className="Reivew_summary_wrap">
                        <textarea className="create_summary_text" type="text" font-size="14px" onChange={(e)=>set_review_summary(e.target.value)}></textarea>
                    </div>
                    <div className="complete_btn_wrap">
                        <div className="complete_btn" onClick={()=>add_review()}>
                            글 작성
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Create_review;