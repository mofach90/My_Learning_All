import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const TableComponent = () => {
  return (
    <Box p={2} width={700} height={700} bgcolor={"pink"}>
      <TableContainer component={Paper} sx={{maxHeight:300}}>
        <Table stickyHeader>
          <TableHead>
            <TableRow  >
              <TableCell sx={{bgcolor:"red",color:"white"}}>Id</TableCell>
              <TableCell sx={{bgcolor:"red",color:"white"}}>First name</TableCell>
              <TableCell sx={{bgcolor:"red",color:"white"}}>Last name</TableCell>
              <TableCell sx={{bgcolor:"red",color:"white"}} align="center">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {TableData.map((row) => (
              <TableRow key={row.id} sx={{"&:last-child td, &:last-child th":{border:0}}}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableComponent;

const TableData = [
  {
    id: 1,
    first_name: "Swen",
    last_name: "Bleier",
    email: "sbleier0@scribd.com",
    gender: "Bigender",
    ip_address: "66.26.30.180",
  },
  {
    id: 2,
    first_name: "Marlie",
    last_name: "Cowern",
    email: "mcowern1@cnet.com",
    gender: "Bigender",
    ip_address: "178.137.64.158",
  },
  {
    id: 3,
    first_name: "Arlette",
    last_name: "Yakunkin",
    email: "ayakunkin2@a8.net",
    gender: "Female",
    ip_address: "218.157.194.164",
  },
  {
    id: 4,
    first_name: "Bessie",
    last_name: "Canete",
    email: "bcanete3@mac.com",
    gender: "Female",
    ip_address: "228.171.97.100",
  },
  {
    id: 5,
    first_name: "Pauletta",
    last_name: "Portch",
    email: "pportch4@businesswire.com",
    gender: "Female",
    ip_address: "114.125.131.110",
  },
  {
    id: 6,
    first_name: "Hildagard",
    last_name: "Rosenhaupt",
    email: "hrosenhaupt5@nifty.com",
    gender: "Female",
    ip_address: "251.29.195.202",
  },
  {
    id: 7,
    first_name: "Gaye",
    last_name: "Jordi",
    email: "gjordi6@ovh.net",
    gender: "Female",
    ip_address: "13.132.69.220",
  },
  {
    id: 8,
    first_name: "Sharia",
    last_name: "Beedie",
    email: "sbeedie7@edublogs.org",
    gender: "Bigender",
    ip_address: "32.9.138.116",
  },
  {
    id: 9,
    first_name: "Jeanelle",
    last_name: "Skurm",
    email: "jskurm8@google.co.jp",
    gender: "Female",
    ip_address: "239.112.37.42",
  },
  {
    id: 10,
    first_name: "Andrea",
    last_name: "Mackley",
    email: "amackley9@friendfeed.com",
    gender: "Male",
    ip_address: "127.41.98.204",
  },
];
