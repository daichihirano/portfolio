import React from "react";

const Skill = (props)=>{
    return (
        <div>
            スキル：習得度
            {props.skill.map((skill ,key)=> (
                <div id={key}>{skill.lang} : {skill.level}</div>
            ))}
        </div>

    )
}
export default Skill;