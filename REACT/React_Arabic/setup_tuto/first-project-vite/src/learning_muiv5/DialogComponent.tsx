import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

const DialogComponent = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      width={500}
      height={500}
      bgcolor={"pink"}
      position={"relative"}
    >
      <Button onClick={() => setOpen(!open)} variant="outlined">
        Open Dialog
      </Button>
      <Dialog
        onClose={() => setOpen(false)}
        open={open}
        sx={{ position: "absolute" }}
      >
        <DialogTitle>Submit the text</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Are You shure , you want to submit
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => setOpen(false)} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DialogComponent;
