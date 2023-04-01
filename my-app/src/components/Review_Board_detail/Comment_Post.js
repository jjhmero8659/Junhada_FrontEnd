import axios from "axios";
import React , {useEffect, useState} from "react";
import "./css/Comment_Post.css";


function Comment_Post(props){

    useEffect(()=>{
        console.log("comment_props",props)
    },[])

    let del_btn

    const del_comment = async() => {
        if(window.confirm("댓글을 삭제하시겠습니까?")){
            let replace_db_date = props.data.date.replace(/-/gi, "_");
            
            const res = await axios.delete(`/api/delete/del_comment`,{
                data: {
                    review_date : replace_db_date,
                    pro_id : props.pro_id,
                    writer : props.data.name,
                    summary : props.data.summary,
                    comment_time : props.data.time,
                    review_create_time : props.review_create_time,
                },
                withCredentials: true,
              })
              if(res.data.Update == "True"){
                alert("댓글 삭제가 완료 되었습니다.")
                window.location.href = "/review_board/detail?pro_id="+props.pro_id+"&user_name="+window.sessionStorage.getItem("user_name")+"&title="+props.title+"&view="+props.view;
            }
        }
        else{

        }
    }

    if(window.sessionStorage.getItem("user_name") == props.data.name){
        del_btn = <div className="delete_btn" onClick={()=>del_comment()}>댓글 삭제</div>
    }

    return(
        <div id="Comment_Post_wrap">
            <div className="Data_base_comment"> {/*임시*/}
                <div className="writer_name">
                    {props.data.name}
                </div>
                <div className="date">
                    {props.data.date}
                </div>
                <div className="summary">
                    {props.data.summary}
                </div>

                {del_btn}
            </div>
        </div>
    )
}

export default Comment_Post;