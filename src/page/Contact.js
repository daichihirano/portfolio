import React from "react";
import { Box } from "@mui/system";

import {
    HiOutlineOfficeBuilding,
    HiOutlineCalendar,
    HiOutlineDesktopComputer
} from "react-icons/hi";

const Contact = (props) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center' , background: '#fdd6bd'}}>
            <h2>
                連絡先
            </h2>
            {props.contact.map((contact, key) => (
                contact.type === 'E-mail' ?
                    <div key={key}>{contact.type} : {contact.content}</div>
                    :
                    <a href={contact.content} key={key}>{contact.type}<br /></a>
            ))}
        </Box>

    )
}
export default Contact;