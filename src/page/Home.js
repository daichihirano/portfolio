import React from "react";
import {
    List,
    ListItem,
    Box
} from '@mui/material';
import Career from './Career/Career'
import Skill from './Skill/Skill'
import Profile from './Profile/Profile'
const Home = (props) => {
    return (
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center' , background: 'linear-gradient(to bottom,#fdd6bd,#f794a4 )'}}>
                <ListItem sx={{ width: '100%' }}>
                    <Profile profile={props.profile} />
                </ListItem>
                <ListItem sx={{ width: '100%' }}>
                    <Career career={props.career} />
                </ListItem>
                <ListItem sx={{ width: '100%' }}>
                    <Skill skill={props.skill} />
                </ListItem>
            </Box>
    )
}
export default Home