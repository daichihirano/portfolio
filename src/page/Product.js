import React from "react";
import { Box } from "@mui/system";
const Product = (props) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center' ,background: '#fdd6bd'}}>
                 <h2>
                作品紹介
            </h2>
            {props.product.length > 0 ? props.product.map((product, key) => (
                <div>
                    <div>作品{key + 1}</div>
                    <div>タイトル : {product.title} </div>
                    <div>説明概要 : {product.description}</div>
                </div>
            )) :
                <div>
                    まだ作品がありません。<br />これから頑張ります。<br />
                </div>
            }
        </Box>

    )
}
export default Product;