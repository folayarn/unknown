import { Stack, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { Search } from "@mui/icons-material";
import Buttons from "../components/Buttons";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  return (
    <>
      <Stack spacing={5} sx={{ ml: 10 }} direction={"row"}>
        <TextField
          sx={{
            width: "60%",
            borderRadius: "50px",
            marginLeft: "50px",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Buttons text={"Search"} />
              </InputAdornment>
            ),
          }}
          placeholder="Search anything"
        />

        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="error">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </Stack>
    </>
  );
};

export default Header;
