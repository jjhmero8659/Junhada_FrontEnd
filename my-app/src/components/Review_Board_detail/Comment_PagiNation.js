import React , {useEffect, useState} from "react";
import "./css/Comment_PagiNation.css";


function Comment_PagiNation(props){

    var page_arr = [];

    for(var i=1; i<=props.pageNum; i++){
        page_arr.push(i);
    }

    const update_current = (data) =>{
        props.update_current(data)

    }

    // console.log("test_num" ,props.Current_page)

    var page_icon = page_arr.map(
        (data,index) => (
            <div key={index} className="CommentReplyBtn" onClick={()=>update_current(data)}>
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