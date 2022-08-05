import React from "react";

const Contact = (props)=>{
    return (
        <div>
            <h3>
                連絡先
            </h3>
            {console.log(props.contact)}
            {props.contact.map((contact ,key)=> (
                contact.type === 'GitHub'?
                <a href ={contact.content} >{contact.type}</a>
                :
                <div id={key}>{contact.type} : {contact.content}</div>
            ))}
        </div>

    )
}
export default Contact;