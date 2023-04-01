import React , {useEffect, useState} from "react";
import "./css/Low_price_post.css";


function Low_price_post(props){

    const [platform_name,set_name] = useState("")
    const [platform_price,set_price] = useState("")

    useEffect(()=>{
        var first_key = Object.keys(props.data)[0];
        var first_value = props.data[Object.keys(props.data)[0]];
        set_name(first_key)
        set_price(first_value)
    },[])

    return(
        <div id="Low_price_post_wrap">
            <div className="img_wrap">
                <img src={`/img/platform_logo/${platform_name}.png`}></img>
            </div>
            <div className="platform_price">
                {platform_price} 원
            </div>
            <div className="shipping">
                무료배송
            </div>
        </div>
    )
}

export default Low_price_post;