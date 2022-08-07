import React from "react";
import {
    Card,
    Box,
    Grid
} from '@mui/material';
const Profile = (props) => {
    return (
        <Grid container justifyContent="center" alignItems="center">
            <Card sx={{ width: '85%' }} >
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', bgcolor: "#f7fff7" }}>
                    <h2>
                        自己紹介
                    </h2>
                    <div>
                        名前：{props.profile.name} <br />
                        生年月日：{props.profile.birthday}<br />
                        出身：{props.profile.origin}
                    </div>
                </Box>
            </Card>
        </Grid>
    )
}
export default Profile;