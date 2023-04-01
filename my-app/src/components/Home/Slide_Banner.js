import React,{Component} from "react";
import "./css/Slide_Banner.css";
import pepsi from "./img/pepsi.jpg";
import Galaxy from "./img/Galaxy.jpg";
import Galaxy22 from "./img/Galaxy22.jpg";
import Character from "./img/Character.jpg";
import Watch from "./img/watch.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




class Slide_Banner extends Component{
  constructor(props){
    super(props)

    this.state = {

    }
  }

  

  render(){
    const settings = {
        // fade : true,
        dots: true,
        autoplay:false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
 
    };


    const watch_click = () => {
      window.location.href = "/Slide_banner_Galaxy_watch"
    }

    const buds_click = () => {
      window.location.href = "/Slide_banner_Buds?product_id=9001&view=wirelessearphone"
    }

    const galaxy_tab8_click = () => {
      window.location.href = "/Slide_banner_Galaxy_tab8"
    }

    const galaxy_S22 = () => {
      window.location.href = "/Slide_banner_Galaxy_S22"
    }

    return(
      <div id="Slide_Banner_wrap">
          <Slider {...settings}>
            <div>
                <img src={pepsi} onClick={()=>buds_click()}></img>
                <h4 className="Buds2_h4">
                  신규 컬러 오닉스 출시
                </h4>
                <h2 className="Buds2_h2">
                  "Galaxy Buds2와"
                  <br></br>
                  "pepsi의 톡 쏘는 만남!"
                </h2>
                <h4 className="Buds2_h5">
                  한정 수량의 기회 놓치지 마세요!
                </h4>
                <button type="button" className="btn-round btn-wht">구매 혜택 보기</button>
            </div>
            <div>
                <img src={Galaxy} onClick={()=>galaxy_tab8_click()}></img>
                <h2 className="Galaxy_h2">
                  Galaxy Tab S8 Series
                </h2>
                <h6 className="Galaxy_h6">
                  누구나. 탭하나. 더크게
                </h6>
                <button type="button" className="Galaxy_btn">구매 혜택 보기</button>
            </div>
            <div>
                <img src={Galaxy22} onClick={()=>galaxy_S22()}></img>
                <h2 className="Galaxy22_h2">
                  "Galaxy S22 I S22+"
                  <br></br>
                  "S22 Ultra"
                </h2>
                <h6 className="Galaxy22_h6">
                  더욱 강력해진 갤럭시를 삼성카드 결제 시
                  <br></br>
                  최대 32만원 상당 혜택으로 만나보세요
                </h6>
                <button type="button" className="Galaxy22_btn">구매 혜택 보기</button>
            </div>
            {/* <div>
                <img src={"https://d21x3meyyr2jva.cloudfront.net/banner/pc/%EC%99%80%ED%94%8C%EB%A9%94%EC%9D%B4%EC%BB%A4_2_1650619744459.png"} onClick={()=>banner_click()}></img>
            </div> */}
            <div>
                <a href="https://www.samsung.com/sec/galaxycampus/?cid=sec_paid_ppc_google-pc_pc-campustore_ecommerce_searchad_text_20210719_%EC%82%BC%EC%84%B1%EB%AA%A8%EB%B0%94%EC%9D%BC%EC%9D%B4%EB%B2%A4%ED%8A%B8&utm_source=google-pc&utm_medium=2021campusstore-searchad&utm_campaign=2021campusstore&utm_term=%EC%82%BC%EC%84%B1%EB%AA%A8%EB%B0%94%EC%9D%BC%EC%9D%B4%EB%B2%A4%ED%8A%B8&gclid=CjwKCAjww8mWBhABEiwAl6-2RWLQysOS0yHs9p709KdqSVeOaQWQrIIaPe_upEw6qPh6FjxJsnRK1xoCVTQQAvD_BwE">
                  <img src={Character}></img>
                </a>
                <h2 className="Character_h2">
                  갤럭시 캠퍼스 스토어
                </h2>
                <h6 className="Character_h6">
                  "삼성전자 공식 교육 할인 스토어!"
                  <br></br>
                  "대학/대학원생/교원/교직원이라면 10~44% 교육 할인 혜택!"
                </h6>
                <button type="button" className="Character_btn">구매 혜택 보기</button>
            </div>
            <div>
                <img src={Watch} onClick={()=>watch_click()}></img>
                <h4 className="Watch_h4">
                  신규 컬러 오닉스 출시
                </h4>
                <h2 className="Watch_h2">
                  "Galaxy Watch4 I"
                  <br></br>
                  "Watch4 Classic "
                  <br></br>
                  "최대 30% 할인"
                </h2>
                <h6 className="Watch_h6">
                  "감사의 마음을 담아 5월 가정의 달을 챙기세요"
                </h6>
                <button type="button" className="Watch_btn">구매 혜택 보기</button>
            </div>
            {/* <div>
                <img src={"https://mblogthumb-phinf.pstatic.net/MjAxNzEwMjNfMzYg/MDAxNTA4NzYyNDM5MDIz.7iRwqXg6wByw9BH1kA7_T5Ni1oejLBnEYGOBowPSjwog._bV0kHwoullpIfFKE7kWlJDpgHv4WBjWtH5xta9dFuQg.JPEG.knicjin/20171023_040.jpg?type=w800"}></img>
            </div> */}
        </Slider>
        <div id="transparency" className="left"></div>
        <div id="transparency" className="right"></div>
      </div>
    )
  }
}

export default Slide_Banner;