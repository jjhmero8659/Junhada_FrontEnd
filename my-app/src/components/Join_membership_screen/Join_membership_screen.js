import axios from "axios";
import React , {useEffect, useState} from "react";
import "./css/Join_membership_screen.css";


function Join_membership_screen(props){

    const [input_id,set_id] =  useState("");
    const [input_pw,set_pw] =  useState("");
    const [input_check_pw,set_check_pw] =  useState("");
    const [input_name,set_name] =  useState("");
    const [input_age,set_age] =  useState(0);
    const [input_phone_num,set_input_phone_num] = useState("");
    const [input_email,set_input_email] = useState("");
    const [input_real_name,set_input_real_name] = useState("");
    const [input_gender,set_gender] = useState("default");

    const checkPassword = () => {
        var regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/

        return regExp.test(input_pw)
    }

    const check_name = () => {
        var regExp = /^[가-힣a-zA-Z]+$/

        return regExp.test(input_name)
    }

    const check_id = () => {
        var regExp = /^[A-Za-z]{1}[A-Za-z0-9]{3,19}$/

        return regExp.test(input_id)
    }

    const check_phone = () => {
        let regExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

        return regExp.test(input_phone_num)
    }

    const check_email = () => {
        let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

        return regExp.test(input_email)
    }

    const check_realname = () => {
        let regExp = /^[가-힣]{2,4}$/;

        return regExp.test(input_real_name)
    }

    const comparePassword = () => {
        if(input_pw == input_check_pw){
            return true;
        }
        return false
    }

    const check_info = async() => {
        let pass = true
        // if(!check_id()){
        //     alert("아이디 입력 방식이 잘못되었습니다!")
        //     pass = false
        // }
        // if(!check_name()){
        //     alert("이름 입력 방식이 잘못되었습니다!")
        //     pass = false
        // }
        // if(!checkPassword()){
        //     alert("비밀번호 입력 방식이 잘못되었습니다!")
        //     pass = false
        // }
        // if(!comparePassword()){
        //     alert("비밀번호가 서로 다릅니다.")
        //     pass = false
        // }
        // if(!check_phone()){
        //     alert("핸드폰 번호가 맞지않습니다.")
        //     pass = false
        // }
        // if(!check_email()){
        //     alert("이메일 형식이 맞지않습니다.")
        //     pass = false
        // }
        // if(!check_realname()){
        //     alert("실명 형식이 맞지않습니다.")
        //     pass = false
        // }
        // if(input_gender == "default"){
        //     alert("성별을 선택해 주세요")
        //     pass = false
        // }
        
        if(pass){
            alert("회원가입이 완료 되었습니다")
            // let replace_phone_num = input_phone_num;
            // replace_phone_num = input_phone_num.slice(0,3).concat("-");
            // replace_phone_num = replace_phone_num.concat(input_phone_num.slice(3,7).concat("-"))
            // replace_phone_num = replace_phone_num.concat(input_phone_num.slice(7,input_phone_num.length))
            // var obj ={
            //     name : input_name,
            //     id : input_id,
            //     passwd : input_pw,
            //     gender : input_gender,
            //     email : input_email,
            //     real_name : input_real_name,
            //     phone_number : replace_phone_num,
            //     basic_img_profile : "/img/user_profile_img/jjangu_basic_hun.jpg",
            // }
            // console.log(obj)
            // const res = await axios.post('/join_membership',obj)
            await axios(
                {
                  url: '/membership',
                  method: 'get',
                  params: {
                     subject : "Jang"
                  } , 
                  baseURL: 'http://localhost:8024',
                }
              ).then(function (response) {
              });
        }
    } 

    return(
        <div id="Join_membership_screen_wrap">
            <video 
                autoPlay = {true}
                muted = {true}
                loop = {true}
                controls = {false}
            >
                <source src={`https://dlcdnwebimgs.asus.com/files/media/29FED2B5-05FD-4320-88A7-74285138DD53/v2/videos/Cooling_Motion.mp4`} type="video/mp4"></source>
            </video>
            <div className="input_wrap">
                <div className="real_name_check_wrap">
                    <p>실명</p>
                    <input type="text" className="input_real_name" onChange={(e)=>set_input_real_name(e.target.value)}></input>
                </div>

                <div className="id_wrap">
                    <p>아이디</p>
                    <input type="text" className="input_id" placeholder="4~20자리, 첫글자 숫자 X" onChange={(e)=>set_id(e.target.value)}></input>
                </div>

                <div className="pw_wrap">
                    <p>비밀번호</p>
                    <input type="password" className="input_pw" placeholder="최소 8자리, 숫자,문자,특수문자 최소 1개" onChange={(e)=>set_pw(e.target.value)}></input>
                </div>

                <div className="pw_check_wrap">
                    <p>비밀번호 재확인</p>
                    <input type="password" className="input_pw_check" onChange={(e)=>set_check_pw(e.target.value)}></input>
                </div>

                <div className="name_wrap">
                    <p>활동 명</p>
                    <input type="text" className="input_name" onChange={(e)=>set_name(e.target.value)}></input>
                </div>

                <div className="gender_wrap">
                    <p>성별</p>
                    <select className="gender_select" value={input_gender} onChange={(e)=>set_gender(e.target.value)}>
                        <option value="default" selected disabled hidden >미선택</option>
                        <option value="men">남자</option>
                        <option value="women">여자</option>
                    </select>
                </div>

                <div className="email_wrap">
                    <p>이메일</p>
                    <input type="text" className="input_name" onChange={(e)=>set_input_email(e.target.value)}></input>
                </div>

                <div className="phone_num_wrap">
                    <p>핸드폰 번호</p>
                    <input type="text" className="input_name" placeholder="핸드폰 번호" onChange={(e)=>set_input_phone_num(e.target.value)}></input>
                </div>

                <div className="complete_btn" onClick={()=>check_info()}>
                    Submit
                </div>
            </div>
        </div>
    )
}

export default Join_membership_screen;