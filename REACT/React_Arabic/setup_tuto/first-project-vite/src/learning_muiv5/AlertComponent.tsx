import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";
import { Alert, AlertTitle, Box, Button } from "@mui/material";
const AlertComponent = () => {
  return (
    <Box
      width={500}
      maxHeight={900}
      gap={2}
      p={8}
      bgcolor={"white"}
      alignItems={"center"}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Alert variant="outlined" sx={{ width: "100%" }} severity="error">
        This is an error
      </Alert>
      <Alert variant="outlined" sx={{ width: "100%" }} severity="warning">
        This is an warning
      </Alert>
      <Alert variant="outlined" sx={{ width: "100%" }} severity="success">
        This is an success
      </Alert>
      <Alert variant="outlined" sx={{ width: "100%" }} severity="info">
        This is an info
      </Alert>
      <Alert
        onClose={() => alert("hi")}
        variant="filled"
        sx={{ width: "100%" }}
        severity="error"
      >
        This is an error
      </Alert>
      <Alert
        action={
          <Button sx={{ bgcolor: "white", "&:hover": { bgcolor: "pink" } }}>
            Click
          </Button>
        }
        variant="filled"
        sx={{ width: "100%" }}
        severity="warning"
      >
        This is an warning
      </Alert>
      <Alert variant="filled" sx={{ width: "100%" }} severity="success">
        This is an success
      </Alert>
      <Alert variant="filled" sx={{ width: "100%" }} severity="info">
        This is an info
      </Alert>
      <Alert sx={{ width: "100%" }} severity="error">
        <AlertTitle>error</AlertTitle>This is an error
      </Alert>
      <Alert sx={{ width: "100%" }} severity="warning">
        <AlertTitle>warning</AlertTitle>This is an warning
      </Alert>
      <Alert sx={{ width: "100%" }} severity="success">
        <AlertTitle>success</AlertTitle>This is an success
      </Alert>
      <Alert
        icon={<NetworkCheckIcon fontSize="small" />}
        sx={{ width: "100%" }}
        severity="info"
      >
        <AlertTitle>info</AlertTitle>This is an info
      </Alert>
    </Box>
  );
};

export default AlertComponent;
