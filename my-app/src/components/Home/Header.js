import React,{Component} from "react";
import "./css/Header.css";



class Header extends Component{
  constructor(props){
    super(props)

    this.state = {

    }
  }

  render(){
    return(
      <div id="Header_wrap">
        <div className="Logo">
            Logo
        </div>
        <div className="Category">
            Category
        </div>
      </div>
    )
  }
}

export default Header;