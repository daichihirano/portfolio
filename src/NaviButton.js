import React from "react";
import {
    useNavigate
} from 'react-router-dom';
import {
    styled
} from '@mui/system';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {HiOutlineHome} from  "react-icons/hi";
import {AiOutlineRocket, AiOutlineMail} from "react-icons/ai";

const NaviButton = () => {
    const navigate = useNavigate();
    const StyledBottomNavigation =styled(BottomNavigation)({
        display:'flex',
        justifyContent:'center',
        alignmentItems:'center',
        alignContent:'center',
        backgroundColor:"#434343"
    })
    return(
        <StyledBottomNavigation
        showLabels
        onChange={(event, newValue) => {
            newValue === 0 ? navigate('/home') : newValue === 1 ? navigate('/product') : navigate('/contact')
        }}
        >
            <BottomNavigationAction label={<span><font color='#f5f7fa'>Home</font></span> } icon={<HiOutlineHome size={80} color="#f5f7fa"/>}/>
            <BottomNavigationAction label={<span><font color='#f5f7fa'>Product</font></span> }  icon={<AiOutlineRocket size={60} color="#f5f7fa"/>}/>
            <BottomNavigationAction label={<span><font color='#f5f7fa'>Contact</font></span> }  icon={<AiOutlineMail size={60} color="#f5f7fa"/>}/>
        </StyledBottomNavigation>
    )
}
export default NaviButton