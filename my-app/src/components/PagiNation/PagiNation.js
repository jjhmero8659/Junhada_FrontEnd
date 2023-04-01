import React, {Component} from "react";
import "../css/PagiNation.css";
import Posts from "../PagiNation/Posts.js";
import Post from "../PagiNation/Post.js";

class PagiNation extends Component{
    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    render(){
        var post_array = [];
        console.log("PAGE : " + this.props.Total_page)
        console.log()

        for(var i=1; i<=Math.ceil(this.props.Total_page / this.props.Page_per_page); i++){
            post_array.push(i)
        }
        console.log(post_array)
        const post_page = post_array.map(
            (data,index) => (<div key={index} className="page">{data}</div>)
        )
        
        return(
            <div id="PagiNation_wrap">
                {post_page}
            </div>
        )
    }
}

export default PagiNation;