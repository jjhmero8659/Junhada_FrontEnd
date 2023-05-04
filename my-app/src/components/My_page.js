import axios from "axios";
import React , {useEffect, useState} from "react";
import "./css/My_page.css";
import My_page_img_posts from "./My_page_img_posts.js";
import { useLocation } from 'react-router-dom'; 

function My_page(props){
    const location = useLocation();

    const [UserInfo,setUserInfo] = useState(null)
    const [basic_image_div,set_basic_image_div] = useState(false)
    const [replace_sub_user_email,set_sub_user_email] = useState(null)
    const [replace_sub_phone_num,set_replace_sub_phone_num] = useState(null)

    const [userMypageInfo,setuserMypageInfo] = useState(null)



    useEffect(()=>{
        getMyPageUserInfo()
    },[])

    const getMyPageUserInfo = async() => {
        await axios(
            {
              url: '/user/mypage',
              method: 'get',
              params: {
                 nickName : location.state.nickName
              } , 
              baseURL: 'http://localhost:8080',
            }
          ).then(function (response) {
            console.log(response.data);
            setUserInfo(response.data)
            // setuserMypageInfo(response.data)
        });

    }


    const alarm_switch_fuc = () => {
        let switch_div = document.getElementsByClassName("switch_on_off")[0];
        let switch_dom = document.getElementsByClassName("switch_btn")[0];
        if(switch_dom.style.left != "0px"){
            switch_dom.style.left = "0px";
            switch_div.classList.remove("active");
        }
        else{
            switch_dom.style.left = "35px";
            switch_div.classList.add("active");
        }
    }


    return(
        
        <div id="My_page_wrap">
            
            <div className="Top_text">
                <div className="top_linear cutton"></div>
                <img src={`/img/background_image/back_img2.jpg`}></img>
            </div>
            
            {UserInfo &&
            <div className="user_info_wrap">
                <div className="left_side">
                    <div className="user_profile">
                        <div className="img_wrap">
                            <img src={UserInfo.profileImage == null ? "/img/user_profile_img/Basic.png" : UserInfo.profileImage}></img>
                        </div>
                        <div className="change_img">
                            <img src="/img/background_image/change.png"></img>
                        </div>
                        
                    </div>
                    <div className={basic_image_div == true ? "basic_img active" : "basic_img"}>
                        <div className="close_btn">
                            X
                        </div>
                        <div className="inner_div">
                            {/* <My_page_img_posts
                                data = {basic_image_DB}
                            /> */}
                        </div>
                        <div className="complete">저장하기</div>
                    </div>
                    <div className="user_name">
                        {UserInfo.nickname} 님
                    </div>
                    <div className="user_grade">
                        <span className="menu_title">등급</span> : {UserInfo.role.split('_')[1]}
                    </div>
                    <div className="user_review_count">
                        <span className="menu_title">작성 리뷰</span> : ??? 개
                    </div>
                    <div className="user_change_id">
                        <span className="menu_title" >아이디 변경</span>
                    </div>
                    <div className="user_change_pw">
                        <span className="menu_title" >비밀번호 변경</span>
                    </div>
                    <div className="user_change_info">
                        <span className="menu_title" >개인정보 변경</span>
                    </div>
                    
                </div>

                <div className="right_side">
                    <div className="basic_user_info">
                        <div className="right_top_txt">
                            <span>기본정보</span>
                            <img src="/img/others/info_icon.png"></img>
                        </div>
                        <div className="myinfo_area">
                            <div className="profile_div">
                                <img src={UserInfo.profileImage == null ? "/img/user_profile_img/Basic.png" : UserInfo.profileImage}></img>
                            </div>
                            <div className="user_real_name">
                                {UserInfo.nickname}
                            </div>
                            <div className="user_email">
                                {UserInfo.email}
                            </div>
                            <div className="update_real_name">실명수정</div>
                        </div>
                        <div className="phone_div">
                            <div className="phone_img"></div>
                            <div className="phone_number">{UserInfo.phoneNumber}</div>
                            <div className="upt_btn">수정</div>
                        </div>
                        <div className="email_div">
                            <div className="first_email_div">
                                <div className="email_img"></div>
                                <div className="my_page_email">{UserInfo.email}</div>
                                <div className="upt_btn">수정</div>
                            </div>
                            <div className="second_email_div">
                                <div className="email_img"></div>
                                <div className="my_page_email">본인확인 이메일 없음</div>
                                <div className="upt_btn">수정</div>
                            </div>
                        </div>
                    </div>
                    <div className="promotion_div">
                        <div className="top_txt">
                            <p>새 기기 로그인 알림</p>
                            <img src="/img/others/info_icon.png"></img>
                        </div>
                        <div className="subindex_box">
                            <div className="subindex_phone_div">
                                <div className="phone_img"></div>
                                <div className="subindex_phone_txt">로그인 알림 제외 목록</div>
                                <div className="upt_btn">확인</div>
                            </div>
                            <div className="subindex_Alarm_div">
                                <div className="Alarm_img"></div>
                                <div className="subindex_phone_txt">로그인 알림</div>
                                <div className="switch_on_off" onClick={()=>alarm_switch_fuc()}>
                                    <div className="switch_btn"></div>
                                    <div className="off_txt">OFF</div>
                                    <div className="on_txt">ON</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="secure_privacy">
                        <p>프라이버시 보호</p>
                        <img src="/img/others/info_icon.png"></img>
                        <div className="privacy_upt_btn">확인</div>
                    </div>

                    <div className="login_only">
                        <p>로그인 전용 아이디</p>
                        <img src="/img/others/info_icon.png"></img>
                        <div className="login_only_upt_btn">확인</div>
                    </div>
                </div>

                {/* <div className={input_div == "id_input_div" ? "id_input_div active" : "id_input_div"}>
                    <div className="head_txt">
                        개인정보 재확인
                    </div>
                    <div className="user_input">
                        <div className="name_div">
                            <p>회원 이름</p>
                            <div className="user_name_txt">{window.sessionStorage.getItem("user_name")}</div>
                        </div>

                        <div className="id_div">
                            <p>아이디</p>
                            <input type="text" className="id_user_input" placeholder="아이디 를 입력하세요"></input>
                        </div>

                        <div className="pw_div">
                            <p>비밀번호</p>
                            <input type="password" className="pw_user_input" placeholder="비밀번호 를 입력하세요"></input>
                        </div>
                    </div>
                    <div className="complete_btn" onClick={()=>complete_btn()}>보내기</div>

                    <div className="close_btn" onClick={()=>change_info()}></div>
                </div> */}
                {/* {second_step} */}
                <div className="transparency_b"></div>
            </div>

            }
            <div className="transparency_a"></div>
            
        </div>
    )
}

export default My_page;