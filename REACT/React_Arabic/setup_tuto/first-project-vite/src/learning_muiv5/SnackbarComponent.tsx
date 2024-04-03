import { Alert, AlertProps, Box, Button, Snackbar } from "@mui/material";
import { forwardRef, useState } from "react";

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  }
);

const SnackbarComponent = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <Box
      width={500}
      height={500}
      p={2}
      gap={2}
      alignItems={"center"}
      justifyContent={"center"}
      bgcolor={"pink"}
      display={"flex"}
      position={"relative"}
    >
      <Button onClick={() => setOpen(true)} variant="contained">
        Submit
      </Button>
      <Snackbar
        message="Form submitted successfully"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        sx={{ position: "absolute" }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
      <Snackbar
        message="Form submitted successfully"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        sx={{ position: "absolute" }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <SnackbarAlert variant="filled" severity="warning">
          Form submitted successfully
        </SnackbarAlert>
      </Snackbar>
    </Box>
  );
};

export default SnackbarComponent;
