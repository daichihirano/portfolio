import React from "react";
import {
    Box,
    Card,
    CardContent,
    Typography
} from '@mui/material';
import { career } from "../constance/constance";

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
            <Card variant="outlined">
                <CardContent>
                    <h3>
                        経歴
                    </h3>
                    <div>
                        {props.career.map((career, key)=>(
                            career.type === "compony"?
                            <div>
                                会社：{career.compony} <br/>
                                職種：{career.job}<br/>
                                期間：{career.periodStart}～{career.periodEnd}<br/><br/>
                            </div>
                            :
                            <div>
                                学校：{career.compony} <br/>
                                専攻：{career.job}<br/>
                                {("study" in career)? <div>研究：{career.study}<br/></div>:<div></div>}
                                期間：{career.periodStart}～{career.periodEnd}<br/><br/>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
            <Card variant="outlined">
                <CardContent>
                    <h3>
                        スキル
                    </h3>
                    <div>
                    スキル：習得度
                        {props.skill.map((skill ,key)=> (
                            <div id={key}>{skill.lang} : {skill.level}</div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
        
    )
}
export default Home