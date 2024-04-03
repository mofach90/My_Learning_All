import { Favorite, Share } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
  IconButtonProps,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.standard,
  }),
}));

const NiceCard = () => {
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand(!expand);
    console.log({ expand });
  };
  return (
    <Box>
      <Card sx={{ width: 300 }}>
        <CardHeader
          avatar={
            <Avatar src="https://cdn.futwiz.com/assets/img/fifa20/faces/190042.png">
              M
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={"MARADONA"}
          subheader={"The legend of Football"}
          titleTypographyProps={{
            color: "blueviolet",
            fontFamily: "serif",
            align: "center",
          }}
          subheaderTypographyProps={{
            color: "blue",
            fontFamily: "fantasy",
            align: "center",
          }}
        />
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <CardMedia
              component={"img"}
              height={190}
              image="data:image/jpeg;base64,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"
            />
          </Grid>
          <Grid item xs={6}>
            <CardMedia
              component={"img"}
              height={190}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBRDwYvc_TiD-f5xrkPFNl5R0uMFG8rSTJbemibjI-sw&s"
            />
          </Grid>
          <Grid item xs={6}>
            <CardMedia
              component={"img"}
              height={190}
              image="https://i.ebayimg.com/images/g/DBsAAOSwDr9fxDAj/s-l1200.webp"
            />
          </Grid>
          <Grid item xs={6}>
            <CardMedia
              component={"img"}
              height={190}
              image="https://i.pinimg.com/736x/35/97/b9/3597b9f48ca0ea16b8e066e3d67fffe6.jpg"
            />
          </Grid>
        </Grid>

        <CardContent>
          <Typography variant="body2" color={"text.primary"}>
            Diego Armando Maradona (Spanish: [ˈdjeɣo maɾaˈðona]; 30 October 1960
            – 25 November 2020) was an Argentine professional football player
            and manager. Widely regarded as one of the greatest players in the
            history of the sport, he was one of the two joint winners of the
            FIFA Player of the 20th Century award.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton>
            <Favorite />
          </IconButton>
          <IconButton>
            <Share />
          </IconButton>
          <ExpandMore expand={expand} onClick={handleExpand}>
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expand} timeout={2000} unmountOnExit>
          <CardContent>
            <Typography variant="body2">
              Maradona was the first player to set the world record transfer fee
              twice: in 1982 when he transferred to Barcelona for £5 million,
              and in 1984 when he moved to Napoli for a fee of £6.9 million. He
              played for Argentinos Juniors, Boca Juniors, Barcelona, Napoli,
              Sevilla, and Newell's Old Boys during his club career, and is most
              famous for his time at Napoli where he won numerous accolades and
              led the club to Serie A title wins twice. Maradona also had a
              troubled off-field life and his time with Napoli ended after he
              was banned for taking cocaine.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
};
export default NiceCard;
