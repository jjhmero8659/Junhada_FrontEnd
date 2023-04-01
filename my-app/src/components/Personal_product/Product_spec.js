import React , {Component, useState} from "react";
import "./css/Product_spec.css";
import $ from "jquery";

function Product_spec(props){

    const [isActive,setActive] = useState(true)

    const toggle_class = () => {
        setActive(
            !isActive
        )
    }
    

    const iframes = props.iframes.map(
        (data,index) => (
            <div className="iframe">
                <iframe width="465" height="265" src={data} allowfullscreen></iframe>
            </div>
        )
    )

    return(
        <div id="Product_spec_wrap">
            <div id="iframe_head" className={isActive ? 'active': null} onClick={() => toggle_class()}>
                제품 영상
                <div className="ifame_wrap" >
                    {iframes}
                </div>
            </div>
            <div id="spec_head" className={isActive ? null : 'active'} onClick={() => toggle_class()}>
                제품 정보
                <div className="spec_wrap" >
                    
                </div>
            </div>
        </div>
    )
}

export default Product_spec;