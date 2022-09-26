import React from "react";
import { Paper, Chip, Box } from "@mui/material";

import kzhpa from "../constance/302kzhpa.png";
const Product = (props) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', background: '#434343' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', background: '#434343',}}>
                <h2>
                    <font color='#f5f7fa'>作品紹介</font>
                </h2>
                {props.product.length > 0 ? props.product.map((product, key) => (
                    <Paper sx={{ width: '90%', bgcolor: "#f5f7fa", margin:'5px'}}>
                        <Box sx={{margin:'10px'}}>
                            <font color='#333333'>
                                <div>作品{key + 1}</div>
                                <div>タイトル : <a href={product.url}>{product.title}</a></div>
                                <div>作成難易度：{product.level}</div>
                                <Box sx={{display:"flex", flexDirection:"row"}}>
                                    使用技術：{product.tech.map((tech, teckKey) =>(
                                        <Box sx={{margin:"0 2px"}}>
                                            <Chip variant="outlined" label={tech} size="small" sx={{background:"#d5d7da"}} key={teckKey}/>
                                        </Box>
                                    ))}
                                </Box>
                                <div>説明概要 : {product.description}</div>
                            </font>
                        </Box>
                    </Paper>
                )) :
                    <div>
                        <font color='#f5f7fa'>
                            まだ作品がありません。<br />これから頑張ります。<br />
                        </font>
                    </div>
                }
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center', background: '#434343'}}>
                <Paper sx={{ width: '100%', bgcolor: "#f5f7fa" }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', margin:'10px'}}>
                        <div>作品2：ネコLINE bot</div>
                        <img src={kzhpa} width='100px' height='100px'></img>
                    </Box>
                </Paper>
            </Box>
                
            
        </Box>
    )
}
export default Product;