import { Box, Stack, Typography, Grid } from "@mui/material";
import React from "react";

const Item = ({ item }) => {
  return (
    <>
      <Box sx={{ height: "550px", margin: "20% 0% 0% 10%" }}>
        <Grid container>
          <Grid item md={7}>
            <Stack spacing={5}>
              <Typography variant="h4">{item.description}</Typography>

              {item.button}
            </Stack>
          </Grid>
          <Grid item md={5}>
            <img src={item.image} alt={item.description} className="image" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Item;
