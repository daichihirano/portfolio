import React from "react";
import {
    Accordion,
    AccordionSummary,
    Card,
    Typography,
    Box,
    Grid,
    List,
    ListItem
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Career = (props) => {
    return (
        <Grid container xs={12} justifyContent="center" alignItems="center">
            <Card sx={{ width: '95%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', bgcolor: "#e7f0fd" }}>
                    <h2>経歴</h2>
                    <Accordion defaultExpanded={true} sx={{ width: '90%', bgcolor: "#f2fcff" }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}><h3>職歴</h3></AccordionSummary>
                        <List>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                {props.career.map((career, key) => (
                                    career.type === "compony" ?
                                        <ListItem key={key}>
                                        <Card variant="outlined" elevation={0} sx={{width:'100%', bgcolor: '#f2fcff'}}>

                                        <Typography fontSize={20}>会社：{career.compony}</Typography>
                                            職種：{career.job}<br />
                                            期間：{career.periodStart}～{career.periodEnd}<br />
                                        </Card>
                                        </ListItem>
                                        :
                                        <div key={key}></div>
                                ))}
                            </Box>
                        </List>
                    </Accordion>
                    <Accordion sx={{ width: '90%', bgcolor: "#f2fcff" }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}><h3>学歴</h3></AccordionSummary>
                        <List>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                {props.career.map((career, key) => (
                                    career.type === "school" ?

                                            <ListItem key={key}>
                                                <Card variant="outlined" elevation={0} sx={{width:'100%', bgcolor: '#f2fcff'}}>
                                                <Typography fontSize={20}>会社：{career.compony}</Typography>

                                                    専攻：{career.job}<br />
                                                    {("study" in career) ? <div>研究：{career.study}<br /></div> : <div></div>}
                                                    期間：{career.periodStart}～{career.periodEnd}<br />
                                                </Card>
                                            </ListItem>

                                        :
                                        <div key={key}></div>
                                ))}
                            </Box>
                        </List>
                    </Accordion>
                </Box>
            </Card>
        </Grid>
    )
}
export default Career;