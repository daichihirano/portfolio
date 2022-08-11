import React from "react";
import {
    Card,
    Typography,
    Box
} from '@mui/material';
import {
    HiOutlineOfficeBuilding,
    HiOutlineCalendar,
    HiOutlineDesktopComputer
} from "react-icons/hi";
import { TbTool } from "react-icons/tb";

const WorkCard = (props) => {
    return (
        <Card variant="outlined" elevation={3} sx={{ width: '100%', bgcolor: '#fffcf2' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <HiOutlineOfficeBuilding size={40} />
                <Typography fontSize={20}>{props.career.compony}</Typography>
            </Box>
            <hr />
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
        </Card>
    )
}
export default WorkCard;