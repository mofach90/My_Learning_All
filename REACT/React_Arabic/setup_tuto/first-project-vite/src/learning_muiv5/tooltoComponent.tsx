import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton, Tooltip } from "@mui/material";

const TooltoComponent = () => {
  return (
    <Box
      width={500}
      justifyContent={"center"}
      display={"flex"}
      height={500}
      bgcolor={"pink"}
      alignItems={"center"}
    >
      <Tooltip title={"right"} placement="right">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title={"bottom"} placement="bottom">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={"bottom-end"} placement="bottom-end">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={"bottom-start"} placement="bottom-start">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={"left-end"} placement="left-end">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={"left-start"} placement="left-start">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={"left"} placement="left">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip
        title={"top-end"}
        placement="top-end"
        arrow
        enterDelay={500}
        leaveDelay={200}
        sx={{
          colors: "red",
          bgcolor: "blue",
          ":hover": { backgroundColor: "red" },
        }}
      >
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default TooltoComponent;
