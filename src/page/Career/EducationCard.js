import React from "react";
import {
    Card,
    Typography,
} from '@mui/material';

const EducationCard = (props) => {
    return (
        <Card variant="outlined" elevation={0} sx={{ width: '100%', bgcolor: '#f2fcff' }}>
            <Typography fontSize={20}>学校：{props.career.compony}</Typography>
            専攻：{props.career.job}<br />
            {("study" in props.career) ? <div>研究：{props.career.study}<br /></div> : <div></div>}
            期間：{props.career.periodStart}～{props.career.periodEnd}<br />
        </Card>
    )
}
export default EducationCard;