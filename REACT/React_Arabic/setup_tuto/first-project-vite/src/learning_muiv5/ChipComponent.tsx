import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Avatar, Box, Chip, IconButton } from "@mui/material";
import { useState } from "react";

const ChipComponent = () => {
    const [chips,setChips] = useState<string[]>(["chip1","chip2","chip3","chip4"])

    const handleDelete = (newChip:string) => {
        setChips((chips)=>(chips.filter((item)=>(item !== newChip))))
    }
  return (
    <Box
      gap={2}
      display={"flex"}
      alignItems="center"
      justifyContent="center"
      width={500}
      height={500}
      bgcolor={"pink"}
      p={1}
      flexWrap={"wrap"}
    >
      <Chip label="chip" color="primary" size="small" />
      <Chip
        label="chip secondary"
        color="secondary"
        size="medium"
        sx={{ backgroundColor: "white" }}
        variant="outlined"
        avatar={<Avatar>W</Avatar>}
      />
      <Chip
        label="chip secondary"
        color="secondary"
        size="medium"
        sx={{ backgroundColor: "white" }}
        variant="outlined"
        avatar={
          <Avatar>
            <TrendingUpIcon />
          </Avatar>
        }
      />
      <Chip
        label="chip secondary"
        color="secondary"
        size="medium"
        sx={{ backgroundColor: "white" }}
        variant="outlined"
        avatar={<Avatar />}
      />
      <Chip
        label="chip secondary"
        color="secondary"
        size="medium"
        sx={{ backgroundColor: "white" }}
        variant="outlined"
        icon={<TrendingUpIcon sx={{ backgroundColor: "yellow" }} />}
      />
      <Chip
        label="chip secondary"
        color="secondary"
        size="medium"
        sx={{ backgroundColor: "grey", color:"white", "&:hover":{"backgroundColor":"green !important", "color":"red"} }}
        variant="outlined"
        avatar={<Avatar sx={{backgroundColor:"blue !important"}}/>}
        onClick={()=>{alert("Bonjour")}}
      />
      <Chip
        label="chip secondary"
        color="secondary"
        size="medium"
        sx={{ backgroundColor: "grey", color:"white", "&:hover":{"backgroundColor":"white !important", "color":"red"} }}
        variant="outlined"
        avatar={<Avatar sx={{backgroundColor:"blue  "}}><IconButton onClick={()=>{alert("From Click")}} sx={{"&:hover":{"backgroundColor":"pink !important", "color":"red"}}}><TrendingUpIcon  /></IconButton></Avatar>}
        onClick={()=>{alert("Bonjour")}}
        onDelete={()=>{alert("Deleted")}}
      />
      {
        chips.map(
            (chip,index)=>(<Chip key={index} label={chip} onDelete={()=>handleDelete(chip)}/>)
        )
      }

    </Box>
  );
};

export default ChipComponent;
