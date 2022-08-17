import React from "react";
import { Box } from "@mui/system";
const Product = (props) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', background: '#434343' }}>
            
                <h2>
                    <font color='#f5f7fa'>作品紹介</font>
                </h2>
                {props.product.length > 0 ? props.product.map((product, key) => (
                    <div>
                        <font color='#f5f7fa'>
                            <div>作品{key + 1}</div>
                            <div>タイトル : {product.title} </div>
                            <div>説明概要 : {product.description}</div>
                        </font>
                    </div>
                )) :
                    <div>
                        <font color='#f5f7fa'>
                            まだ作品がありません。<br />これから頑張ります。<br />
                        </font>
                    </div>
                }
            
        </Box>
    )
}
export default Product;