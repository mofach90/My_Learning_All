import { Avatar, AvatarGroup, Box, Grid, Stack } from "@mui/material";

const AvatarComponent = () => {
  return (
    <Stack position={"relative"}>
      <Stack
        spacing={3}
        p={2}
        direction={"row"}
        width={300}
        height={300}
        bgcolor={"pink"}
        position={"relative"}
      >
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
      </Stack>
      <Box
        bgcolor={"warning.light"}
        display={"flex"}
        gap={1}
        sx={{ direction: "row", flexWrap: "wrap" }}
        width={350}
        // minHeight={1000}
        p={2}
      >
        <Avatar sx={{ bgcolor: "primary.light", width: 69, height: 69 }}>
          BW
        </Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
        <Avatar
          variant="square"
          sx={{ bgcolor: "primary.light", width: 69, height: 69 }}
        >
          BW
        </Avatar>
        <Avatar
          variant="square"
          sx={{ bgcolor: "primary.light", width: 69, height: 69 }}
        >
          BW
        </Avatar>
        <Avatar variant="rounded" sx={{ bgcolor: "success.light" }}>
          CK
        </Avatar>
      </Box>
      <Grid
        bgcolor={"error.light"}
        display={"flex"}
        direction={"column"}
        gap={1}
        width={350}
        // minHeight={1000}
        p={2}
        container
      >
        <Grid item xs={3} display={"flex"} direction={"row"} height={"%100"}>
          <Avatar sx={{ bgcolor: "primary.light", width: 69, height: 69 }}>
            BW
          </Avatar>
        </Grid>
        <Grid item xs={3} display={"flex"} direction={"row"} height={"%100"}>
          <Avatar sx={{ bgcolor: "primary.light", width: 69, height: 69 }}>
            BW
          </Avatar>
        </Grid>
        <Grid item xs={3} display={"flex"} direction={"row"} height={"%100"}>
          <Avatar sx={{ bgcolor: "primary.light", width: 69, height: 69 }}>
            BW
          </Avatar>
        </Grid>
        <Grid item xs={3} display={"flex"} direction={"row"} height={"%100"}>
          <Avatar sx={{ bgcolor: "primary.light", width: 69, height: 69 }}>
            BW
          </Avatar>
        </Grid>
        <Grid item xs={3} display={"flex"} direction={"row"} height={"%100"}>
          <Avatar sx={{ bgcolor: "primary.light", width: 69, height: 69 }}>
            BW
          </Avatar>
        </Grid>
        <Grid item xs={3}>
          <Avatar sx={{ bgcolor: "primary.light", width: 69, height: 69 }}>
            BW
          </Avatar>
        </Grid>
        <Grid item xs={3}>
          <Avatar sx={{ bgcolor: "primary.light", width: 69, height: 69 }}>
            BW
          </Avatar>
        </Grid>
        <Grid
          item
          xs={9}
          bgcolor={"white"}
          height={100}
          display={"flex"}
          direction={"column"}
          flexWrap={"wrap"}
        >
          <Avatar sx={{ bgcolor: "primary.light", width: 69, height: 69 }}>
            BW
          </Avatar>
          <Avatar sx={{ bgcolor: "primary.light", width: 69, height: 69 }}>
            BW
          </Avatar>
          <Avatar sx={{ bgcolor: "primary.light", width: 69, height: 69 }}>
            BW
          </Avatar>
        </Grid>
        <Grid
          item
          xs={9}
          bgcolor={"white"}
          height={"%100"}
          display={"flex"}
          direction={"row"}
          flexWrap={"wrap"}
        >
          <Avatar sx={{ bgcolor: "primary.light", width: 69, height: 69 }}>
            BW
          </Avatar>
          <Avatar sx={{ bgcolor: "primary.light", width: 69, height: 69 }}>
            BW
          </Avatar>
          <Avatar sx={{ bgcolor: "primary.light", width: 69, height: 69 }}>
            BW
          </Avatar>
        </Grid>
      </Grid>
      <Stack
        spacing={3}
        p={2}
        direction={"row"}
        width={300}
        height={300}
        bgcolor={"primary.main"}
        position={"relative"}
      >
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/men/85.jpg"
            alt="John Doe"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/85.jpg"
            alt="John Doe"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/85.jpg"
            alt="John Doe"
          />
        </AvatarGroup>
      </Stack>
    </Stack>
  );
};

export default AvatarComponent;
