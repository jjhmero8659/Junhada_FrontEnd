import React , {useEffect, useState} from "react";
import "./css/Summary_text.css";
import File_Posts from "./Summary_text/File_Posts.js";
import queryString from "query-string";
import axios from "axios";

import $ from "jquery";

function Summary_text(props){

    const [pro_id,set_pro_id] = useState("");
    const [modify,set_modify] = useState(false);
    const [summary,set_summary] = useState(props.bagic_summary);

    const [upload_img,set_upload_img] = useState([]);

    // console.log("qwdoijqwdojiknh",props) 


    useEffect(()=>{
        const queryObj = queryString.parse(window.location.search)
        set_pro_id(queryObj.pro_id)

        let empathy_img_src = document.getElementsByClassName("empathy_img")[0]

        empathy_img_src.addEventListener("mouseover", function (event) { //event.target으로 받아줘야함
            //highlight the mouseover target
            event.target.src = "https://ssl.nexon.com/s2/game/maplestory/renewal/common/empathy_btn_on.png";
        }, false);
          
        empathy_img_src.addEventListener("mouseout", function (event) {
            // highlight the mouseout target
            event.target.src = "https://ssl.nexon.com/s2/game/maplestory/renewal/common/empathy_btn_off.png";
        }, false);
    },[])  

    const click_btn = () => {
        console.log("Session : "+window.sessionStorage.getItem("user_name"));
        console.log("props.name : "+props.name);
        if(window.sessionStorage.getItem("user_name") == props.name || window.sessionStorage.getItem("user_name") == "Admin"){
            set_modify(!modify)
        }
        else{
            alert("관계자 또는 글작성자 만 수정이 가능합니다.")
        }
    }

    const del_upload_file = (data) => {
        // alert(upload_img[data].file.name)
        let tmp = [];
        for(let i=data; i<upload_img.length; i++){
            if(i == data){
                continue;
            }
            else{
                tmp.push(upload_img[i])
            }
        }

        set_upload_img(tmp)
    }

    const modify_complete = () => {
        click_btn();
        props.modify_summary(summary)
        handlePost()
        update_review_img()
    }

    const modify_summary = (e) => {
        set_summary(e.target.value);
    }

    // const chg_img = () => {
    //     alert("alert!")
    // }

    const update_review_img = async() => {
        let today = new Date();  
        let year = today.getFullYear();
        let temp = [];

        for(let i=0; i<upload_img.length; i++){
            temp.push(`/img/review_img_folder/${year}_${upload_img[i].file.name}`)
        }
        for(let i = upload_img.length; i<5; i++){
            temp.push("")
        }

        // alert(upload_img.name)
        let Obj ={
            id : props.pro_id,
            name : props.data.name,
            title : props.data.title,
            time : props.data.time,
            img_src1 : `${temp[0]}`,
            img_src2 : `${temp[1]}`,
            img_src3 : `${temp[2]}`,
            img_src4 : `${temp[3]}`,
            img_src5 : `${temp[4]}`,
        }
        const res = await axios.post(`/api/update_review_img`,Obj);
    }

    const delete_review = async() => {
        var replace_title_ = props.data.title.replace(/ /g,"_");
        var replace_date_ = props.data.date.replace(/-/g,"_");

        alert("글 삭제가 완료 되었습니다."); //db삭제 구축 해야함
        window.location.href = "/review_board?pro_id="+props.pro_id+"&view="+props.view;
        // var Obj = {
        //     title : props.data.title,
        //     replace_title : replace_title_,
        //     id : pro_id,
        //     date : props.data.date,
        //     replace_date : replace_date_,
        //     good_rec : props.data.good_rec,
        //     bad_rec : props.data.bad_rec,
        //     name : window.sessionStorage.getItem("user_name"),
        // }
        const res = await axios.delete(`/api/delete_review`,{
            data: { // 서버에서 req.body.{} 로 확인할 수 있다.
                title : props.data.title,
                replace_title : replace_title_,
                id : pro_id,
                summary : props.data.summary,
                date : props.data.date,
                replace_date : replace_date_,
                good_rec : props.data.good_rec,
                bad_rec : props.data.bad_rec,
                name : window.sessionStorage.getItem("user_name"),
            },
            withCredentials: true,
          }
        ) 
    }

    const handleFileInput = (e)=>{
        // console.log("///////")
        if(upload_img.length <5){
            let temp = [];

            const photoToAdd = e.target.files;
            for (let i = 0; i < photoToAdd.length; i++) {
                temp.push(
                    { 
                        // id: photoToAdd[i].name,
                        file: photoToAdd[i],
                        // url: URL.createObjectURL(photoToAdd[i])
                    }
                )
            };
            // set_upload_img(e.target.files[0])
            set_upload_img(temp.concat(upload_img))
        }
        else{
            alert("이미지는 5개 까지만 등록이 가능합니다.");
        }
        
    }
    
    const handlePost = async()=>{
        for(let i=0; i<upload_img.length; i++){
            const formData = new FormData();
            formData.append('file', upload_img[i].file);
            // alert(formData.length); //겉으로 확인할때는 안보임
        
            await axios.post("/api/upload", formData).then(res => {
            //   alert('성공')
            }).catch(err => {
            alert('실패')
            })
        }
    }
    

    const add_good_rec = async() => {
        alert("게시물을 추천 하였습니다.")
        var Obj = {
            id : props.pro_id,
            name : props.data.name,
            time : props.data.time,
            title : props.data.title,
        }

        const res = await axios.put("/api/put/put_rec",Obj);
        // window.location.reload();
        // if(res.data.data.length >= 1){
        //     console.log(res.data.data)
        // }
    }

    if(modify === false){
        return(
            <div id="Summary_text_wrap">
                <div className="text">
                    <div className="default_modify_summary">
                        {props.summary_text}
                    </div>
                </div>
                <div className="empathy">
                    <img className="empathy_img" src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/empathy_btn_off.png"  onClick={()=>add_good_rec()}></img>
                    {/* <div>{props.data.good_rec} 개</div> */}
                </div>
                <div className="modify_btn_wrap">
                    <div className="modify_before" onClick={()=>click_btn()}>리뷰 수정</div>
                </div>
            </div>
        )
    }
    else{
        return(
            <div id="Summary_text_wrap">
                <div className="text">
                    <textarea className="modify_summary" type="text" defaultValue={props.summary_text} onChange={(e)=>modify_summary(e)}></textarea>
                </div>
                <div className="empathy">
                    <img className="empathy_img" src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/empathy_btn_off.png" onClick={()=>add_good_rec()}></img>
                    {/* <div className="good_rec">{props.data.good_rec} 개</div> */}
                    {/* <div className="change_image" onClick={()=>chg_img()}>이미지 변경</div> */}
                    <div className="file_div">
                        <div class="upload-name">
                            {
                                (upload_img.length > 0) && <File_Posts
                                    data = {upload_img}
                                    del_upload_file = {del_upload_file}
                                />
                            }
                        </div>
                        <input id="input-file" className="upload_img_input" type="file" name="file" style={{display:"none"}} onChange={(e) => handleFileInput(e)}/>
                        <label for="input-file" className="file_label">
                            이미지수정 
                        </label>
                    </div>
                    
                </div>
                <div className="modify_btn_wrap">
                    <div className="modify_after" onClick={()=>modify_complete()}>글 저장</div>
                    <div className="delete_review" onClick={()=>delete_review()}>글 삭제</div>
                </div>
                
            </div>
        )
    }
}

export default Summary_text;