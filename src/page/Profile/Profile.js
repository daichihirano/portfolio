import React from "react";
import {
    Card,
    Box,
    Grid
} from '@mui/material';
const Profile = ({profile}) => {
    return (
        <Grid container justifyContent="center" alignItems="center">
            <Card sx={{ width: '95%' }} md={{width:'85%'}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', bgcolor: "#ffecd2" }}>
                    <h2>
                        自己紹介
                    </h2>
                    <div>
                        名前：{profile.name} <br />
                        生年月日：{profile.birthday}<br />
                        出身：{profile.origin}
                    </div>
                </Box>
            </Card>
        </Grid>
    )
}
export default Profile;