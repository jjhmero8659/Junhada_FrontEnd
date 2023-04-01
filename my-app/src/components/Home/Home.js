import React,{Component, useEffect, useState} from "react";
import axios from "axios"
import Category_Header from "./Category_Header.js";
import DropDown from "./DropDown.js";
import Slide_Banner from "./Slide_Banner.js";
import Slick_smallimage from "./Slick_smallimage.js";
import "./css/Home.css";
import Posts from "./PagiNation/Posts.js";
import Change_Post from "./PagiNation/Change_Post.js";
import Best_Product from "./Best_Product.js";
import Advertising_screen from "./Advertising_screen.js";
import Advertising_screen_left from "./Advertising_screen_left.js";
import Advertising_screen_left2 from "./Advertising_screen_left2.js";





class Home extends Component{
  constructor(props){
    super(props)

    this.state = {
       //Product 전체로 날아온다면 render할때 분류해서 던지자~
      view : "NoteBook",
      user_view : "NoteBook"
    }
  }

    componentDidMount(){}

    update_view = (data) => {
    this.props.update_view(data)
    

    var str = data.replace(/_/gi," ");
    var up_str = str.charAt(0).toUpperCase() + str.slice(1)

    console.log(data)
    this.setState({
      view : data,
      user_view : up_str
    })
 }

  render(){
    return(
      <div id="Home_wrap">
        <header>
          {/* <Category_Header/> */}
        </header>
        <nav>
           <DropDown/>
           <Slide_Banner/>
           <Slick_smallimage/>
        </nav>
        <div>
            <Best_Product/>
        </div>
        <div>
            <Advertising_screen/>
            <Advertising_screen_left/>
            <Advertising_screen_left2/>
        </div>
        <div className="PagiNation_div">
            <div className="PagiNation_header">
              <div className="font_product">
                {this.state.user_view}
              </div>
            </div>
            <Change_Post
              update_view = {this.update_view} //여기서 app view 변경
            />
            {
              this.state.view == "NoteBook" && (<Posts
                  Product = {this.props.NoteBook} //여기서 분류
                  view = {this.state.view}
              />)
            }
            {
              this.state.view == "TV" && (<Posts
                  Product = {this.props.TV}
                  view = {this.state.view}
              />)
            }
            {
              this.state.view == "Air_conditioner" && (<Posts
                  Product = {this.props.Air_conditioner} //여기서 분류
                  view = {this.state.view}
              />)
            }
            {
              this.state.view == "Washing_machine" && (<Posts
                  Product = {this.props.Washing_machine}
                  view = {this.state.view}
              />)
            }
            {
              this.state.view == "Smart_watch" && (<Posts
                  Product = {this.props.Smart_watch} //여기서 분류
                  view = {this.state.view}
              />)
            }
            {
              this.state.view == "Wireless_earphones" && (<Posts
                  Product = {this.props.Wireless_earphones} //여기서 분류
                  view = {this.state.view}
              />)
            }
            {
              this.state.view == "dryer" && (<Posts
                  Product = {this.props.dryer} //여기서 분류
                  view = {this.state.view}
              />)
            }
            {
              this.state.view == "robotic_vacuum" && (<Posts
                  Product = {this.props.robotic_vacuum} //여기서 분류
                  view = {this.state.view}
              />)
            }
            {
              this.state.view == "wireless_cleaner" && (<Posts
                  Product = {this.props.wireless_cleaner} //여기서 분류
                  view = {this.state.view}
              />)
            }
        </div>
        <div className="footer_Advertise">
            <a><img src="/img/Advertise/Car_direct.png"></img></a>
        </div>

        <footer>
              <div className="footer_info">
                <p>
                최고의 전자제품 선택
                </p>
                <p>
                개인정보보호책임자 *** | 사업자등록번호 ***-***-***
                경상북도 경산시 대학로 280 (영남대학교) | 이메일 wkd86591@naver.com
                </p>
                <p>
                의견/문의
                wkd86591@naver.com
                </p>
              </div>
          </footer>
        
      </div>
    )
  }
}

export default Home;