import { Button } from "@mui/material";
import React from "react";

const Buttons = ({ text }) => {
  return (
    <>
      <Button
        size="small"
        variant={"contained"}
        sx={{
          borderRadius: "50px",
          backgroundColor: "#ea4c20",
          textTransform: "capitalize",
          width: "140px",
          ":hover": {
            backgroundColor: "#ea4c20",
          },
        }}
      >
        {text}
      </Button>
    </>
  );
};

export default Buttons;
