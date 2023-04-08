import axios from "axios";
import React , {useEffect, useState} from "react";
import "./css/Join_membership_screen.css";


function Join_membership_screen(props){

    const [input_id,set_id] =  useState(null);
    const [input_pw,set_pw] =  useState(null);
    const [input_name,set_name] =  useState(null);
    const [input_phone_num,set_input_phone_num] = useState("");
    const [input_email,set_input_email] = useState("");

    // const checkPassword = () => {
    //     var regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/

    //     return regExp.test(input_pw)
    // }

    // const check_name = () => {
    //     var regExp = /^[가-힣a-zA-Z]+$/

    //     return regExp.test(input_name)
    // }

    // const check_id = () => {
    //     var regExp = /^[A-Za-z]{1}[A-Za-z0-9]{3,19}$/

    //     return regExp.test(input_id)
    // }

    // const check_phone = () => {
    //     let regExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

    //     return regExp.test(input_phone_num)
    // }

    // const check_email = () => {
    //     let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

    //     return regExp.test(input_email)
    // }

    // const check_realname = () => {
    //     let regExp = /^[가-힣]{2,4}$/;

    //     return regExp.test(input_real_name)
    // }

    // const comparePassword = () => {
    //     if(input_pw == input_check_pw){
    //         return true;
    //     }
    //     return false
    // }

    const submitFunc = async() => {
            await axios(
                {
                  url: '/sign/up',
                  method: 'put',
                  data: {
                     id : "213",
                     password : "3123",
                     email : "321312",
                     nickName : "3213"
                  } , 
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  baseURL: 'http://localhost:8080',
                }
              ).then(function (response) {

            });
    } 

    return(
        <div id="Join_membership_screen_wrap">
            <div id="MemberShipArea">
                <div id="MemberShip_leftSide">
                    <img src="/img/membership/MembershipImage.jpg"></img>
                </div>
                <div id="MemberShip_RightSide">
                <div id="formDiv">
                    <div id="headText">
                        <p>
                            Hey, We are glad you <br/>
                            chose Quick learner
                        </p>
                        <div class="line-with-text">
                            <div class="line"></div>
                            <span>Lets get started</span>
                            <div class="line"></div>
                        </div>
                    </div>
                    <div className="input_wrap">
                        <label>ID</label>
                        <input type="text" id="id" name="id"/><br/><br/>
                    </div>
                    <div className="input_wrap">
                        <label>Password</label>
                        <input type="password" id="pw" name="pw"/><br/><br/>
                    </div>
                    <div className="input_wrap">
                        <label>Email</label>
                        <input type="email" id="email" name="email"/><br/><br/>
                    </div>
                    <div className="input_wrap">
                        <label>nickName</label>
                        <input type="text" id="nickName" name="nickName"/><br/><br/>
                    </div>
                    <input id="MembershipSubmit" type="submit" value="Sign Up" onClick={()=>submitFunc()}/>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Join_membership_screen;