import React , {useEffect, useState} from "react";
import "./css/My_page_img_post.css";


function My_page_img_post(props){

    const update_active_image = (data) => {
        props.update_active_image(data)
    }

    return(
        <div id="My_page_img_post_wrap">
            
            <div className={props.active_image_src == props.data.img ? "image_div active" : "image_div"} onClick={()=>update_active_image(props.data.img)}>
                <img src={props.data.img}></img>
            </div>
        </div>
    )
}

export default My_page_img_post;