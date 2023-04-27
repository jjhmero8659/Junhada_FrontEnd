import React,{Component} from "react";
import axios from "axios"
import "./App.css";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import queryString from "query-string";
import Home from "./components/Home/Home.js";
import Search from "./components/Search/Search.js";
import Search_Icon from "./components/Home/img/search_icon.png";
import Personal_Prodcut from "./components/Personal_product/Personal_product.js";
import Review_Board from "./components/Review_Board/Review_Board.js"
import Review_Board_detail from "./components/Review_Board_detail/Review_Board_detail.js"
import User_Login from "./components/User_Login/User_Login.js"
import User_LogOut from "./components/User_LogOut/User_LogOut.js"
import User_Login_Screen from "./components/User_Login_Screen/User_Login_Screen.js"
import Join_membership_screen from "./components/Join_membership_screen/Join_membership_screen.js"
import Create_review from "./components/Create_review/Create_review.js"
import Banner_Buds_Detail from "./components/Banner_Buds_Detail/Banner_Buds_Detail.js"
import Galaxy_watch from "./components/Galaxy_watch/Galaxy_watch.js"
import Galaxy_tab8 from "./components/Galaxy_tab8/Galaxy_tab8.js"
import Galaxy_S22 from "./components/Galaxy_S22/Galaxy_S22.js"
import Drop_down_list from "./components/Drop_down_list.js"
import My_page from "./components/My_page.js"
import ScrollToTop from "./ScrollToTop";
import AddSignInformation from "./components/AddSignInformation/AddSignInformation";

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      NoteBook : [
        {ranking : 1 ,id : 1 , name : "LG전자 그램 20년형 17인치 i5", image : "/img/Notebook/Notebook_detail/LG_gram_20_17_i5_2.jpg" , price : "2,240,000",review:13,gpa : 4.8,iframe :"https://www.youtube.com/embed/hUCKW8YUkGM" , iframe2 :"https://www.youtube.com/embed/oUzRG2Mq9f0"},
        {ranking : 2 ,id : 2 ,name : "삼성전자 갤럭시북 플렉스 13인치 i5", image : "/img/notebook/flex13_i5_1.jpg" , price : "1,527,870" ,review:8,gpa : 4.3,iframe :"https://www.youtube.com/embed/kvSckomk2zM"},
        {ranking : 3 ,id : 3 ,name : "LG전자 그램 20년형 14인치 i5", image : "/img/notebook/gram_20_14_1.jpg" , price : "767,030" ,review:9,gpa : 4.4,iframe :"https://www.youtube.com/embed/oUzRG2Mq9f0"},
        {ranking : 4 ,id : 4 ,name : "삼성전자 갤럭시북 플렉스 13인치 i7", image : "/img/notebook/flex13_i7_1.jpg" , price : "1,698,990" ,review:4,gpa : 4.2,iframe :"https://www.youtube.com/embed/S5k77vTzBjQ"},
        {ranking : 5 ,id : 5 ,name : "삼성전자 갤럭시북 이온 15인치 i5 MX250", image : "/img/notebook/ion_15_i5MX250_1.jpg" , price : "1,248,990",review:12,gpa : 4.1,iframe :"https://www.youtube.com/embed/NpTdUHjy-7E"},
        {ranking : 6 ,id : 6 ,name : "MSI GP시리즈 GP76 Leopard 11UG", image : "/img/notebook/msi_GP76_1.jpg" , price : "1,619,000" ,review:3,gpa : 4.8,iframe :"https://www.youtube.com/embed/QmDBKJvstHk"},
        {ranking : 7 ,id : 7 ,name : "주연테크 리오나인 젠 L8CS37", image : "/img/notebook/tech_L8CS37_1.jpg" , price : "1,399,000" ,review:7,gpa : 3.4,iframe :"https://www.youtube.com/embed/rT7CfkbE-UQ"},
        {ranking : 8 ,id : 8 ,name : "MSI 모던시리즈 모던15 A11M-i5 카본 그레이", image : "/img/notebook/A11M-i5_1.jpg" , price : "598,990" ,review:8,gpa : 3.7,iframe :"https://www.youtube.com/embed/pz5CxHVBp4A"},
        {ranking : 9 ,id : 9 ,name : "레노버 V15 Gen2 82KD000UKR 8GB램", image : "/img/notebook/82KD000UKR_1.jpg" , price : "448,980" ,review:10,gpa : 2.8,iframe :"https://www.youtube.com/embed/iGX6lL2AkQk"},
        {ranking : 10 ,d : 10 ,name : "에이서 니트로 5 AN515-58-71Z5", image : "/img/notebook/AN515-58-71Z5_1.jpg" , price : "1,479,000" ,review:2,gpa : 4.3,iframe :"https://www.youtube.com/embed/fIveStZwysA"},
      ],
      TV : [
        {ranking : 1 ,id : 1 ,name : "LG전자 울트라 HD TV AI 65인치", image : "/img/TV/TV/LG_ultra_ai_65.jpg" , price : 1240000 ,review:4,gpa : 4.8,iframe :"https://www.youtube.com/embed/lul44Eva0LQ"},
        {ranking : 2 ,id : 2 ,name : "삼성전자 The Sero 43인치", image : "/img/TV/TV/The_Sero_43.jpg" , price : 1500000 ,review:5,gpa : 4.9,iframe :"https://www.youtube.com/embed/1E1gEApdpOY"},
        {ranking : 3 ,id : 3 ,name : "LG전자 올레드 갤러리 TV 55인치", image : "/img/TV/TV/oled_gallery_55.jpg" , price : 2530000 ,review:7,gpa : 4.4,iframe :"https://www.youtube.com/embed/-ufR2b5Xa44"},
        {ranking : 4 ,id : 4 ,name : "LG전자 올레드 AI 55인치", image : "/img/TV/TV/oled_ai_55.jpeg" , price : 1000 ,review:3,gpa : 3.8,iframe :"https://www.youtube.com/embed/0rpRkNoyEao"},
        {ranking : 5 ,id : 5 ,name : "삼성전자 QLED 4K 65인치", image : "/img/TV/TV/qled_4k_65.jpeg" , price : 2260000 ,review:13,gpa : 4.1,iframe :"https://www.youtube.com/embed/hYFoty1PTgg"},
        {ranking : 6 ,id : 6 ,name : "삼성전자 The Serif 49인치", image : "/img/TV/TV/the_serif_49.jpeg" , price : 1660000 ,review:12,gpa : 4.2,iframe :"https://www.youtube.com/embed/rofMzCx_zFY"},
        {ranking : 7 ,id : 7 ,name : "삼성전자 QLED 4K 49인치", image : "/img/TV/TV/qled_4k_49.jpeg" , price : 710000 ,review:10,gpa : 4.3,iframe :"https://www.youtube.com/embed/SkvgxVvlyPo"},
        {ranking : 8 ,id : 8 ,name : "LG전자 울트라 HD TV AI 55인치", image : "/img/TV/TV/ultra_hd_ai_55.jpg" , price : 1100000 ,review:5,gpa : 2.8,iframe :"https://www.youtube.com/embed/A4xzVnM28o4"},
        {ranking : 9 ,id : 9 ,name : "LG전자 울트라 HD TV AI 75인치", image : "/img/TV/TV/ultra_hd_ai_75.jpg" , price : 1950000 ,review:2,gpa : 3.8,iframe :"https://www.youtube.com/embed/vvMVhZBbAg0"},
        {ranking : 10 ,id : 10 ,name : "삼성전자 Crystal UHD 55인치", image : "/img/TV/TV/crystal_uhd_55.jpeg" , price : 750000 ,review:7,gpa : 4.0,iframe :"https://www.youtube.com/embed/jQyVtn0rXaw"},
      ],
      Air_conditioner : [
        {ranking : 1 ,id : 1 ,name : "LG전자 오브제컬렉션 퓨리케어 에어로타워 FS061PSSA", image : "/img/Air_conditioner/lg_FS061PSSA_1.jpg" , price : "899,090" ,review:4,gpa : 4.8,iframe :"https://www.youtube.com/embed/lul44Eva0LQ"},
        {ranking : 2 ,id : 2 ,name : "LG전자 퓨리케어360 플러스 AS301DWFA", image : "/img/Air_conditioner/lg_AS301DWFA_1.jpg" , price : "829,060" ,review:5,gpa : 4.9,iframe :"https://www.youtube.com/embed/1E1gEApdpOY"},
        {ranking : 3 ,id : 3 ,name : "삼성전자 블루스카이 AX40A5311WMD", image : "/img/Air_conditioner/samsung_AX40A5311WMD_1.jpg" , price : "153,810" ,review:7,gpa : 4.4,iframe :"https://www.youtube.com/embed/-ufR2b5Xa44"},
        {ranking : 4 ,id : 4 ,name : "위닉스 타워 프라임 APRM833-JWK", image : "/img/Air_conditioner/winix_APRM833-JWK_1.jpg" , price : "315,580" ,review:3,gpa : 3.8,iframe :"https://www.youtube.com/embed/0rpRkNoyEao"},
        {ranking : 5 ,id : 5 ,name : "LG전자 퓨리케어360 AS171DWFC", image : "/img/Air_conditioner/lg_AS171DWFC_1.jpg" , price : "393,950" ,review:13,gpa : 4.1,iframe :"https://www.youtube.com/embed/hYFoty1PTgg"},
        {ranking : 6 ,id : 6 ,name : "LG전자 퓨리케어360˚ 펫 플러스 AS301DRPA", image : "/img/Air_conditioner/AS301DRPA_1.jpg" , price : "1,026,230" ,review:13,gpa : 4.1,iframe :"https://www.youtube.com/embed/0nQBO8kI37s"},
        {ranking : 7 ,id : 7 ,name : "삼성전자 블루스카이 3000 AX34A5310WWD", image : "/img/Air_conditioner/AX34A5310WWD_1.jpg" , price : "134,400" ,review:13,gpa : 4.1,iframe :"https://www.youtube.com/embed/Plte1n8Pl90"},
        {ranking : 8 ,id : 8 ,name : "LG전자 퓨리케어360˚ AS281DWFC", image : "/img/Air_conditioner/AS281DWFC_1.jpg" , price : "820,550" ,review:13,gpa : 4.1,iframe :"https://www.youtube.com/embed/R4qRygxJ7hQ"},
        {ranking : 9 ,id : 9 ,name : "LG전자 퓨리케어360˚ AS280DWFC", image : "/img/Air_conditioner/AS280DWFC_1.jpg" , price : "811," ,review:13,gpa : 4.1,iframe :"https://www.youtube.com/embed/R4qRygxJ7hQ"},
        {ranking : 10 ,id : 10 ,name : "에어로타워 FS061PSGC", image : "/img/Air_conditioner/FS061PSGC_1.jpg" , price : "739,030" ,review:7,gpa : 4.0,iframe :"https://www.youtube.com/embed/jQyVtn0rXaw"},
        
      ],
      Smart_watch : [
        {ranking : 1 ,id : 1 ,name : "갤럭시 워치4 44mm", image : "/img/smartwatch/smartwatch/galaxy4_44mm.jpg" , price : "194,000" ,review:4,gpa : 4.8,iframe :"https://www.youtube.com/embed/lul44Eva0LQ"},
        {ranking : 2 ,id : 2 ,name : "갤럭시 워치4 40mm", image : "/img/smartwatch/smartwatch/galaxy4_40.jpg" , price : "150,000" ,review:5,gpa : 4.9,iframe :"https://www.youtube.com/embed/1E1gEApdpOY"},
        {ranking : 3 ,id : 3 ,name : "애플 워치 Series7", image : "/img/smartwatch/smartwatch/applewatch7.jpg" , price : "570,000" ,review:5,gpa : 4.9,iframe :"https://www.youtube.com/embed/1E1gEApdpOY"},
        {ranking : 4 ,id : 4 ,name : "애플 워치 SE", image : "/img/smartwatch/smartwatch/applewatchSE_2.jpg" , price : "510,000" ,review:5,gpa : 4.9,iframe :"https://www.youtube.com/embed/1E1gEApdpOY"},
        {ranking : 5 ,id : 5 ,name : "갤럭시 워치4 클래식 46mm 스테인리스 스틸", image : "/img/smartwatch/smartwatch/classic_steel1.jpg" , price : "297,270" ,review:5,gpa : 4.9,iframe :"https://www.youtube.com/embed/SlzwCC2-yOQ"},
        {ranking : 6 ,id : 6 ,name : "샤오미 어메이즈핏 GTS 2 미니 뉴버전 3세대", image : "/img/smartwatch/GTS_1.jpg" , price : "83,160" ,review:13,gpa : 4.1,iframe :"https://www.youtube.com/embed/0nQBO8kI37s"},
        {ranking : 7 ,id : 7 ,name : "삼성전자 갤럭시 워치4 44mm 골프에디션 GPS", image : "/img/smartwatch/GOLF_GPS_1.jpg" , price : "221,600" ,review:13,gpa : 4.1,iframe :"https://www.youtube.com/embed/Plte1n8Pl90"},
        {ranking : 8 ,id : 8 ,name : "APPLE 워치 시리즈7 45mm 미드나이트 알루미늄", image : "/img/smartwatch/midnight_1.jpg" , price : "452,880" ,review:13,gpa : 4.1,iframe :"https://www.youtube.com/embed/R4qRygxJ7hQ"},
        {ranking : 9 ,id : 9 ,name : "핏빗 Versa 3", image : "/img/smartwatch/Versa_1.jpg" , price : "229,000" ,review:13,gpa : 4.1,iframe :"https://www.youtube.com/embed/R4qRygxJ7hQ"},
        {ranking : 10 ,id : 10 ,name : "핏빗 Sense", image : "/img/smartwatch/Sense_1.jpg" , price : "348,990" ,review:7,gpa : 4.0,iframe :"https://www.youtube.com/embed/jQyVtn0rXaw"},
        
      ],
      Washing_machine : [
        {ranking : 1 ,id : 1 ,name : "LG전자 트롬 21kg", image : "/img/washing_machine/trom21_1.jpg" , price : "1,958,870" ,review:4,gpa : 4.8,iframe :"https://www.youtube.com/embed/lul44Eva0LQ"},
        {ranking : 2 ,id : 2 ,name : "LG전자 트롬 17kg", image : "/img/washing_machine/trom14_1.jpg" , price : "2,138," ,review:5,gpa : 4.9,iframe :"https://www.youtube.com/embed/1E1gEApdpOY"},
        {ranking : 3 ,id : 3 ,name : "LG전자 트롬 14kg", image : "/img/washing_machine/tong_1.jpg" , price : "3,430,000" ,review:7,gpa : 4.4,iframe :"https://www.youtube.com/embed/-ufR2b5Xa44"},
        {ranking : 4 ,id : 4 ,name : "LG전자 통돌이 14kg", image : "/img/washing_machine/tong_1.jpg" , price : "394,050" ,review:3,gpa : 3.8,iframe :"https://www.youtube.com/embed/0rpRkNoyEao"},
        {ranking : 5 ,id : 5 ,name : "삼성전자 워블 16kg", image : "/img/washing_machine/worble_1.jpg" , price : "412,490" ,review:13,gpa : 4.1,iframe :"https://www.youtube.com/embed/hYFoty1PTgg"},
        {ranking : 6 ,id : 6 ,name : "LG전자 오브제 컬렉션 워시타워 W20GEZ", image : "/img/washing_machine/W20GEZ_1.jpg" , price : "2,891,980" ,review:13,gpa : 4.1,iframe :"https://www.youtube.com/embed/0nQBO8kI37s"},
        {ranking : 7 ,id : 7 ,name : "삼성전자 비스포크 그랑데 AI WF24A9500KV", image : "/img/washing_machine/WF24A9500KV_1.jpg" , price : "2,1246,640" ,review:13,gpa : 4.1,iframe :"https://www.youtube.com/embed/Plte1n8Pl90"},
        {ranking : 8 ,id : 8 ,name : "LG전자 트롬 F17WDBP", image : "/img/washing_machine/F17WDBP_1.jpg" , price : "651,290" ,review:13,gpa : 4.1,iframe :"https://www.youtube.com/embed/R4qRygxJ7hQ"},
        {ranking : 9 ,id : 9 ,name : "LG전자 통돌이 블랙라벨 플러스 T20WT", image : "/img/washing_machine/T20WT_1.jpg" , price : "629,910" ,review:13,gpa : 4.1,iframe :"https://www.youtube.com/embed/R4qRygxJ7hQ"},
        {ranking : 10 ,id : 10 ,name : "LG전자 통돌이 TR16MK", image : "/img/washing_machine/TR16MK_1.jpg" , price : "447," ,review:7,gpa : 4.0,iframe :"https://www.youtube.com/embed/jQyVtn0rXaw"},
        
      ],
      Wireless_earphones : [
        {ranking : 1 ,id : 1 ,name : "갤럭시 버즈2 오닉스", image : "/img/Wireless_earphones/buds_onyx.jpg" , price : "119,000" ,review:32,gpa : 4.9},
        {ranking : 2 ,id : 2 ,name : "APPLE 에어팟 프로 2021년형", image : "/img/Wireless_earphones/airpod21_2.jpg" , price : "240," ,review:5,gpa : 4.9},
        {ranking : 3 ,id : 3 ,name : "APPLE 에어팟 3세대", image : "/img/Wireless_earphones/airpods_3.jpg" , price : "220,110" ,review:7,gpa : 4.4},
        {ranking : 4 ,id : 4 ,name : "갤럭시 버즈 프로 SM-R190", image : "/img/Wireless_earphones/galaxy_buds_pro.jpg" , price : "122,090" ,review:3,gpa : 3.8},
        {ranking : 5 ,id : 5 ,name : "갤럭시 버즈2 SM-R177", image : "/img/Wireless_earphones/galaxy_buds_2.jpg" , price : "122,090" ,review:13,gpa : 4.1},
        {ranking : 6 ,id : 6 ,name : "삼성전자 갤럭시 버즈 프로 SM-R190", image : "/img/Wireless_earphones/SM-R190_1.jpg" , price : "125,650" ,review:13,gpa : 4.1,iframe :"https://www.youtube.com/embed/0nQBO8kI37s"},
        {ranking : 7 ,id : 7 ,name : "SONY WF-1000XM4", image : "/img/Wireless_earphones/1000XM4_1.jpg" , price : "253,880" ,review:13,gpa : 4.1,iframe :"https://www.youtube.com/embed/Plte1n8Pl90"},
        {ranking : 8 ,id : 8 ,name : "애프터샥 샥즈 오픈런 프로 S810", image : "/img/Wireless_earphones/S810_1.jpg" , price : "215,100" ,review:13,gpa : 4.1,iframe :"https://www.youtube.com/embed/R4qRygxJ7hQ"},
        {ranking : 9 ,id : 9 ,name : "QCY AilyPods T20", image : "/img/Wireless_earphones/T20_1.jpg" , price : "15," ,review:13,gpa : 4.1,iframe :"https://www.youtube.com/embed/R4qRygxJ7hQ"},
        {ranking : 10 ,id : 10 ,name : "JBL LIVE PRO2", image : "/img/Wireless_earphones/PRO2_1.jpg" , price : "142,980" ,review:7,gpa : 4.0,iframe :"https://www.youtube.com/embed/jQyVtn0rXaw"},
        
      ],
      dryer : [
        {ranking : 1 ,id : 1 ,name : "LG전자 오브제컬렉션 트롬 RD20GS", image : "/img/dryer/trom_RD20GS_1.jpg" , price : "1,467,510" ,review:12,gpa : 4.6},
        {ranking : 2 ,id : 2 ,name : "LG전자 오브제컬렉션 트롬 RD20ES", image : "/img/dryer/trom_RD20ES_1.jpg" , price : "1,446,730" ,review:15,gpa : 4.8},
        {ranking : 3 ,id : 3 ,name : "삼성전자 그랑데 DV17T8520BP", image : "/img/dryer/grande_DV17T8520BP_1.jpg" , price : "825,490" ,review:27,gpa : 4.6},
        {ranking : 4 ,id : 4 ,name : "LG전자 트롬 ThinQ RH17VTS", image : "/img/dryer/thinq_1.jpg" , price : "1,239,060" ,review:33,gpa : 4.6},
        {ranking : 5 ,id : 5 ,name : "삼성전자 그랑데 AI DV19T8745BV", image : "/img/dryer/grande_DV19T8745BV_1.jpg" , price : "989," ,review:23,gpa : 4.8},
        {ranking : 6 ,id : 6 ,name : "LG전자 트롬 RH17VTLN", image : "/img/dryer/RH17VTLN_1.jpg" , price : "1,046,530" ,review:13,gpa : 4.1,iframe :"https://www.youtube.com/embed/0nQBO8kI37s"},
        {ranking : 7 ,id : 7 ,name : "삼성전자 DV90T5440KW", image : "/img/dryer/DV90T5440KW_1.jpg" , price : "617,100" ,review:13,gpa : 4.1,iframe :"https://www.youtube.com/embed/Plte1n8Pl90"},
        {ranking : 8 ,id : 8 ,name : "LG전자 오브제컬렉션 트롬 RD20WS", image : "/img/dryer/RD20WS_1.jpg" , price : "1,286,180" ,review:13,gpa : 4.1,iframe :"https://www.youtube.com/embed/R4qRygxJ7hQ"},
        {ranking : 9 ,id : 9 ,name : "삼성전자 비스포크 그랑데 AI DV20A8740BV", image : "/img/dryer/DV20A8740BV_1.jpg" , price : "1,137,690" ,review:13,gpa : 4.1,iframe :"https://www.youtube.com/embed/R4qRygxJ7hQ"},
        {ranking : 10 ,id : 8310 ,name : "LG전자 트롬 RH17VTA", image : "/img/dryer/RH17VTA_1.jpg" , price : "1,177,600" ,review:7,gpa : 4.0,iframe :"https://www.youtube.com/embed/jQyVtn0rXaw"},
        
      ],
      robotic_vacuum : [
        {ranking : 1 ,id : 1 ,name : "로보락 S7 MaxV Ultra", image : "/img/robotic_vacuum/robo_S7_MaxV_1.jpg" , price : "1,590,000" ,review:12,gpa : 4.9},
        {ranking : 2 ,id : 2 ,name : "삼성전자 비스포크 제트 봇 VR30T85514", image : "/img/robotic_vacuum/samsung_VR30T85514_1.jpg" , price : "508,470" ,review:15,gpa : 4.6},
        {ranking : 3 ,id : 3 ,name : "샤오미 로이드미 EVE PLUS", image : "/img/robotic_vacuum/EVE_PLUS_1.jpg" , price : "462,530" ,review:57,gpa : 4.5},
        {ranking : 4 ,id : 4 ,name : "로보락 S7 Plus", image : "/img/robotic_vacuum/robo_S7_Plus_1.jpg" , price : "947,000" ,review:13,gpa : 4.8},
        {ranking : 5 ,id : 5 ,name : "LG전자 오브제컬렉션 코드제로 ThinQ R9 RO971", image : "/img/robotic_vacuum/RO971_1.jpg" , price : "825,600" ,review:27,gpa : 4.4},
        {ranking : 6 ,id : 6 ,name : "에코백스 디봇 X1 OMNI", image : "/img/robotic_vacuum/OMNI_1.jpg" , price : "1,490,000" ,review:13,gpa : 4.1,iframe :"https://www.youtube.com/embed/0nQBO8kI37s"},
        {ranking : 7 ,id : 7 ,name : "에코백스 디봇 오즈모 T9", image : "/img/robotic_vacuum/T9_1.jpg" , price : "628,940" ,review:13,gpa : 4.1,iframe :"https://www.youtube.com/embed/Plte1n8Pl90"},
        {ranking : 8 ,id : 8 ,name : "삼성전자 비스포크 제트 봇 VR30T80313", image : "/img/robotic_vacuum/VR30T80313_1.jpg" , price : "365,090" ,review:13,gpa : 4.1,iframe :"https://www.youtube.com/embed/R4qRygxJ7hQ"},
        {ranking : 9 ,id : 9 ,name : "에브리봇 엣지", image : "/img/robotic_vacuum/edge_1.jpg" , price : "209,760" ,review:13,gpa : 4.1,iframe :"https://www.youtube.com/embed/R4qRygxJ7hQ"},
        {ranking : 10 ,id : 10 ,name : "엠지텍 트윈보스 S9 PRO MASTER", image : "/img/robotic_vacuum/MASTER_1.jpg" , price : "293,550" ,review:7,gpa : 4.0,iframe :"https://www.youtube.com/embed/jQyVtn0rXaw"},
        
      ],
      wireless_cleaner : [
        {ranking : 1 ,id : 1 ,name : "LG전자 코드제로 ThinQ A9S AS9470", image : "/img/wireless_cleaner/thinq_A9s_AS9470_1.jpg" , price : "622,070" ,review:12,gpa : 4.8},
        {ranking : 2 ,id : 2 ,name : "삼성전자 비스포크 제트 VS20A956AVW", image : "/img/wireless_cleaner/samsung_VS20A956AVW_1.jpg" , price : "465,240" ,review:15,gpa : 4.7},
        {ranking : 3 ,id : 3 ,name : "LG전자 오브제컬렉션 코드제로 ThinQ A9S AO9571", image : "/img/wireless_cleaner/thinq_A9S_AO9571_1.jpg" , price : "942,030" ,review:57,gpa : 4.5},
        {ranking : 4 ,id : 4 ,name : "다이슨 V10 플러피 오리진", image : "/img/wireless_cleaner/dyson_V10_1.jpg" , price : "522,640" ,review:13,gpa : 4.8},
        {ranking : 5 ,id : 5 ,name : "LG전자 코드제로 ThinQ A9S AS9271", image : "/img/wireless_cleaner/thinq_A9S_AS9271_1.jpg" , price : "558,980" ,review:27,gpa : 4.6},
        {ranking : 6 ,id : 6 ,name : "LG전자 오브제컬렉션 코드제로 ThinQ A9S AT9201WB", image : "/img/wireless_cleaner/AT9201WB_1.jpg" , price : "680,950" ,review:13,gpa : 4.1,iframe :"https://www.youtube.com/embed/0nQBO8kI37s"},
        {ranking : 7 ,id : 7 ,name : "삼성전자 비스포크 제트 VS20A956A3", image : "/img/wireless_cleaner/VS20A956A3_1.jpg" , price : "486,890" ,review:13,gpa : 4.1,iframe :"https://www.youtube.com/embed/Plte1n8Pl90"},
        {ranking : 8 ,id : 8 ,name : "DIBEA 차이슨 ALLNEW22000", image : "/img/wireless_cleaner/ALLNEW22000_1.jpg" , price : "189,000" ,review:13,gpa : 4.1,iframe :"https://www.youtube.com/embed/R4qRygxJ7hQ"},
        {ranking : 9 ,id : 9 ,name : "LG전자 코드제로 ThinQ A9S AS9201IB", image : "/img/wireless_cleaner/AS9201IB_1.jpg" , price : "629,910" ,review:13,gpa : 4.1,iframe :"https://www.youtube.com/embed/R4qRygxJ7hQ"},
        {ranking : 10 ,id : 10 ,name : "LG전자 싸이킹 C40SFHT", image : "/img/wireless_cleaner/C40SFHT_1.jpg" , price : "124,570" ,review:7,gpa : 4.0,iframe :"https://www.youtube.com/embed/jQyVtn0rXaw"},
        
      ],
      view : "NoteBook",
    }


  }


  update_view = (data) => {
    this.setState({
      view : data
    })
  }

  jump_home = () => {
    window.location.href = "/";
  }

  render(){
    if(window.sessionStorage.getItem("username") === null || window.sessionStorage.getItem("username") === "null"){
      var login = <User_Login

       />
    }
    else{
      var login = <User_LogOut
            
              />
    }

    
      return(
        <div id="App_wrap">
              <div id="main_top">
                
                <div className="Logo_app" onClick={()=>this.jump_home()}/>
                {login}
                
              </div>
              
            <Routes>
  
                <Route exact path="/" element={<Home
                  NoteBook = {this.state.NoteBook}
                  TV = {this.state.TV}
                  Air_conditioner = {this.state.Air_conditioner}
                  Washing_machine = {this.state.Washing_machine}
                  Smart_watch = {this.state.Smart_watch}
                  Wireless_earphones = {this.state.Wireless_earphones}
                  dryer = {this.state.dryer}
                  robotic_vacuum = {this.state.robotic_vacuum}
                  wireless_cleaner = {this.state.wireless_cleaner}
                  update_view = {this.update_view}
                />}/>
  
                <Route path="/search" element={<Search
    
                />}/>
  
                <Route path="/personal_prodcut" element={<Personal_Prodcut //가전제품
                  view = {this.state.view}
                />}/>
  
                <Route path="/review_board" element={<Review_Board //가전제품
                />}/>
  
                <Route path="/review_board/detail" element={<Review_Board_detail //가전제품
                />}/>
  
                <Route path="/User_login" element={<User_Login_Screen //가전제품
                />}/>

                <Route path="/join_membership" element={<Join_membership_screen //가전제품
                />}/>

                <Route path="/create_review" element={<Create_review //가전제품
                />}/>

                <Route path="/Slide_banner_Buds" element={<Banner_Buds_Detail //가전제품
                />}/>

                <Route path="/Slide_banner_Galaxy_watch" element={<Galaxy_watch 
                />}/>
                <Route path="/Slide_banner_Galaxy_tab8" element={<Galaxy_tab8 
                />}/>

                <Route path="/Slide_banner_Galaxy_S22" element={<Galaxy_S22 
                />}/>

                <Route path="/Drop_Down/product" element={<Drop_down_list 
                />}/>
                <Route path="/User_LogOut/MyPage" element={<My_page 
                />}/>
                <Route path="/Sign/Add/Detail" element={<AddSignInformation 
                />}/>
                <Route path="/kakaoLogin" element={<User_Login_Screen 
                />}/>
                <Route path="/naverLogin" element={<User_Login_Screen 
                />}/>
            </Routes>
  
            
          {/* </BrowserRouter> */}
        </div>
      )
    
    }
  }
    


export default App;