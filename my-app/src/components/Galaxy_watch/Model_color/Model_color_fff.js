import React , {useEffect, useState} from "react";
import "./css/Model_color_fff.css";


function Model_color_fff(props){

    const [color,set_color] = useState("")

    useEffect(()=>{
        set_color(props.color) //부모의 color가 변경되면 this color render
    },[props.color])

    useEffect(()=>{ //부모의 size가 변경되면 this color 초기화 render
        set_color("")
    },[props.size])

    const color_select = (color) => { //부모 color 데이터 넘겨서 변경
        props.set_color(color)
    }

    return(
        <div id="Model_color_fff_wrap">
            <p>컬러</p>
            <div className="color_select_wrap">
                <div className={color == "black" ? "black_wrap active" : "black_wrap"}  onClick={()=>color_select("black")}>
                    <div className="color"></div>
                    <p>블랙</p>
                </div>
                <div className={color == "silver" ? "silver_wrap active" : "silver_wrap"} onClick={()=>color_select("silver")}>
                    <div className="color"></div>
                    <p>실버</p>
                </div>
                <div className="green">
                    <div className="color"></div>
                    <p>그린</p>
                </div>
                <div className={color == "pinkgold" ? "pinkgold_wrap active" : "pinkgold_wrap"} onClick={()=>color_select("pinkgold")}>
                    <div className="color"></div>
                    <p>핑크골드</p>
                </div>
            </div>
        </div>
    )
}

export default Model_color_fff;