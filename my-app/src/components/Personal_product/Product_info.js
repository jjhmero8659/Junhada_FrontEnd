import React , {Component} from "react";
import "./css/Product_info.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Platform from "./Platform.js"


class Product_info extends Component{
    constructor(props){
        super(props)

        this.state = {
            product : [],
            low_price : "",
        }
    }
    

    componentDidMount(){
        console.log(this.props.data)
        let slice_arr_str = []
        let num = []
        let min_price = "";
        slice_arr_str.push(this.props.data.haemil)
        slice_arr_str.push(this.props.data.wemake)
        slice_arr_str.push(this.props.data.interpark)
        slice_arr_str.push(this.props.data._11st)
        slice_arr_str.push(this.props.data.lotte)
        slice_arr_str.push(this.props.data.auction)
        slice_arr_str.push(this.props.data.gmarcket)
        slice_arr_str.push(this.props.data.tmon)
        slice_arr_str.push(this.props.data.ssg)
        slice_arr_str.push(this.props.data.coupang)
        
        slice_arr_str.forEach((element) => {
            if(element != null){ num.push(Number(element.replace(/,/g,""))) };
        });
        min_price = Math.min(...num).toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
        this.setState({
            low_price : min_price
        })
    }

    
    
    

    render(){
        const settings = {
            // fade : true,
            dots: false,
            autoplay:true,
            infinite: true,
            speed: 1000,
            fade :true,
            arrows:false
        }; 

        const pro_Image = this.props.data.proImages.map(
            (data) => (
              <div>
                <img src={data}></img>
              </div>
            )
          );
        

        return(
            <div id="Product_info_wrap">
                <div className="Product_name">
                    <a href="#">
                        {this.props.data.name}
                    </a>
                </div>
                <div className="Product_info_image">
                    <Slider {...settings}>
                        {pro_Image}
                    </Slider>
                </div>
                {/* <div className="Product_price">
                    제품 가격 : <span>{this.props.price}</span>  원
                </div> */}
                <div className="Product_gpa">
                    <img src="https://www.lottecinema.co.kr/NLCHS/Content/images/icon/star_14.png"></img><span>{(this.props.data.gpa).toFixed(1)}</span>
                </div>
                <div className="Product_review">
                    제품 리뷰 : <span>7</span> 개
                </div>
                <div className="price_floor_wrap">
                    <div className="price_floor">
                        <p className="title">최저가</p>
                        <p className="price">{this.state.low_price}</p>
                        <p className="title2">원</p>
                        {/* <p className="link_price_floor" onClick={()=>price_floor_link()}>
                            최저가 사이트 로 이동
                        </p> */}
                    </div>
                    <div className="platform_wrap">
                        <Platform
                            data = {this.props.data}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Product_info;