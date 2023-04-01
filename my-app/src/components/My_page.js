import axios from "axios";
import React , {useEffect, useState} from "react";
import "./css/My_page.css";
import My_page_img_posts from "./My_page_img_posts.js";


function My_page(props){

    const [user_profile_src,set_profile_src] = useState("")
    const [basic_image_div,set_basic_image_div] = useState(false)
    const [basic_image_DB,set_basic_image_DB] = useState([])
    const [update_img_db,set_update_img_db] = useState("")
    const [input_div,set_input_div] = useState(""); //
    const [first_step,set_first_step] = useState(""); //
    const [user_id,set_user_id] = useState(""); //유저 현재 기본 아이디
    const [validity_id,set_validity_id] = useState("") //아이디 유효성 검사
    const [validity_pw,set_validity_pw] = useState("") //비밀번호 유효성 검사
    const [user_sub_info,set_user_sub_info] = useState([]) // user phone,gender,...
    const [replace_sub_user_email,set_sub_user_email] = useState(null)
    const [replace_sub_phone_num,set_replace_sub_phone_num] = useState(null)

    const [first_step_click_status, set_first_step_click_status] = useState("") //클릭한 메뉴거 id , pw , info 중 하나

    const [second_step_click_status, set_second_step_click_status] = useState(false) //클릭한 메뉴거 id , pw , info 중 하나



    useEffect(()=>{
        user_profile_img_get();
        get_basic_image();
        get_sub_user_info();        
    },[])

    const second_close_btn = () => {
        let transparency_a = document.getElementsByClassName("transparency_a")[0];
        let transparency_b = document.getElementsByClassName("transparency_b")[0];
        transparency_a.style.display = "none";
        transparency_b.style.display = "none";
        set_first_step("")
    }

    const get_sub_user_info = async() => {
        const res = await axios.get(`/api/get/user_sub_info${window.sessionStorage.getItem("user_name")}`)
        set_user_sub_info(res.data.data[0])

        let replace_email = res.data.data[0].email.slice(0,1);
        replace_email = replace_email.concat("******") //w******

        replace_email = replace_email.concat(res.data.data[0].email.slice(res.data.data[0].email.indexOf("@"),(res.data.data[0].email.indexOf("@")+2))).concat("******")
        //w******@n******
        replace_email = replace_email.concat(res.data.data[0].email.slice(res.data.data[0].email.indexOf("."),res.data.data[0].email.length))
        set_sub_user_email(replace_email)

        let replace_phone_num = res.data.data[0].phone_number
        replace_phone_num = ("+82 ".concat(replace_phone_num.slice(1,res.data.data[0].phone_number.indexOf("-")+2))) //+82 10-3
        replace_phone_num = (replace_phone_num.concat("***")) //+82 10-3***
        replace_phone_num = replace_phone_num.concat(res.data.data[0].phone_number.slice(res.data.data[0].phone_number.lastIndexOf("-"),res.data.data[0].phone_number.lastIndexOf("-")+2))
        replace_phone_num = replace_phone_num.concat("***") //+82 10-3***-8***
        set_replace_sub_phone_num(replace_phone_num)
    }

    // useEffect(()=>{
    //     if(first_step == ""){
    //         alert("hi")
    //     }
    // },[first_step])

    const user_profile_img_get = async() => {
        const res = await axios.get(`/api/get/user_info_img${window.sessionStorage.getItem("user_name")}`)
        set_profile_src(res.data.img_src[0].profile_img)
    }

    const get_basic_image = async() => {
        const res = await axios.get(`/api/get_image/basic_image`)
        set_basic_image_DB(res.data.data)
    }

    const click_option = () => {
        set_basic_image_div(!basic_image_div)
    }

    const update_active_image = (data) => {
        set_update_img_db(data)
    }

    const update_DB_userimg = async() => {
        
        var Obj = {
            img : update_img_db,
            user_name : window.sessionStorage.getItem("user_name")
        }

        window.location.href = "/User_LogOut/MyPage";
        const res = await axios.post(`/api/update_user_img`,Obj)
    }

    const change_info = (data) => {
        let transparency_a = document.getElementsByClassName("transparency_a")[0];
        let transparency_b = document.getElementsByClassName("transparency_b")[0];
        let id_input = document.getElementsByClassName("id_user_input")[0];
        let pw_input = document.getElementsByClassName("pw_user_input")[0];
        set_first_step("")
        if(input_div != "id_input_div"){
            set_input_div("id_input_div");
            set_first_step_click_status(data);
            transparency_a.style.display = "block";
            transparency_b.style.display = "block";
            console.log(transparency_a.style.display)
            console.log(transparency_b.style.display)
        }
        else{
            set_input_div("");
            set_first_step_click_status("");
            transparency_a.style.display = "none";
            transparency_b.style.display = "none";
            
        }
        id_input.value = "";
        pw_input.value = "";
    }

    const complete_btn = async() => {
        
        let id_input = document.getElementsByClassName("id_user_input")[0];
        let pw_input = document.getElementsByClassName("pw_user_input")[0];

        set_user_id(id_input.value)
        var Obj = {
            user_name : window.sessionStorage.getItem("user_name"),
            user_id : id_input.value,
            user_pw : pw_input.value,
        }

        id_input.value = ""
        pw_input.value = ""

        if(input_div != "id_input_div"){
            set_input_div("id_input_div")
        }
        else{
            set_input_div("")
        }

        const res = await axios.put(`/api/put/update_userinfo`,Obj)

        if(res.data.data.length >=1){
            if(first_step_click_status == "id"){
                set_first_step("change_id")
                set_second_step_click_status(true)
            }
            else if(first_step_click_status == "pw"){
                set_first_step("change_pw")
                set_second_step_click_status(true)
            }
            else{
                set_first_step("change_info")
                set_second_step_click_status(true)
            }
        }
        else{
            alert("실패")
        }

    }

    const check_id = () => {
        let new_id_input = document.getElementsByClassName("sec_change_id")[0];

        var regExp = /^[A-Za-z]{1}[A-Za-z0-9]{3,19}$/

        var res = regExp.test(new_id_input.value)
        if(res == true){
            set_validity_id("유효한 id 입니다.")
        }
        else{
            set_validity_id("유효하지 않은 id 입니다.")
        }
        
        // return regExp.test(data)
    }

    const ochg_pw = () => {
        let new_pw_input = document.getElementsByClassName("update_pw_input")[0];

        var regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/


        var res = regExp.test(new_pw_input.value)
        if(res == true){
            set_validity_pw("유효한 password 형식 입니다.")
        }
        else{
            set_validity_pw("유효하지 않은 password 형식 입니다.")
        }
        
    }

    const fuc_chg_id = async() => {
        let new_id_input = document.getElementsByClassName("sec_change_id")[0];
        let sec_step_div = document.getElementsByClassName("sec_step")[0];
        let transparency_a = document.getElementsByClassName("transparency_a")[0];
        let transparency_b = document.getElementsByClassName("transparency_b")[0];

        if((validity_id == "유효한 id 입니다.") && (new_id_input.value != "")){

            var Obj = {
                // user_id : user_id,
                user_name : window.sessionStorage.getItem("user_name"),
                update_id : new_id_input.value,
            }
            set_input_div("")
            set_first_step("")
            set_second_step_click_status(false)
            
            set_validity_id("유효하지 않은 id 입니다.")
            alert("아이디 변경이 완료 되었습니다")
            const res = await axios.put(`/api/put/update_user_info_id`,Obj)
        }
        else{
            alert("유효하지 않은 id 형식 입니다.")
        }
    }

    const fuc_chg_pw = async() => {
        let present_pw = document.getElementsByClassName("present_pw_input")[0];
        let update_pw = document.getElementsByClassName("update_pw_input")[0];
        let transparency_a = document.getElementsByClassName("transparency_a")[0];
        let transparency_b = document.getElementsByClassName("transparency_b")[0]

        if((validity_pw == "유효한 password 형식 입니다.") && (validity_pw != "")){
            let Obj = {
                user_name : window.sessionStorage.getItem("user_name"),
                user_id : user_id,
                present_input_pw : present_pw.value,
                update_input_pw : update_pw.value
            }
    
            const res = await axios.put(`/api/put/select_user_password`,Obj) // get 기능 , Obj => put사용
            
            if(res.data.data.length >=1){
                alert("비밀번호 변경이 완료 되었습니다.")
                set_second_step_click_status(false)
                // transparency_a.style.display = "none";
                // transparency_b.style.display = "none";
                const res2 = await axios.put(`/api/put/update_user_password`,Obj)
            }
            else{
                alert("비밀번호가 올바르지 않습니다.")
            }
        }
        
        // if(present_pw.value == update_pw.value){

        // }
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

    let second_step = null;

    let grade_user = null;

    if(user_sub_info.name == "Admin"){
        grade_user = "관리자"
    }
    else{
        grade_user = "일반 회원"
    }

    if(first_step == "change_id"){
        second_step = <div className={second_step_click_status == true ? "sec_step active" : "sec_step"}>
            <div className="header_txt">아이디 변경</div>

            <div className="present_id_div">
                <div className="present_id_txt">현재 아이디</div>
                <div className="present_id">
                    {user_id}
                </div>
            </div>

            <div className="sec_change_div">
                <div className="sec_id_txt">새 아이디</div>
                <input type="text" className="sec_change_id" placeholder="4~20자리, 첫글자 숫자 X" onChange={()=>check_id()}>
                    
                </input>
                <div className="check_id">
                    {validity_id}
                </div>
            </div>
            <div className="sec_complete_btn" onClick={()=>fuc_chg_id()}>보내기</div>
            <div className="close_btn" onClick={()=>second_close_btn("")}></div>
        </div>
    }
    else if(first_step == "change_pw"){
        second_step = <div className={second_step_click_status == true ? "sec_step active" : "sec_step"}>
            <div className="header_txt">비밀번호 변경</div>

            <div className="change_pw_div">
                <p>회원님의 개인정보를 안전하게 보호하고, 개인정보 도용으로 인한 피해를 예방하기 위해 30일 이상 비밀번호를 변경하지 않은 경우 비밀번호 변경을 권장하고 있습니다.</p>
                <div className="present_id_wrap">
                    <span>아이디 : {user_id}</span>
                </div>

                <div className="present_pw_div">
                    <p>현재 비밀번호</p>
                    <input type="password" className="present_pw_input"></input>
                </div>

                <div className="update_pw_div">
                    <p>새 비밀번호</p>
                    <input type="password" className="update_pw_input" onChange={()=>ochg_pw()}></input>
                </div>
                <div className="ochg_pw">{validity_pw}</div>
            </div>
            <div className="sec_complete_btn" onClick={()=>fuc_chg_pw()}>보내기</div>
            <div className="close_btn" onClick={()=>second_close_btn("")}></div>
        </div>
    }
    else if(first_step == "change_info"){
        second_step = <div className={second_step_click_status == true ? "sec_step_info active" : "sec_step_info"}>
            <div className="header_txt">개인정보 수정</div>
            <div className="change_area">
                <div className="change_real_name_div">
                    <p className="chg_real_name_p">실명</p>
                    <input type="text" className="chg_real_name_input" placeholder={user_sub_info.real_name}></input>
                </div>

                <div className="change_name_div">
                    <p className="chg_name_p">활동명</p>
                    <input type="text" className="chg_name_input" placeholder={user_sub_info.name}></input>
                </div>

                <div className="change_gender_div">
                    <p className="chg_gender_p">성별</p>
                    <input type="text" className="chg_gender_input" placeholder={user_sub_info.gender}></input>
                </div>

                <div className="change_email_div">
                    <p className="chg_email_p">이메일</p>
                    <input type="text" className="chg_email_input" placeholder={user_sub_info.email}></input>
                </div>

                <div className="change_phone_div">
                    <p className="chg_phone_p">전화번호</p>
                    <input type="text" className="chg_phone_input" placeholder={user_sub_info.phone_number}></input>
                </div>
            </div>
            

            
            {/* <div className="sec_complete_btn" onClick={()=>fuc_chg_pw()}>보내기</div> */}
            <div className="close_btn" onClick={()=>second_close_btn("")}>{}</div>
        </div>
    }


    return(
        <div id="My_page_wrap">
            <div className="Top_text">
                <div className="top_linear cutton"></div>
                <img src={`/img/background_image/back_img2.jpg`}></img>
            </div>
            
            
            <div className="user_info_wrap">
                <div className="left_side">
                    <div className="user_profile">
                        <div className="img_wrap">
                            <img src={user_profile_src}></img>
                        </div>
                        <div className="change_img" onClick={()=>click_option()}>
                            <img src="/img/background_image/change.png"></img>
                        </div>
                        
                    </div>
                    <div className={basic_image_div == true ? "basic_img active" : "basic_img"}>
                        <div className="close_btn" onClick={()=>click_option()}>
                            X
                        </div>
                        <div className="inner_div">
                            <My_page_img_posts
                                data = {basic_image_DB}
                                update_active_image = {update_active_image}
                            />
                        </div>
                        <div className="complete" onClick={()=>update_DB_userimg()}>저장하기</div>
                    </div>
                    <div className="user_name">
                        {window.sessionStorage.getItem("user_name")} 님
                    </div>
                    <div className="user_grade">
                        <span className="menu_title">등급</span> : {grade_user}
                    </div>
                    <div className="user_review_count">
                        <span className="menu_title">작성 리뷰</span> : ??? 개
                    </div>
                    <div className="user_change_id">
                        <span className="menu_title" onClick={()=>change_info("id")}>아이디 변경</span>
                    </div>
                    <div className="user_change_pw">
                        <span className="menu_title" onClick={()=>change_info("pw")}>비밀번호 변경</span>
                    </div>
                    <div className="user_change_info">
                        <span className="menu_title" onClick={()=>change_info("info")}>개인정보 변경</span>
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
                                <img src={user_profile_src}></img>
                            </div>
                            <div className="user_real_name">
                                {user_sub_info.real_name}
                            </div>
                            <div className="user_email">
                                {user_sub_info.email}
                            </div>
                            <div className="update_real_name">실명수정</div>
                        </div>
                        <div className="phone_div">
                            <div className="phone_img"></div>
                            <div className="phone_number">{replace_sub_phone_num}</div>
                            <div className="upt_btn">수정</div>
                        </div>
                        <div className="email_div">
                            <div className="first_email_div">
                                <div className="email_img"></div>
                                <div className="my_page_email">{replace_sub_user_email}</div>
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

                <div className={input_div == "id_input_div" ? "id_input_div active" : "id_input_div"}>
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
                </div>
                {second_step}
                <div className="transparency_b"></div>
            </div>
            <div className="transparency_a"></div>
        </div>
    )
}

export default My_page;