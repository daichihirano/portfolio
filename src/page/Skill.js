import React from "react";
import {
    Card,
    CardContent,
    Rating,
    Typography,
    List,
    ListItem,
    Box,
    Grid
} from '@mui/material';
const Skill = (props) => {
    return (
        <Grid container xs={12} justifyContent="center" alignItems="center">
            <Card sx={{ width: '95%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', bgcolor: "#ffecd2" }}>
                    <h2>
                        スキル
                    </h2>
                    <div>
                        スキルと習得度
                    </div>
                    <List>
                        {props.skill.map((skill, key) => (
                            <Grid container justifyContent="center" alignItems="center">
                                <ListItem>
                                    <Card elevation={3}>
                                        <Box sx={{ display: 'flex', flexDirection: 'row', aliginContent: 'center', bgcolor: "#fffcf2" }}>

                                            <ListItem key={key}>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', aliginContent: 'center', bgcolor: "#fffcf2" }}>
                                                    <Typography fontSize={20}>{skill.lang}</Typography>
                                                    <Rating name="half-rating-read" defaultValue={skill.level} precision={0.1} readOnly></Rating>
                                                </Box>
                                            </ListItem>
                                            {("framework" in skill) ?
                                                <ListItem>
                                                    {skill.framework.map((framework, key) =>
                                                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', aliginContent: 'center', bgcolor: "#fffcf2" }} key={key}>

                                                            <Typography fontSize={14}>{framework.name}</Typography>
                                                            <Rating size="small" name="half-rating-read" defaultValue={framework.level} precision={0.1} readOnly></Rating>
                                                            <div></div>
                                                        </Box>

                                                    )}
                                                </ListItem>
                                                :
                                                <div></div>}
                                        </Box>
                                    </Card>

                                </ListItem>
                            </Grid>
                        ))}
                    </List>

                </Box>
            </Card>

        </Grid>
    )
}
export default Skill;