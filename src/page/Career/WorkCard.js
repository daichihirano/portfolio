import React from "react";
import {
    Chip,
    Typography,
    Box,
    Paper
} from '@mui/material';
import {
    HiOutlineOfficeBuilding,
    HiOutlineCalendar,
    HiOutlineDesktopComputer,
    
} from "react-icons/hi";
import {
    BiCodeBlock
} from "react-icons/bi";
import { TbTool } from "react-icons/tb";

const WorkCard = (props) => {
    return (
        <Paper variant="outlined" sx={{ width: '100%', bgcolor: '#ffffff' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <HiOutlineOfficeBuilding size={40} />
                <Typography fontSize={20}>{props.career.compony}</Typography>
            </Box>
            <hr color="#b0b0b0" size="5px"/>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <TbTool size={25} />
                職種：{props.career.job}<br />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <HiOutlineDesktopComputer size={25} />
                業務内容：{props.career.content}<br />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <HiOutlineCalendar size={25} />
                期間：{props.career.periodStart}～{props.career.periodEnd}<br />
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
export default WorkCard;