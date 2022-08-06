import React from "react";
import {
    Card,
    CardContent
} from '@mui/material';

import Career from './Career'
import Skill from './Skill'
const Home =(props)=>{
    return (
        <div>
            <h2>
                Home Page
            </h2>
            <Card variant="outlined">
                <CardContent>
                    <h3>
                        自己紹介
                    </h3>
                    <div>
                        名前:{props.profile.name} <br/>
                        生年月日:{props.profile.birthday}<br/>
                        出身：{props.profile.origin}
                    </div>
                </CardContent>
            </Card>
            <Career career={props.career} />
            <Skill skill={props.skill} />
        </div>
        
    )
}
export default Home