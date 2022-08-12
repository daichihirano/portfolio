import React from "react";
import { Box } from "@mui/system";

import {
    FiGithub,
    FiLinkedin
} from "react-icons/fi";

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
                contact.type === 'GitHub' ?
                <a href={contact.content} key={key}>
                    <FiGithub size={60} color="#000000"/>
                </a>
                :
                contact.type === 'LinkedIn' ?
                <a href={contact.content} key={key}>
                    <FiLinkedin size={60} color="#000000"/>
                </a>
                :
                <div></div>
            ))}
        </Box>

    )
}
export default Contact;