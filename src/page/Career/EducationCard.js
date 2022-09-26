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
    ImNewspaper
} from "react-icons/im";
import {
    BiCodeBlock
} from "react-icons/bi";
import { FaUniversity } from "react-icons/fa";
const EducationCard = (props) => {
    return (
        <Paper sx={{ width: '100%', bgcolor: '#ffffff'}}>
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
            {("paper" in props.career) ?
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <ImNewspaper size={25} />
                論文：<a href={props.career.paper.URL}><font color="#000000">{props.career.paper.name}</font></a>
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
                    <Box sx={{margin:"0 2px"}}>
                        <Chip variant="outlined" label={skill} size="small" sx={{background:"#eef1f5"}}/>
                    </Box>
                )}
            </Box>
        </Paper>
    )
}
export default EducationCard;