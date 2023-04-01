import React , {useEffect, useState} from "react";
import "./css/Size_second.css";


function Size_second(props){
    const [size_select,set_size_select] = useState(props.size); // border active 용

    useEffect(()=>{
        set_size_select(props.size)
        props.set_color("")
    },[props.size])

    useEffect(()=>{  //구분 영역이 변동 되면 크기 영역이 init 으로 돌아간다
        props.set_size("")
    },[props.sys_Ty])

    const size_data = (size_data) => {
        if(props.sys_Ty != ""){
            props.set_size(size_data)
        }
    }

    return(
        <div id="Size_second_wrap">
            <p>크기</p>
            <div className="watch_size">
                <div className="40mm">
                    40mm
                </div>
                <div className="44mm">
                    44mm
                </div>
                <div className={size_select == "third" ? "42mm active" : "42mm"} onClick={()=>size_data("third")}>
                    44mm
                </div>
                <div className={size_select == "fourth" ? "46mm active" : "46mm"} onClick={()=>size_data("fourth")}>
                    46mm
                </div>
            </div>
        </div>
    )
}

export default Size_second;