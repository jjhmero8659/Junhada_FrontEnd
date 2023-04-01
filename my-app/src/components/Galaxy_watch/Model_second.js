import React , {useEffect, useState} from "react";
import "./css/Model_second.css";


function Model_second(props){
    const [size_select,set_size_select] = useState("third");

    const size_data = (size_data) => {
        set_size_select(size_data)
        props.set_get_size(size_data)
    }

    return(
        <div id="Model_second_wrap">
            <p>크기</p>
            <div className="watch_size">
                <div className="40mm">
                    40mm
                </div>
                <div className="42mm">
                    42mm
                </div>
                <div className={size_select == "third" ? "44mm active" : "44mm"} onClick={()=>size_data("third")}>
                    44mm
                </div>
                <div className={size_select == "fourth" ? "46mm active" : "46mm"} onClick={()=>size_data("fourth")}>
                    46mm
                </div>
            </div>
        </div>
    )
}

export default Model_second;