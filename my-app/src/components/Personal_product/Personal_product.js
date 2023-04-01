import React , {Component, useEffect, useState} from "react";
import { useLocation } from 'react-router-dom'; 
import "./css/Personal_product.css";
import queryString from "query-string";
import axios from "axios";
import Header from "./Header.js";
import Product_info from "./Product_info.js";
import Product_spec from "./Product_spec.js";
import Product_board from "./Product_board.js";
import Product_image from "./Product_image.js";



function Personal_prodcut(props){
    const location = useLocation();
    const [product,set_product] = useState([])
    const [review,setReview] = useState([])


    useEffect(() => {
        get_product(location.state.id,location.state.view);
        get_review3(location.state.id,location.state.view);
    },[]);

    const get_product = async(id,view) => {
        await axios(
            {
              url: '/product/detail',
              method: 'GET',
              params: {
                 id : id
              } , 
              baseURL: 'http://localhost:8080',
            }
          ).then(function (response) {
            set_product([response.data]);
          });
    }
    
    const get_review3 = async(id,view) => {
        await axios(
            {
              url: '/article/represent/review',
              method: 'GET',
              params: {
                 id : id
              } , 
              baseURL: 'http://localhost:8080',
            }
          ).then(function (response) {
            setReview(response.data);
          });
    }


    const product_info = product.map(
        (data,index) => (
            <Product_info
                key={index}
                data = {data}
            />
        )
)
                    
    const product_image = product.map(
        (data,index) => (
            <Product_image
                key = {index}
                explainImages = {data.explainImages}

            />
        )
)
    
    const product_spec = product.map(
        (data,index) => (
            <Product_spec
                key={index}
                iframes = {data.iframes}
            />
        )
    )

    return(
                    <div id="Personal_product_wrap">
                        <nav>
                            {product_info}
                            {product_spec}
                            <Product_board
                                product_id  = {location.state.id}
                                review = {review}
                                view = {location.state.view}
                            />
                        </nav>
                        <div className="pro_detail_spec">
                            {product_image}
                        </div>
                    </div>
                )
}
export default Personal_prodcut;