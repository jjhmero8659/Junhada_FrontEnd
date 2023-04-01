import React, {Component} from "react";
import "../css/Change_Post.css";
import $ from "jquery"


class Change_Post extends Component{
    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    componentDidMount(){
        $(function(){ 
            $(".Product_button").click(
                function(){
                    $(".Product_button").removeClass("active")
                    $(this).addClass("active")
                }
            )
        })
    }



    update_view = (data) => {
        this.props.update_view(data);
    }

    render(){
        return(
            <div id="Change_Post_wrap">
                <button class="custom-btn btn-12"  onClick={()=>this.update_view("NoteBook")}><span>Click!</span><span>노트북</span></button>
                <button class="custom-btn btn-12"  onClick={()=>this.update_view("TV")}><span>Click!</span><span>TV</span></button>
                <button class="custom-btn btn-12"  onClick={()=>this.update_view("Air_conditioner")}><span>Click!</span><span>에어컨</span></button>
                <button class="custom-btn btn-12"  onClick={()=>this.update_view("Washing_machine")}><span>Click!</span><span>세탁기</span></button>
                <button class="custom-btn btn-12"  onClick={()=>this.update_view("dryer")}><span>Click!</span><span>건조기</span></button>
                <button class="custom-btn btn-12"  onClick={()=>this.update_view("robotic_vacuum")}><span>Click!</span><span>로봇 청소기</span></button>
                <button class="custom-btn btn-12"  onClick={()=>this.update_view("Wireless_earphones")}><span>Click!</span><span>무선 이어폰</span></button>
                <button class="custom-btn btn-12"  onClick={()=>this.update_view("wireless_cleaner")}><span>Click!</span><span>무선 청소기</span></button>
                <button class="custom-btn btn-12"  onClick={()=>this.update_view("Smart_watch")}><span>Click!</span><span>스마트 워치</span></button>
            </div>
        )
    }
}

export default Change_Post;