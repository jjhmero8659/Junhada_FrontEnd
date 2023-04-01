import React , {useEffect, useState} from "react";
import "./css/Platform.css";


function Platform(props){

    const [platform_data,set_platform_data] = useState([])
    const [platform_name,set_platform_name] = useState([])

    useEffect(()=>{
        console.log(props);
        let arr = []
        let platform_name = ["haemil","wemake","interpark","street11","lotte","auction","gmarcket","tmon","ssg","coupang"]

        arr.push(props.data.haemil);
        arr.push(props.data.wemake);
        arr.push(props.data.interpark);
        arr.push(props.data.street11);
        arr.push(props.data.lotte);
        arr.push(props.data.auction);
        arr.push(props.data.gmarcket);
        arr.push(props.data.tmon);
        arr.push(props.data.ssg);
        arr.push(props.data.coupang);

        set_platform_data(arr)
        set_platform_name(platform_name)
    },[])

    let low_price = platform_data.filter(data => data != null).map(
        (data,index) => (
            <div className="Platform">
                <div className="logo_img">
                    <img src={`/img/platform_logo/${platform_name[index]}.png`}></img>
                </div>
                <div className="platform_price">
                    {data} 원
                </div>
                <div className="shipping">무료배송</div>
            </div>
        )
    )

    

    return(
        <div id="Platform_wrap">
            {low_price}
        </div>
    )
}

export default Platform;