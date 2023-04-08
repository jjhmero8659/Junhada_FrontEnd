import React , {useEffect, useState} from "react";
import "./css/Review_Board_Posts_PagiNation.css";


function Review_Board_Posts_PagiNation(props){

    var page_arr = [];

    for(var i=1; i<=props.pageNum; i++){
        page_arr.push(i);
    }
    
    const update_current = (data) =>{
        props.update_current(data)
    }

    var page_icon = page_arr.map(
        (data,index) => (
            <div key={index} className="page_icon" onClick={()=>update_current(data)}>
                {data}
            </div>
        )
    )

    return(
        <div id="Review_Board_Posts_PagiNation_wrap">
            {page_icon}
        </div>
    )
}

export default Review_Board_Posts_PagiNation;