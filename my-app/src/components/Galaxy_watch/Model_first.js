import React , {useEffect, useState} from "react";
import "./css/Model_first.css";


function Model_first(props){
    const [size_select,set_size_select] = useState("first");

    const size_data = (size_data) => {
        set_size_select(size_data)
        props.set_get_size(size_data)
    }

    return(
        <div id="Model_first_wrap">
            <p>크기</p>
            <div className="watch_size">
                <div className={size_select == "first" ? "40mm active" : "40mm"} onClick={()=>size_data("first")}>
                    40mm
                </div >
                <div className={size_select == "second" ? "42mm active" : "42mm"} onClick={()=>size_data("second")}>
                    42mm
                </div>
                <div className="44mm">
                    44mm
                </div>
                <div className="46mm">
                    46mm
                </div>
            </div>
            
        </div>
    )
}

export default Model_first;