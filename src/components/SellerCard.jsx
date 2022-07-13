import { Stack, Typography, Paper, Rating } from "@mui/material";
import React from "react";

const Card = ({ item }) => {
  const [value, setValue] = React.useState(4);
  return (
    <>
      <Paper
        sx={{
          borderRadius: "6px",
          boxShadow: "0px 0px 2px rgba(0,0,0,0.1)",
          p: 5,
        }}
      >
        <Stack alignItems={"center"} spacing={1}>
          <img src={item.image} alt={item.description} className="image2" />
          {item.description}
          <Stack direction={"row"} spacing={1}>
            <Typography variant="h6"> {item.price}</Typography>

            <Typography
              component="span"
              sx={{ textDecoration: "line-through", color: "#e7e1e7" }}
            >
              {" "}
              {item.lowprice}
            </Typography>
            <Typography component="span" sx={{ color: "#7fedba" }}>
              {" "}
              {item.percentage}
            </Typography>
          </Stack>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Stack>
      </Paper>
    </>
  );
};

export default Card;
