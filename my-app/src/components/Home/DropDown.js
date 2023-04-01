import React , {useEffect, useState} from "react";
import "./css/DropDown.css";
import jquery from 'jquery';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';


function DropDown (props){
  const navigate = useNavigate();
  useEffect(()=>{
    let Drop_down = document.getElementById("DropDown_wrap")
    let sub_element = document.getElementsByClassName("sub")
    let blank_element = document.getElementsByClassName("blank")[0]
    Drop_down.addEventListener("mouseover", function (event) {
      blank_element.style.display = "block"
      blank_element.style.height = "280px"
      for(let i=0; i<sub_element.length; i++){
        sub_element[i].style.display = "block"
        sub_element[i].style.height = "280px"
      }
    }, false);

    Drop_down.addEventListener("mouseout", function (event) {
      blank_element.style.display = "none"
      blank_element.style.height = "0px"
      for(let i=0; i<sub_element.length; i++){
        sub_element[i].style.display = "none"
        sub_element[i].style.height = "0px"
      }
    }, false);

  })


  const jump_Drop_down = (view) => {
    navigate("/Drop_Down/product", {
      state: {
        view : view
      }
    });
  }

    return(
      <div id="DropDown_wrap">
        <ul className="gnb">
            <li><a>테크</a></li>
            <ul className="sub">
              <li><a onClick={()=>jump_Drop_down("NoteBook")}>노트북</a></li>
              <li><a onClick={()=>jump_Drop_down("TV")}>TV</a></li>
              <li><a onClick={()=>jump_Drop_down("WirelessEarphone")}>무선 이어폰</a></li>
              <li><a onClick={()=>jump_Drop_down("SmartWatch")}>스마트 워치</a></li>
              <li><a onClick={()=>jump_Drop_down("SmartPhone")}>스마트 폰</a></li>
              <li><a onClick={()=>jump_Drop_down("Tab")}>탭/패드</a></li>
            </ul>
        </ul>
        <ul className="gnb">
            <li><a>생활가전</a></li>
            <ul className="sub">
              <li><a onClick={()=>jump_Drop_down("WirelessCleaner")}>무선 청소기</a></li>
              <li><a onClick={()=>jump_Drop_down("RoboticVacuum")}>로봇 청소기</a></li>
              <li><a onClick={()=>jump_Drop_down("AirConditioner")}>공기 청정기</a></li>
              <li><a onClick={()=>jump_Drop_down("Dryer")}>건조기</a></li>
              <li><a onClick={()=>jump_Drop_down("WashingMachine")}>세탁기</a></li>
            </ul>
        </ul>
        <ul className="gnb">
            <li><a>계절가전</a></li>
            <ul className="sub">
              <li><a onClick={()=>jump_Drop_down("Humidifier")}>가습기</a></li>
              <li><a onClick={()=>jump_Drop_down("AirConditioner")}>에어컨</a></li>
              <li><a onClick={()=>jump_Drop_down("Fan")}>선풍기</a></li>
              <li><a onClick={()=>jump_Drop_down("Dehumidifier")}>제습기</a></li>
            </ul>
        </ul>
        <ul className="gnb">
            <li><a>주방가전</a></li>
            <ul className="sub">
              <li><a onClick={()=>jump_Drop_down("Blender")}>믹서기</a></li>
              <li><a onClick={()=>jump_Drop_down("RiceCooker")}>전기밥솥</a></li>
              <li><a onClick={()=>jump_Drop_down("AirFryer")}>에어프라이어</a></li>
              <li><a onClick={()=>jump_Drop_down("DishWasher")}>식기 세척기</a></li>
              <li><a onClick={()=>jump_Drop_down("Refrigerator")}>냉장고</a></li>
              <li><a onClick={()=>jump_Drop_down("KimchiRefrigerator")}>김치 냉장고</a></li>
            </ul>
        </ul>
        <div className="blank"></div>
      </div>
    )
  }

export default DropDown;