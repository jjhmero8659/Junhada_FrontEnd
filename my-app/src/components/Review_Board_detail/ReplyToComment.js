import axios from "axios";
import React , {useEffect, useState} from "react";
import "./css/ReplyToComment.css";
const { differenceInHours, differenceInDays, differenceInMonths ,parseISO} = require('date-fns');


function ReplyToComment(props){
    const [ElapsedTime, setElapsedTime] = useState(null)

    useEffect(()=>{
    
        const now = new Date();
        const localDateTimeString = props.reply.writeDate;
        const localDateTime = parseISO(localDateTimeString);
        const diffInHours = differenceInHours(now, localDateTime);
        const diffInDays = differenceInDays(now, localDateTime);
        const diffInMonths = differenceInMonths(now, localDateTime);
        
        if(diffInMonths >= 1){
            setElapsedTime(`${diffInMonths}달 전`)
        }
        else if(diffInDays >= 1){
            setElapsedTime(`${diffInDays}일 전`)
        }
        else{
            setElapsedTime(`${diffInHours}시간 전`)
        }
    },[])




    return(
        <div id="ReplyToComment_wrap">
            <div id="rprBorder"/>
            <div id="rtrWriter">
                {props.reply.writer}    <span>{ElapsedTime}</span>
            </div>
            <div id="rtrComment">
                {props.reply.content}
            </div>
        </div>
    )
}

export default ReplyToComment;