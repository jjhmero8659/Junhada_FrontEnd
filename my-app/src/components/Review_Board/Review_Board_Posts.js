import React , {useEffect, useState} from "react";
import "./css/Review_Board_Posts.css";
import Review_Board_Post from "./Review_Board_Post.js";
import Review_Board_Posts_PagiNation from "./Review_Board_Posts_PagiNation.js";
import axios from "axios";

function Review_Board_Posts(props){

    const [Current_page,set_Current_page] = useState(1)
    const [Page_per_page,set_Page_per_page] = useState(10)
    const [articlesInfo,setArticlesInfo] = useState(null)

    useEffect(()=>{
        load_page();
    },[])

    const load_page = async() => {
        await axios(
            {
              url: '/article/page',
              method: 'GET',
              params: {
                 id : props.id,
                 offset : Current_page,
                 limit : Page_per_page

              } , 
              baseURL: 'http://localhost:8080',
            }
          ).then(function (response) {
            setArticlesInfo(response.data)
          });
    }

    useEffect(()=>{
        load_page();
    },[Current_page])

    const update_current = (data) => {
        set_Current_page(data)
    }

    const add_review = async() => {
        // const res = await axios.get(`/api/get/pro_name_review${props.pro_id}&${props.view}`)
        // if(res.data.Product.length >= 1){
            
        // }

        if(window.sessionStorage.getItem("user_name") == null){
            alert("로그인 후 글 작성이 가능합니다!")
        }
        else{
            // window.location.href="/create_review?pro_id="+props.pro_id+"&post_num="+(props.num+1)+"&view="+props.view+"&pro_name="+res.data.Product[0].name;
        }
    }
    
    const review_post = articlesInfo != null && articlesInfo.articles.map(
        (data,index) => (
            <Review_Board_Post
                key = {index}
                index = {index}
                data = {data}
                totalNum = {articlesInfo.total}
            />
        )
    )
    return(
        (articlesInfo != null && <div id="Review_Board_Posts_wrap">
            {review_post}
            <Review_Board_Posts_PagiNation
                articlesTotalNum = {articlesInfo.total}
                Current_page = {Current_page}
                Page_per_page = {Page_per_page}
                update_current = {update_current}
            />
            <div className="add_review" onClick={()=>add_review()}>글 작성</div>
        </div>)
    )
}

export default Review_Board_Posts;