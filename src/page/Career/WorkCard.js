import React from "react";
import {
    Card,
    Typography
} from '@mui/material';

const WorkCard = (props) => {
    return (
        <Card variant="outlined" elevation={0} sx={{ width: '100%', bgcolor: '#f2fcff' }}>

                                <Typography fontSize={20}>会社：{props.career.compony}</Typography>
                                職種：{props.career.job}<br />
                                期間：{props.career.periodStart}～{props.career.periodEnd}<br />
                            </Card>
    )
}
export default WorkCard;