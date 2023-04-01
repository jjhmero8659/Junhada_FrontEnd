import axios from "axios";
import React , {useEffect, useState} from "react";
import "./css/File_Posts.css";
import File_Post from "./File_Post.js";


function File_Posts(props){

    useEffect(()=>{
        console.log("comment_props",props.data)
    },[])

    const del_upload_file = (data) => {
        props.del_upload_file(data)
    }

    const file_post_map = props.data.map(
        (data,index) => (
            <File_Post
                index = {index}
                key = {index}
                data = {data}
                del_upload_file = {del_upload_file}
            />
        )
    )

    return(
        <div id="Files_Posts_wrap">
            {file_post_map}
        </div>
    )
}

export default File_Posts;