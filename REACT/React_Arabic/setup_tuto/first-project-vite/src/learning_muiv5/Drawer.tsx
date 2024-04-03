import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";

const DrawerComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Stack spacing={1}>
      <AppBar position="fixed" sx={{ zIndex: 2 }}>
        <Toolbar>
          <IconButton
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography>Menu</Typography>
        </Toolbar>
      </AppBar>
      <Box>
        <Drawer
          sx={{ zIndex: 1 }}
          anchor="left"
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <Box marginTop={7} p={2} width={200} textAlign={"center"}>
            <Typography variant="h5">Side Panel</Typography>
          </Box>
        </Drawer>
      </Box>
    </Stack>
  );
};

export default DrawerComponent;
