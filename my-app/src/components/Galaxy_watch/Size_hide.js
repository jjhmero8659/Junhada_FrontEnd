import React , {useEffect, useState} from "react";
import "./css/Size_hide.css";


function Size_hide(props){
    return(
        <div id="Size_hide_wrap">
            <p>크기</p>
            <div className="watch_size">
                <div className="40mm">
                    40mm
                </div >
                <div className="44mm">
                    44mm
                </div>
                <div className="42mm">
                    42mm
                </div>
                <div className="46mm">
                    46mm
                </div>
            </div>
        </div>
    )
}

export default Size_hide;