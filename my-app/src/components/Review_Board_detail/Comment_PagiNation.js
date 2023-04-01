import React , {useEffect, useState} from "react";
import "./css/Comment_PagiNation.css";


function Comment_PagiNation(props){

    var page_arr = [];

    for(var i=1; i<=Math.ceil(props.total_length / props.Page_per_page); i++){
        page_arr.push(i);
    }

    const update_current = (data) =>{
        props.update_current(data)

    }

    // console.log("test_num" ,props.Current_page)

    var page_icon = page_arr.map(
        (data,index) => (
            <div key={index} className={data == props.Current_page ? "page_icon active" : "page_icon"} onClick={()=>update_current(data)}>
                {data}
            </div>
        )
    )

    return(
        <div id="Comment_PagiNation_wrap">
            {page_icon}
        </div>
    )
}

export default Comment_PagiNation;