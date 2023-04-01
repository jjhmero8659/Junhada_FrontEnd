import React , {useEffect, useState} from "react";
import "./css/Size_first.css";


function Size_first(props){
    const [size_select,set_size_select] = useState(""); // border active 용

    useEffect(()=>{  //size 버튼을 클릭하면 부모의 size값이 변동된다
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
        <div id="Size_first_wrap">
            <p>크기</p>
            <div className="watch_size">
                <div className={size_select == "first" ? "40mm active" : "40mm"} onClick={()=>size_data("first")}>
                    40mm
                </div >
                <div className={size_select == "second" ? "44mm active" : "44mm"} onClick={()=>size_data("second")}>
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

export default Size_first;