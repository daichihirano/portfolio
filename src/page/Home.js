import React from "react";
import {
    List,
    ListItem
} from '@mui/material';
import Career from './Career/Career'
import Skill from './Skill/Skill'
import Profile from './Profile/Profile'
const Home = (props) => {
    return (
        <div>
            <List>
                <ListItem sx={{ width: '100%' }}>
                    <Profile profile={props.profile} />
                </ListItem>
                <ListItem sx={{ width: '100%' }}>
                    <Career career={props.career} />
                </ListItem>
                <ListItem sx={{ width: '100%' }}>
                    <Skill skill={props.skill} />
                </ListItem>
            </List>
        </div>
    )
}
export default Home