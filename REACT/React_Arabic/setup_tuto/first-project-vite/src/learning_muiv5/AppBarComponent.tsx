import {
  AppBar,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
export const AppBarComponent = () => {
  const [Anchor, setAnchor] = useState<null | HTMLElement>(null);
  const open = Boolean(Anchor);
  console.log({ Anchor, open });
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };
  return (
    <AppBar sx={{ padding: 2 }}>
      <Toolbar sx={{ backgroundColor: "white" }}>
        <IconButton
          size="large"
          edge="start"
          aria-label="logo"
          onClick={handleOpen}
          aria-controls={open ? "menu" : "undefined"}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="div"
          color="GrayText"
          sx={{ flexGrow: 1 }}
          fontFamily="fantasy"
        >
          Menu
        </Typography>
        {/* <Typography variant='h6' component='div' sx={{flexGrow:2,bgcolor:"pink"}}>
                GAME
            </Typography>
            <Typography variant='h6' component='div' sx={{flexGrow:2,bgcolor:"green"}}>
                GAME
            </Typography> */}
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem variant="middle" />}
        >
          <Button
            sx={{ bgcolor: "white", "&:hover": { backgroundColor: "yellow" } }}
          >
            Home
          </Button>
          <Button>App</Button>
          <Button>About</Button>
          <Button>Login</Button>
        </Stack>
        <Menu
          id="menu"
          anchorEl={Anchor}
          open={open}
          onClose={handleClose}
          MenuListProps={{ "aria-labelledby": "menu" }}
        >
          <MenuItem onClick={handleClose}>App one</MenuItem>
          <MenuItem>App two</MenuItem>
          <MenuItem>App three</MenuItem>
          <MenuItem>App four</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
