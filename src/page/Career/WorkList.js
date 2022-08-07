import React from "react";
import {
    List,
    ListItem,
    Box
} from '@mui/material';
import WorkCard from "./WorkCard";

const WorkList = (props) => {
    return (
        <List>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {props.career.map((career, key) => (
                    career.type === "compony" ?
                        <ListItem key={key}>
                            <WorkCard career={career} />
                        </ListItem>
                        :
                        <div key={key}></div>
                ))}
            </Box>
        </List>
    )
}
export default WorkList;