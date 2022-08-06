import React from "react";

const Contact = (props)=>{
    return (
        <div>
            <h3>
                連絡先
            </h3>
            {props.contact.map((contact, key)=> (
                contact.type === 'E-mail'?
                <div key={key}>{contact.type} : {contact.content}</div>
                :
                <a href ={contact.content} key={key}>{contact.type}<br/></a>
            ))}
        </div>

    )
}
export default Contact;