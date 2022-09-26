import React from "react"
import {
    Grid,
    Chip,
    Box
} from '@mui/material';

const Purpose = (props) => {
    return (
       <Grid container sx={{justifyContent: 'center', alignItems: 'center', aliginContent: 'center'}}>
            
            {props.skill.purpose.map((purpose, key) =>
                <Box sx={{margin:"0 2px"}}>
                    <Chip variant="outlined" label={purpose} size="small" sx={{background:"#eef1f5"}} key={key}/>
                </Box>
            )}
            
        </Grid>
    )
}
export default Purpose