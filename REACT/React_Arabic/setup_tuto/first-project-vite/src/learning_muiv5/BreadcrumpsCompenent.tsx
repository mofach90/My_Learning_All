import NextPlanIcon from "@mui/icons-material/NextPlan";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";

const BreadcrumpsCompenent = () => {
  return (
    <Box m={1} bgcolor={"pink"} color="white">
      <Breadcrumbs
        separator={<NextPlanIcon fontSize={"large"} sx={{ color: "white" }} />}
        maxItems={2}
        itemsAfterCollapse={2}
        itemsBeforeCollapse={2}
      >
        <Link href="#">Home</Link>
        <Link href="#">Catalog</Link>
        <Link href="#">About</Link>
        <Link href="#">About</Link>
        <Link href="#">About</Link>
        <Typography>Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default BreadcrumpsCompenent;
