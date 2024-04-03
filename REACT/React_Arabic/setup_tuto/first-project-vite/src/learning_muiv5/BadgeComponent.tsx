import MailIcon from "@mui/icons-material/Mail";
import { Badge, Stack } from "@mui/material";
const BadgeComponent = () => {
  return (
    <Stack
      spacing={2}
      direction={"row"}
      width={500}
      height={500}
      bgcolor={"pink"}
      position={"relative"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Badge badgeContent={50} color="primary" >
        <MailIcon sx={{bgcolor:"yellow", color:"black", width:100, height:100}} />
      </Badge>
    </Stack>
  );
};

export default BadgeComponent;
