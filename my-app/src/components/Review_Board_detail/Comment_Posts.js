import React , {useEffect, useState} from "react";
import "./css/Comment_Posts.css";
import axios from "axios";
import Comment_Post from "./Comment_Post.js";
import Comment_PagiNation from "./Comment_PagiNation.js";

function Comment_Posts(props){

    const [Current_page,set_Current_page] = useState(1)
    const [Page_per_page,set_Page_per_page] = useState(5)
    const [comment_post1,set_com] = useState([])
    const [db_date_state, set_db_date_state] = useState("")
    


    useEffect(()=>{
    },[])

    const slice_comment = (data) => {
        var indexOfLast = Current_page * Page_per_page;
        var indexOfFirst = indexOfLast - Page_per_page;

        var slice_list = data.slice(indexOfFirst,indexOfLast);
        return slice_list;
    }

    const update_current = (data) =>{
        set_Current_page(data)
    }

    const comment_add = async() => {
        if(window.sessionStorage.getItem("user_name") == null){
            alert("로그인 후 이용해주세요")
        }
        else{
            let date = new Date()
            let year_ = date.getFullYear()
            let month_ = date.getMonth()+1
            let date_ = date.getDate()

            let hours_ = date.getHours()
            let min_ = date.getMinutes()
            let sec_ = date.getSeconds()
            let text_summary = document.getElementsByClassName("comment_textarea")[0]
            let replace_db_date = props.review_db_date.replace(/-/gi, "_");

            let Obj = {
                db_date : replace_db_date, //리뷰 날짜
                db_time : props.review_db_time,  //리뷰 날짜
                value_date : `${year_}-${month_}-${date_}`,
                value_time : `${hours_}_${min_}_${sec_}`,
                writer : window.sessionStorage.getItem("user_name"),
                pro_id : props.pro_id,
                summary : text_summary.value,
            }

            text_summary.value = ""
            const res = await axios.post(`/api/insert_comment`,Obj) //화면 rerender 해야함
            if(res.data.Update == "True"){
                alert("댓글 등록이 완료 되었습니다.")
                window.location.href = "/review_board/detail?pro_id="+props.pro_id+"&user_name="+window.sessionStorage.getItem("user_name")+"&title="+props.review_data.title+"&view="+props.view+"&create_time="+props.review_data.time;
            }
            else{
                alert("등록 실패")
            }
        }
    }

    const comment_post = slice_comment(props.data).map(
        (data,index) => (
            <Comment_Post
                key = {index}
                data = {data}
                pro_id = {props.pro_id}
                db_date = {props.db_date} //리뷰 날짜
                db_time = {props.db_time}  //리뷰 날짜
                title = {props.title}
                view = {props.view}
                review_create_time = {props.review_create_time}
            />
        )
    )
    
    

    return(
        <div id="Comment_Posts_wrap">
            {comment_post}
            <Comment_PagiNation
                total_length = {props.len}
                Current_page = {Current_page}
                Page_per_page = {Page_per_page}
                update_current = {update_current}
            />
            <div className="add_comment">
                <div className="text_div">
                    <textarea className="comment_textarea" type="text" font-size="14px" placeholder="로그인 후 이용해주세요"></textarea>
                </div>
                <div className="add_comment_btn" onClick={()=>comment_add()}>등록</div>
            </div>
        </div>
    )
}

export default Comment_Posts;