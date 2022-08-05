import React from "react";

const Product = (props)=>{
    return (
        <div>
            <h3>
                作品紹介
            </h3>
            {props.product.length>0 ? props.product.map((product ,key)=> (
                <div>
                    <div>作品{key+1}</div>
                    <div id={key}>タイトル : {product.title} </div>
                    <div id={key}>説明概要 : {product.description}</div>
                </div>
            )):
            <div>
                まだ作品がありません。<br></br>これから頑張ります。
            </div>
            }
        </div>

    )
}
export default Product;