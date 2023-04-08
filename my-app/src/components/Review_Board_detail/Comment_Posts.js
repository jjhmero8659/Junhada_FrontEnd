import React , {useEffect, useState} from "react";
import "./css/Comment_Posts.css";
import axios from "axios";
import Comment_Post from "./Comment_Post.js";
import Comment_PagiNation from "./Comment_PagiNation.js";

function Comment_Posts(props){

    const [Current_page,set_Current_page] = useState(1)
    const [Page_per_page,set_Page_per_page] = useState(5)
    const [ReplysInfo, setReplys] = useState(null)
    useEffect(()=>{
        getArticleReplys();
    },[])

    useEffect(()=>{
        getArticleReplys();
    },[Current_page])

    const getArticleReplys = async() => {
        await axios(
            {
              url: '/article/reply/page',
              method: 'GET',
              params: {
                 id : props.ArticleId,
                 offset : Current_page,
                 limit : Page_per_page
              } , 
              baseURL: 'http://localhost:8080',
            }
          ).then(function (response) {
            setReplys(response.data);
          });
    }

    const ReplyPost = ReplysInfo!=null ? ReplysInfo.replys.map(
        (data) => (
            <Comment_Post
                reply = {data}
            />
        )
    ) : null

    const update_current = (page) => {
        set_Current_page(page);
    }

    

    return(
        <div id="Comment_Posts_wrap">
            <div id="ReplyTableHead">
                댓글 {ReplysInfo != null && ReplysInfo.totalElements}
            </div>
            {ReplyPost}
            {ReplysInfo != null && <Comment_PagiNation
                pageNum = {ReplysInfo.pageNum}
                Current_page = {Current_page}
                Page_per_page = {Page_per_page}
                update_current = {update_current}
            />}
            <div className="add_comment">
                {/* <div className="text_div">
                    <textarea className="comment_textarea" type="text" font-size="14px" placeholder="로그인 후 이용해주세요"></textarea>
                </div> */}
                {/* <div className="add_comment_btn" onClick={()=>comment_add()}>등록</div> */}
            </div>
        </div>
    )
}

export default Comment_Posts;