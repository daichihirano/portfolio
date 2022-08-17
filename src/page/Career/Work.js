import React from "react";
import {
    Accordion,
    AccordionSummary
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkList from "./WorkList";

const Work = (props) => {
    return (
        <Accordion defaultExpanded={true} sx={{ width: '90%', bgcolor: "#d5d7da" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}><h3>職歴</h3></AccordionSummary>
            <WorkList career={props.career} />

        </Accordion>
    )
}
export default Work;