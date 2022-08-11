import React from "react";
import {
    Accordion,
    AccordionSummary
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EducationList from "./EducationList";

const Education = (props) => {
    return (
        <Accordion sx={{ width: '90%', bgcolor: "#fffcf2" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}><h3>学歴</h3></AccordionSummary>
            <EducationList career={props.career} />
        </Accordion>
    )
}
export default Education;