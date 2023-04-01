import axios from "axios";
import React , {useEffect, useState} from "react";
import "./css/File_Post.css";



function File_Post(props){

    useEffect(()=>{
        console.log("File_Post_wrap",props)
    },[])

    const del_upload_file = () => {
        props.del_upload_file(props.index)
    }

    return(
        <div id="File_Post_wrap">
            <div className="file_type_txt_div">파일 이름</div>
            <div className="file_name">{props.data.file.name}</div>
            <div className="file_close_div" onClick={()=>del_upload_file()}>

            </div>
        </div>
    )
}

export default File_Post;