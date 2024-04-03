import { Box, CircularProgress } from "@mui/material";

const ProgressComponent = () => {
  return (
    <Box width={500} height={500} bgcolor={"pink"} display={"flex"}>
      <CircularProgress />
    </Box>
  );
};

export default ProgressComponent;
