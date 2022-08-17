import React from "react"
import {
    Grid,
    Chip
} from '@mui/material';

const Purpose = (props) => {
    return (
       <Grid container sx={{justifyContent: 'center', alignItems: 'center', aliginContent: 'center'}}>
           {props.skill.purpose.map((purpose) =>
                <Chip variant="outlined" label={purpose} size="small" sx={{background:"#eef1f5"}}/>
            )}
        </Grid>
    )
}
export default Purpose