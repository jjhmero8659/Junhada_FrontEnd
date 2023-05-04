import React , {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'; 
import "./css/AddSignInformation.css";
import DaumPostcode from "react-daum-postcode";
import image from "./image/water.png";
import axios from "axios";


const AddSignInformation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false); // 우편번호 컴포넌트의 노출여부 상태
    const [Email,setEmail] = useState(location.state.data.email);
    const [NickName,setNickName] = useState(null); 
    const [PhoneNumber,setPhoneNumber] = useState(null); 
    const [postCodeCity , setpostCodeCity] = useState(null);
    const [postCodeStreet , setpostCodeStreet] = useState(null);
    const [postCodeZipCode , setpostCodeZipCode] = useState(null);


    useEffect(()=>{
        console.log(location.state);
    },[])

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

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
      
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }

        document.getElementById("postCodeInput").value = fullAddress

        const [city, ...street] = fullAddress.split(" ");
        const streetAddress = street.join(" ");
        setpostCodeCity(city)
        setpostCodeStreet(streetAddress.split('(')[0].trim())
        setpostCodeZipCode(data.zonecode)
        setVisible(false)
      }

      const checkPhoneNum = () => {
        const regex = /^[0-9\b -]{0,13}$/;
        return regex.test(PhoneNumber);
      }

      const submitUserInfo = async() => {
        await axios(
            {
              url: '/sign/add/information',
              method: 'post',
              data: {
                 uid : location.state.data.uid,
                 nickname : NickName,
                 email : Email,
                 role : "ROLE_USER",
                 phoneNumber : PhoneNumber,
                 city : postCodeCity,
                 street : postCodeStreet,
                 zipcode : postCodeZipCode,
                 platform : location.state.platform
              } , 
              baseURL: 'http://localhost:8080',
            }
          ).then(function (response) {
            if(response.data == true){
                alert("회원가입이 완료 되었습니다.")
                window.location.href = "/";
            }
            else{
                alert("회원가입이 정상적으로 진행되지 못했습니다. 관리자에게 문의해주세요!!")
            }

        });
      }


    return(
        <div id="AddSignInformation_wrap">
            <div id="AddSignArea">
                <div id="AddSign_leftSide">
                    <p id="AddSign_HeadText">
                        I am in the process of writing a review for an electronic product <br/><br/>
                        sharing my thoughts and experiences with its features, performance, and overall value
                    </p>
                    <p id="AddSign_SubText">
                        Additional Information
                    </p>
                    <img id="leftWaterImage" src={image}></img>
                </div>
                <div id="AddSign_rightSide">
                    <div id="userInputAddInfo">
                        <p id="headTextInAddInfo">Additional Information</p>
                        <div id="AddInfoInputArea">
                            {/*<input className="InputUserInfo" type="text" placeholder={location.state.data.userName} readOnly/>*/}
                            <input className="InputUserInfo" type="text" placeholder={location.state.data.email} readOnly/>
                            <input className="InputUserInfo" type="text" placeholder="Phone Number" onChange={(e)=>setPhoneNumber(e.target.value)}/>
                            <div id="PostCodeArea">
                                <input id="postCodeInput" className="InputUserInfo" type="text" placeholder="Post Code" readOnly/>
                                <button type="button" onClick={()=>setVisible(true)}>검색</button>
                            </div>
                            <input className="InputUserInfo" type="text" placeholder="NickName" onChange={(e)=>setNickName(e.target.value)}/>
                            <div id="SubmitUserInfo" onClick={()=>submitUserInfo()}>Submit</div>
                        </div>
                    </div>
                </div>
            </div>
            {visible &&
                <div id="DaumPostCodeArea">
                    <DaumPostcode 
                        className="postmodal"
                        onComplete={handleComplete}
                        height={700}
                    />
                    <div id="DaumPostColseBtn" onClick={()=>setVisible(false)}>X</div>
                </div>
            }
        </div>
    )
}

export default AddSignInformation;
