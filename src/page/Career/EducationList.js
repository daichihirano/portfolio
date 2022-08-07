import React from "react";
import {
    List,
    ListItem,
} from '@mui/material';
import EducationCard from "./EducationCard";

const EducationList = (props) => {
    return (
        
                <List>
                    {props.career.map((career, key) => (
                        career.type === "school" ?
                            <ListItem key={key}>
                                <EducationCard career={career} />
                            </ListItem>
                            :
                            <div key={key}></div>
                    ))}
                </List>
            
    )
}
export default EducationList;