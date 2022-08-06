import React from "react";
import {
    Card,
    CardContent,
    Rating,
    Typography
} from '@mui/material';
const Skill = (props)=>{
    return (
        <Card variant="outlined">
            <CardContent>
                <h3>
                    スキル
                </h3>
                <div>
                    スキルと習得度
                    {props.skill.map((skill, key)=> (
                        <div key={key}>
                        <Typography>{skill.lang}</Typography>
                        <Rating name="half-rating-read" defaultValue={skill.level} precision={0.1} readOnly></Rating>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
export default Skill;