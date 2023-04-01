import React , {useEffect, useState} from "react";
import "./css/My_page_img_posts.css";
import My_page_img_post from "./My_page_img_post.js";


function My_page_img_posts(props){

    const [active_image,set_active_image] = useState("");

    const update_active_image = (data) => {
        set_active_image(data)
        props.update_active_image(data)
    }

    const post_map = props.data.map(
        (data,index) => <My_page_img_post
            key = {index}
            data = {data}
            active_image_src = {active_image}
            update_active_image = {update_active_image}
        />
    )

    return(
        <div id="My_page_img_posts_wrap">
            {post_map}
        </div>
    )
}

export default My_page_img_posts;