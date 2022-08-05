import React from "react";

const Home =(props)=>{
    return (
        <div>
            <h2>
                Home Page
            </h2>
            <h3>
                自己紹介
            </h3>
            <div>
                名前:{props.profile.name} <br></br>
                生年月日:{props.profile.birthday}
            </div>
            <h3>
                経歴
            </h3>
            <div>
                会社：{props.career.compony} <br></br>
                職種：{props.career.job}<br></br>
            </div>
            <h3>
                スキル
            </h3>
            <div>
            スキル：習得度
                {props.skill.map((skill ,key)=> (
                    <div id={key}>{skill.lang} : {skill.level}</div>
                ))}
            </div>
        </div>
        
    )
}
export default Home