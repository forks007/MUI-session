import { Box, Stack, Grid, Paper } from "@mui/material";

//why Box? accepts a props "sx" which has access to theme//accepts predefined system property
export const MuiLayout = () => {
  return (
    <Paper sx={{ padding: "32px" }} elevation={4}>
      {/* //one directional layout */}
      <Stack border="1px solid" spacing={2} direction="row">
        {" "}
        <Box
          component="span"
          sx={{
            backgroundColor: "red",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Prayers Connect
        </Box>
        {/* system property */}
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
        ></Box>
      </Stack>

      {/* Grid */}
      {/* 12 columns */}
      {/* 5 breakpoints - xs,sm,md,lg,xl */}
      {/* only xs will apply auto */}
      <Grid container rowSpacing={2} columnSpacing={1} my={4}>
        <Grid item xs={3} sm={5}>
          <Box p={2} bgcolor="primary.light">
            Item 1
          </Box>
        </Grid>
        <Grid item xs={9} sm={7}>
          <Box p={2} bgcolor="primary.light">
            Item 2
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={2} bgcolor="primary.light">
            Item 3
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={2} bgcolor="primary.light">
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
