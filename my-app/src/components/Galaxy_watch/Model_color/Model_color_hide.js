import React , {useEffect, useState} from "react";
import "./css/Model_color_hide.css";


function Model_color_hide(props){
    return(
        <div id="Model_color_hide_wrap">
            <p>컬러</p>
            <div className="color_select_wrap">
                <div className="black">
                    <div className="color"></div>
                    <p>블랙</p>
                </div>
                <div className="silver">
                    <div className="color"></div>
                    <p>실버</p>
                </div>
                <div className="green">
                    <div className="color"></div>
                    <p>그린</p>
                </div>
                <div className="pinkgold">
                    <div className="color"></div>
                    <p>핑크골드</p>
                </div>
            </div>
        </div>
    )
}

export default Model_color_hide;