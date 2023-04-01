import React , {useEffect, useState} from "react";
import "./css/Product_image.css";
import $ from "jquery"


function Product_image(props){
    const productImage = props.explainImages.map(
        (data) => (
            <div id="productImageDiv">
                <img id="proImage" src={data}></img>
            </div>
        )
    )

    return(
        <div id="Product_image_wrap">
            {productImage}
        </div>
    )
}

export default Product_image;