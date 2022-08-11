import React from "react";
import {
    Card,
    Typography,
    Box
} from '@mui/material';
import {
    HiOutlineAcademicCap,
    HiOutlineCalendar,
    HiOutlineLightBulb
} from "react-icons/hi";
import { FaUniversity } from "react-icons/fa";
const EducationCard = (props) => {
    return (
        <Card variant="outlined" elevation={3} sx={{ width: '100%', bgcolor: '#fffcf2' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <FaUniversity size={40} />
                <Typography fontSize={20}>{props.career.compony}</Typography>
            </Box>
            <hr />
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <HiOutlineAcademicCap size={25} />
                専攻：{props.career.job}
            </Box>
            {("study" in props.career) ?
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <HiOutlineLightBulb size={25} />
                    研究：{props.career.study}
                </Box>
                :
                <div></div>}
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <HiOutlineCalendar size={25} />
                期間：{props.career.periodStart}～{props.career.periodEnd}
            </Box>
        </Card>
    )
}
export default EducationCard;