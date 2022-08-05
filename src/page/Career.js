import React from "react";

const Career = (props)=>{
    return (
        <div>
            会社：{props.career.compony} <br></br>
            職種：{props.career.job}<br></br>
        </div>

    )
}
export default Career;