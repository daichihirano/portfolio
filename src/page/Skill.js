import React from "react";
import {
    Card,
    CardContent
} from '@mui/material';
const Skill = (props)=>{
    return (
        <Card variant="outlined">
            <CardContent>
                <h3>
                    スキル
                </h3>
                <div>
                    スキル：習得度
                    {props.skill.map((skill, key)=> (
                        <div key={key}>{skill.lang} : {skill.level}</div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
export default Skill;