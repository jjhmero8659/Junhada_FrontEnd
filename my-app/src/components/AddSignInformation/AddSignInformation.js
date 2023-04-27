import React , {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'; 
import "./css/AddSignInformation.css";
import image from "./image/AddSign.png";


const AddSignInformation = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{

    },[])



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
                    {/* <img src={image}></img> */}
                </div>
                <div id="AddSign_rightSide">
                    <div id="userInputAddInfo">
                        <p id="headTextInAddInfo">Additional Information</p>
                        <div id="AddInfoInputArea">
                            <input className="InputUserInfo" type="text" placeholder="PhoneNumber"/>
                            <input className="InputUserInfo" type="text" placeholder="City"/>
                            <input className="InputUserInfo" type="text" placeholder="Street"/>
                            <input className="InputUserInfo" type="text" placeholder="Zipcode"/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default AddSignInformation;
