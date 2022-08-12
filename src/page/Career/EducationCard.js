import React from "react";
import {
    Chip,
    Typography,
    Box,
    Paper
} from '@mui/material';
import {
    HiOutlineAcademicCap,
    HiOutlineCalendar,
    HiOutlineLightBulb
} from "react-icons/hi";
import {
    BiCodeBlock
} from "react-icons/bi";
import { FaUniversity } from "react-icons/fa";
const EducationCard = (props) => {
    return (
        <Paper variant="outlined" sx={{ width: '100%', bgcolor: '#fffcf2'}}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <FaUniversity size={40} />
                <Typography fontSize={20}>{props.career.compony}</Typography>
            </Box>
            <hr color="c0c0c0"/>
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
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <BiCodeBlock size={25} />
                スキル：
                {props.career.skill.map((skill) =>
                    <Chip variant="outlined" label={skill} size="small"/>

                )}
            </Box>
        </Paper>
    )
}
export default EducationCard;