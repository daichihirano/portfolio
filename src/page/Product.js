import React from "react";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
const Product = (props) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', background: '#434343' }}>
            
                <h2>
                    <font color='#f5f7fa'>作品紹介</font>
                </h2>
                {props.product.length > 0 ? props.product.map((product, key) => (
                    <Paper sx={{ width: '90%', bgcolor: "#f5f7fa" }}>
                        <font color='#333333'>
                            <div>作品{key + 1}</div>
                            <div>タイトル : <a href={product.url}>{product.title}</a></div>
                            <div>説明概要 : {product.description}</div>
                        </font>
                    </Paper>
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