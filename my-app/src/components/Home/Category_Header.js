import React , {useEffect, useState} from "react";
import "./css/Category_Header.css";



function Category_Header(){

    const [close_btn,set_close_btn] = useState(false)

    return(
      <div id="Category_Header_wrap">
        <div className="Category" onClick={()=>set_close_btn(!close_btn)}>
            Category
        </div>

        <div id="Category_popup" className={(close_btn == true) ? "active" : null}>
            <div className="header_text">
              카테고리
            </div>
            <div className="close_btn" onClick={()=>set_close_btn(!close_btn)}></div>
        </div>
      </div>
    )

}

export default Category_Header;