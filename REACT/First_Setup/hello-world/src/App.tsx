import { Box, Typography } from "@mui/material";
import "./App.css";

function Header() {
  return (
    <Box sx={{ color: "blue", fontSize: 60, fontFamily: "fantasy" }}>
      HEADER
    </Box>
  );
}

function List() {
  return <Typography sx={{fontSize:30, fontStyle:"italic", fontFamily:"monospace"}}>List</Typography>
}

function App() {
  return (
    <>
      <Header />
      <Box sx={{ color: "red" }}>Hello World</Box>
      <List/>
    </>

  );
}

export default App;
