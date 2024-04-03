import { Box, Skeleton } from "@mui/material";

const SkeletonComponent = () => {
  return (
    <Box
      alignItems={"center"}
      justifyContent={"center"}
      width={500}
      height={500}
      bgcolor={"pink"}
      display={"flex"}
      gap={2}
    >
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} animation="wave"/>
      <Skeleton variant="circular" width={40} height={40} animation={false}/>
    </Box>
  );
};

export default SkeletonComponent;
