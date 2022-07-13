import React from "react";

import { Box, Paper, Button, Stack, Typography, Grid } from "@mui/material";
import { Error } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ m: "10%" }}>
        <Grid container spacing={1}>
          <Grid item md={4}></Grid>
          <Grid item md={4}>
            <Paper sx={{ height: "300px", p: 10 }}>
              <Stack alignItems="center">
                <Error sx={{ fontSize: "70pt", color: "red" }} />
                <Typography
                  sx={{
                    fontSize: "70pt",
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  404
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14pt",
                    fontWeight: "bold",
                    color: "purple",
                  }}
                >
                  Page Not Found
                </Typography>

                <Button variant="contained" onClick={() => navigate(-1)}>
                  Go back
                </Button>
              </Stack>
            </Paper>
          </Grid>
          <Grid item md={4}></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PageNotFound;
