import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { useState } from 'react';
const ButtonNav = () => {
    const [value, setValue]=useState<number>(0)
    console.log(value)
  return (
    <Box width={500} height={500} position={"relative"} bgcolor={"pink"} >
      <BottomNavigation
      showLabels
      value={value}
      onChange={(_,newValue)=>{setValue(newValue)}}
        sx={{ width:"100%", bottom: 0, bgcolor: "white" , position:"absolute"}}
      >
        <BottomNavigationAction sx={{ flexGrow: 2 }} icon={<HomeIcon />} label="Home"/>
        <BottomNavigationAction sx={{ flexGrow: 2 }} icon={<FavoriteIcon />} label="Favorite"/>
        <BottomNavigationAction sx={{ flexGrow: 1 }} icon={<PersonIcon />}label="Person"/>
        <BottomNavigationAction sx={{ flexGrow: 1 }} icon={<PersonIcon />} label="Person"/>
        <BottomNavigationAction sx={{ flexGrow: 1 }} icon={<PersonIcon />} label="Person"/>
      </BottomNavigation>
    </Box>
  );
};

export default ButtonNav;
