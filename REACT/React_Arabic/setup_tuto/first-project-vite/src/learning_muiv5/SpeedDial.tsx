import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const SpeedDialComponent = () => {
  return (
    <Box width={600} height={600} bgcolor={"pink"} position={"relative"}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        icon={<SpeedDialIcon openIcon={<CatchingPokemonIcon/>}/>}
        sx={{ position: "absolute", bottom:46, right: 46 }}
      >
        <SpeedDialAction tooltipOpen icon={<ContentCopyIcon />} tooltipTitle="Copy" />
        <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
        <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" />
      </SpeedDial>
    </Box>
  );
};

export default SpeedDialComponent;
