import React from "react";
import {
    Card,
    CardContent
} from '@mui/material';

const Career = (props)=>{
    return (
        <Card variant="outlined">
                <CardContent>
                    <h3>
                        経歴
                    </h3>
                    <div>
                        {props.career.map((career, key)=>(
                            career.type === "compony"?
                            <div key={key}>
                                会社：{career.compony} <br/>
                                職種：{career.job}<br/>
                                期間：{career.periodStart}～{career.periodEnd}<br/><br/>
                            </div>
                            :
                            <div key={key}>
                                学校：{career.compony} <br/>
                                専攻：{career.job}<br/>
                                {("study" in career)? <div>研究：{career.study}<br/></div>:<div></div>}
                                期間：{career.periodStart}～{career.periodEnd}<br/><br/>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

    )
}
export default Career;