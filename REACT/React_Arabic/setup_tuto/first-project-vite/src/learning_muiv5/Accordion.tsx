import { ExpandCircleDown } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { useState } from "react";

const AccordionComponent = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleExpanded = (panel: string) => {
    setExpanded(expanded === panel ? false : panel);
  };
  const [count, setCount] = useState<number>(0);

  const handelClickPlus = () => {
    setCount((prevCount)=>prevCount + 1);
    setCount((prevCount)=>prevCount + 1);
  };
  const handelClickMinus = () => {
    setCount(count - 1);
  };
  return (
    <Box width={300}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={() => {
          handleExpanded("panel1");
        }}
      >
        <AccordionSummary id="Panel1" expandIcon={<ExpandCircleDown />}>
          <Typography>Accordion1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography gutterBottom variant="body2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            eligendi quis mollitia iste, delectus eaque voluptas corporis nobis
            perferendis nam laboriosam a autem sed, cumque minus ipsam! Nobis,
            ducimus voluptatum.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ bgcolor: "blue" }}
        expanded={expanded === "panel2"}
        onChange={() => {
          handleExpanded("panel2");
        }}
      >
        <AccordionSummary id="Panel2" expandIcon={<ExpandCircleDown />}>
          <Typography>Accordion2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography gutterBottom variant="body2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            eligendi quis mollitia iste, delectus eaque voluptas corporis nobis
            perferendis nam laboriosam a autem sed, cumque minus ipsam! Nobis,
            ducimus voluptatum.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={() => {
          handleExpanded("panel3");
        }}
      >
        <AccordionSummary id="Panel3" expandIcon={<ExpandCircleDown />}>
          <Typography>Accordion3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography gutterBottom variant="body2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            eligendi quis mollitia iste, delectus eaque voluptas corporis nobis
            perferendis nam laboriosam a autem sed, cumque minus ipsam! Nobis,
            ducimus voluptatum.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Box margin={6} bgcolor={"white"} display={"flex"}>
        <Button variant="contained" onClick={handelClickPlus}>
          +
        </Button>
        <Typography color="black" variant="h3" width={100} align="center">
          {count}
        </Typography>
        <Button variant="contained" onClick={handelClickMinus}>
          -
        </Button>
      </Box>
    </Box>
  );
};
export default AccordionComponent;
