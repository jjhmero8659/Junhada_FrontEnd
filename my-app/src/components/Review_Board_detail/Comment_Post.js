import axios from "axios";
import React , {useEffect, useState} from "react";
import "./css/Comment_Post.css";
import ReplyToComment from "./ReplyToComment.js";


function Comment_Post(props){
    const [ReplyBtnStatus , setReplyBtn] = useState(false)
    const [ReplysInfo , setReplysInfo] = useState(null)
    const [ReplyPerPage , setReplyPerPage] = useState(5)
    const [textAreaDetail , setTextAreaDetail] = useState(null)
    const [textAreaCount , setTextAreaCount] = useState(0)

    useEffect(()=>{
        if(ReplyBtnStatus == true){
            loadReplys(ReplyPerPage); // 답글 더보기 클릭시에 slice 페이지 가져오기
        }
        else{
            setReplyPerPage(5); // 답글창 닫을시에 limit 초기화
        }
    },[ReplyBtnStatus])


    const loadReplys = async() => {
        await axios(
            {
              url: '/article/reply/reply/slice',
              method: 'GET',
              params: {
                groupId : props.reply.id,
                 limit : ReplyPerPage
              } , 
              baseURL: 'http://localhost:8080',
            }
          ).then(function (response) {
            setReplysInfo(response.data)
            setReplyPerPage(ReplyPerPage + 5)
          });
    }

    const replyToComment = ReplysInfo != null && ReplysInfo.replys.map(
        (data) => (
            <ReplyToComment
                reply = {data}
            />
        )
    )

    const pageMoreFunc = () => {
        loadReplys();
    }


    return(
        <div id="Comment_Post_wrap">
            <div id="CommentOneDepthWrap">
                <p id="CommentWriter">{props.reply.writer}</p>
                <p id="CommentCreateTime">
                    {props.reply.writeDate.slice(0, 10)}
                </p>
                <p id="CommentContent">
                    {props.reply.content}
                </p>
                
                <div id="ReplyToCommentCheckBtn" onClick={()=>setReplyBtn(!ReplyBtnStatus)}>
                    답글
                </div>
            </div>
            {ReplysInfo != null && ReplyBtnStatus == true && replyToComment}
            {ReplysInfo != null && ReplysInfo.nextPageStatus == true && ReplyBtnStatus == true &&
                <div id="pageMore" onClick={()=>pageMoreFunc()}>
                    <div>더보기</div> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                </div>
            }
            { ReplyBtnStatus == true &&
            <div id="insertRtr">
                <div id="insertArea">
                    <textarea placeholder="댓글을 입력하세요"  onChange={(event) => { setTextAreaDetail(event.target.value); setTextAreaCount(event.target.value.length); }}></textarea>
                    <div id="textAreaCount">{textAreaCount}/500</div>
                    <div id="rtrSubmitArea">
                        <div>등록</div>
                    </div>
                </div>
            </div> 
            }
            { ReplyBtnStatus == true &&
            <div id="closePageMore"  onClick={()=>setReplyBtn(false)}>답글 닫기</div>
            }
        </div>
    )
}

export default Comment_Post;