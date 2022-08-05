import React from "react";

const Contact = (props)=>{
    return (
        <div>
            <h3>
                連絡先
            </h3>
            {props.contact.map((contact ,key)=> (
                <div id={key}>{contact.type} : {contact.content}</div>
            ))}
        </div>

    )
}
export default Contact;