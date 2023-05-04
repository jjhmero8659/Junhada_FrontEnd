import axios from "axios";
import React , {useEffect, useState} from "react";
import "./css/Join_membership_screen.css";
import DaumPost from "../PostCode/DaumPost.js";


function Join_membership_screen(props){

    // const [Id,setId] =  useState(null);
    const [Password,setPassword] =  useState(null);
    const [Nickname,setNickname] =  useState(null);
    const [PhoneNumber,setPhoneNumber] = useState(null);
    const [Email,setEmail] = useState(null);
    const [visible, setVisible] = useState(false); // 우편번호 컴포넌트의 노출여부 상태
    const [postCodeCity , setpostCodeCity] = useState(null);
    const [postCodeStreet , setpostCodeStreet] = useState(null);
    const [postCodeZipCode , setpostCodeZipCode] = useState(null);

    useEffect(() => {
        if(PhoneNumber != null){
            if (PhoneNumber.length <= 11) {
                setPhoneNumber(PhoneNumber.replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/\-{1,2}$/g, ""));
            }
            if (PhoneNumber.length === 13) {
                setPhoneNumber(PhoneNumber.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
            }
        }
      }, [PhoneNumber]);

    const checkPassword = () => {
        const regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/

        return regExp.test(Password)
    }

    const checkPhoneNum = () => {
        const regex = /^[0-9\b -]{0,13}$/;
        return regex.test(PhoneNumber);
      }

    // const checkNickname = () => {
    //     var regExp = /^[가-힣a-zA-Z]+$/

    //     return regExp.test(Nickname)
    // }

    // const checkPhoneNum = () => {
    //     const regExp = /^[0-9\b -]{0,13}$/;

    //     return regExp.test(PhoneNumber)
    // }

    const checkEmail = () => {
        let regExp =new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
        return regExp.test(Email)
    }

    const validation = () => {
        if(!checkPassword()){
            alert("비밀번호 입력 양식이 맞지 않습니다.")
            return false;
        }
        else if(!checkPhoneNum()){
            alert("전화번호 입력 양식이 맞지 않습니다.")
            return false;
        }
        else if(!checkEmail()){
            alert("이메일 입력 양식이 맞지 않습니다.")
            return false;
        }
        return true
    }


    const submitFunc = async() => {
        if(validation()){
            await axios(
                {
                  url: '/sign/up',
                  method: 'put',
                  data: {
                     password : Password,
                     nickname : Nickname,
                     email : Email,
                     role : "ROLE_USER",
                     phoneNumber : PhoneNumber,
                     city : postCodeCity,
                     street : postCodeStreet,
                     zipcode : postCodeZipCode
                  } , 
                  baseURL: 'http://localhost:8080',

                  withCredentials: true
                }
              ).then(function (response) {
                alert("회원가입이 완료 되었습니다.")
                window.location.href = "/";
            });
        }
    } 

    return(
        <div id="Join_membership_screen_wrap">
            <div id="MemberShipArea">
                <div id="MemberShip_leftSide">
                    <img src="/img/backGroundImages/Graphic.jpg"></img>
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
                            <input type="email" id="email" name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
                        </div>
                        <div className="input_wrap">
                            <input type="password" id="pw" name="pw" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
                        </div>

                        <div className="input_wrap">
                            <input type="text" id="nickName" name="nickName" placeholder="Nickname" onChange={(e)=>setNickname(e.target.value)}/><br/><br/>
                        </div>
                        <div className="input_wrap">
                            <input type="text" id="phoneNumber" name="phoneNumber" placeholder="PhoneNumber" onChange={(e)=>setPhoneNumber(e.target.value)}/><br/><br/>
                        </div>
                        <div className="input_wrap">
                            <input type="text" id="postCode" name="postcode" placeholder="PostCode" value={postCodeCity != null ? postCodeCity + postCodeStreet : null}  readOnly/><br/><br/>
                            <button id="PostCodeByJoinMembership" type="button" onClick={()=>setVisible(true)}>Search</button>
                        </div>
                        <input id="MembershipSubmit" type="submit" value="Sign Up" onClick={()=>submitFunc()}/>
                    </div>
                </div>
                
            </div>
            {visible && <DaumPost
                setVisible = {setVisible}
                setpostCodeCity = {setpostCodeCity}
                setpostCodeStreet = {setpostCodeStreet}
                setpostCodeZipCode = {setpostCodeZipCode}
            />}
        </div>
    )
}

export default Join_membership_screen;