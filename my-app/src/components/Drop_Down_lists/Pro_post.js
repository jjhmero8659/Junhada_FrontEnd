import React , {useEffect, useState} from "react";
import { useNavigate , useLocation } from 'react-router-dom';
import "./css/Pro_Post.css";
import Low_price_post from "./Low_price_post.js"


function Pro_Post(props){
    const navigate = useNavigate();
    const [platform_data,set_platform_data] = useState([])
    const [platform_name,set_platform_name] = useState([])
    const [concat_arr,set_concat_arr] = useState([])
    const [lowPrice, setlowPrice] = useState(null)

    useEffect(()=>{
        let lowPriceArr = [];
        let arr = [];
        let platform_name_ = ["haemil","wemake","interpark","_11st","lotte","auction","gmarcket","tmon","ssg","coupang"]
        let lowPrice;

        arr.push(props.data.haemil);
        arr.push(props.data.wemake);
        arr.push(props.data.interpark);
        arr.push(props.data._11st);
        arr.push(props.data.lotte);
        arr.push(props.data.auction);
        arr.push(props.data.gmarcket);
        arr.push(props.data.tmon);
        arr.push(props.data.ssg);
        arr.push(props.data.coupang);

        for(let i = 0; i < arr.length; i++) {
            if(arr[i] == '' || arr[i] == null)  {
              arr.splice(i, 1);
              platform_name_.splice(i, 1);
              i--;
            }
          }

        set_platform_data(arr)
        set_platform_name(platform_name_)


        const concat_array = []
        
        for(let i=0; i<arr.length; i++){
            lowPriceArr.push(arr[i].replace(/,/g, ''));
            const tmp = platform_name_[i];
            const tmp2 = arr[i];
            const person = { [tmp]: tmp2 };
            concat_array.push(person)
        }
        let test = Math.min.apply(null,lowPriceArr)+"";
        setlowPrice(test.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,'));
        set_concat_arr(concat_array)

    },[])

    const jump_detail = () => {
        navigate('/personal_prodcut', {
            state: {
              id: props.data.id,
              view : props.view
            }
        });
    }

    const platform_price = concat_arr.map(
        (data,index) => (
            <Low_price_post
                key = {index}
                data = {data}
            />
        )
    )

    return(
        <div id="Pro_Post_wrap">
            <div className="ranking">{props.data.ranking}</div>
            <div className="triangle-left"></div>
            <div className="triangle-right"></div>
            <div className="pro_img">
                <img src={props.data.proImages[0]}></img>
            </div>
            <div className="pro_name">
                {props.data.name}
            </div>
            <div className="pro_price">
                <p>starting at price</p>
                <p>₩ {lowPrice != null && lowPrice}</p>
            </div>
            <div className="pro_spec">
                {/* <Low_price_post
                    platform_data = {platform_data}
                    platform_name = {platform_name}
                /> */}
                {platform_price}
            </div>
            <div className="pro_detail_btn" onClick={()=>jump_detail()}>
                제품 자세히 보기
            </div>
        </div>
    )
}

export default Pro_Post;