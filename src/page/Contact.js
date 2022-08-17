import React from "react";
import { Box } from "@mui/system";

import {
    FiGithub,
    FiLinkedin
} from "react-icons/fi";

const Contact = (props) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center' , background: '#434343'}}>
            
                <h2>
                    <font color='#f5f7fa'>連絡先</font>
                </h2>
                {props.contact.map((contact, key) => (
                    contact.type === 'E-mail' ?
                    <font color='#f5f7fa'><div key={key}>{contact.type} : {contact.content}</div></font>
                    :
                    contact.type === 'GitHub' ?
                    <a href={contact.content} key={key}>
                        <FiGithub size={60} color="#f5f7fa"/>
                    </a>
                    :
                    contact.type === 'LinkedIn' ?
                    <a href={contact.content} key={key}>
                        <FiLinkedin size={60} color="#f5f7fa"/>
                    </a>
                    :
                    <div></div>
                ))}
                
            
        </Box>

    )
}
export default Contact;