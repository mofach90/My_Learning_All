import MailIcon from "@mui/icons-material/Mail";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
const MuilIst = () => {
  return (
    <Box width={500} height={500} bgcolor={"pink"} p={2}>
      <List sx={{ color: "black", bgcolor: "white", padding: 1 }}>
        <Divider>
          <ListItem
            disablePadding
            sx={{ bgcolor: "primary.light", borderRadius: 9 }}
          >
            <ListItemButton
              sx={{
                borderRadius: 9,
                "&:hover": { backgroundColor: "red", color: "white" },
              }}
            >
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "yellow" }}>
                    <MailIcon sx={{ color: "black" }} />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText primary="List item 1" secondary="Secondary text" />
            </ListItemButton>
          </ListItem>
        </Divider>
        <Divider />
        <ListItem
          disablePadding
          sx={{ bgcolor: "secondary.light", borderRadius: 9 }}
        >
          <ListItemButton
            sx={{
              borderRadius: 9,
              "&:hover": { backgroundColor: "red", color: "white" },
            }}
          >
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "yellow" }}>
                  <MailIcon sx={{ color: "black" }} />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List item 1" secondary="Secondary text" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem
          disablePadding
          sx={{ bgcolor: "success.light", borderRadius: 9 }}
        >
          <ListItemButton
            sx={{
              borderRadius: 9,
              "&:hover": { backgroundColor: "red", color: "white" },
            }}
          >
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "yellow" }}>
                  <MailIcon sx={{ color: "black" }} />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List item 1" secondary="Secondary text" />
          </ListItemButton>
        </ListItem>

        <Divider />
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar src="https://randomuser.me/api/portraits/men/85.jpg"></Avatar>
            </ListItemAvatar>{" "}
          </ListItemIcon>
          <ListItemText primary="List item 2" secondary="Secondary text" />
        </ListItem>
        <Divider sx={{bgcolor:"green"}} />
        <Divider sx={{bgcolor:"green"}} />
        <Divider sx={{bgcolor:"green"}} />
        {/* <Divider /> */}
        <Divider sx={{bgcolor:"red"}} />
        <Divider sx={{bgcolor:"red"}} />
        <Divider sx={{bgcolor:"red"}} />
        {/* <Divider /> */}
        <Divider sx={{bgcolor:"yellow"}} />
        <Divider sx={{bgcolor:"yellow"}} />
        <Divider sx={{bgcolor:"yellow"}} />
        <Divider />
        <Divider />
        <Divider />

        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="List item 3" secondary="Secondary text" />
        </ListItem>
      </List>
    </Box>
  );
};

export default MuilIst;
