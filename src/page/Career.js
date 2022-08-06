import React from "react";

const Career = (props)=>{
    return (
        <div>
            会社：{props.career.compony} <br/>
            職種：{props.career.job}<br/>
        </div>

    )
}
export default Career;