import React from "react"
import {
    Card,
    CardContent,
    Rating,
    Typography,
    List,
    ListItem,
    Box,
    Grid
} from '@mui/material';

const Framework = (props) => {
    return (
        <ListItem>
                        {props.skill.framework.map((framework, key) =>
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', aliginContent: 'center', bgcolor: "#fffcf2" }} key={key}>
                                <Typography fontSize={14}>{framework.name}</Typography>
                                <Rating size="small" name="half-rating-read" defaultValue={framework.level} precision={0.1} readOnly></Rating>
                                <div></div>
                            </Box>

                        )}
                    </ListItem>
    )
}
export default Framework