import React from "react";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import ListItems from "../components/ListItems";
import { Paper, Divider } from "@mui/material";
import { menus } from "../utility/Utility";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import { ListItemText } from "@mui/material";

import { Add } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <>
      <Toolbar />
      <Paper
        sx={{ borderRadius: "30px", boxShadow: "0px 0px 2px rgba(0,0,0,0.1)" }}
      >
        <List p={0} sx={{ p: 0 }}>
          {menus.map((item, index) => (
            <ListItems item={item} key={index} />
          ))}

          <Divider />
          <ListItem sx={{ mt: 0, color: "#ec2668" }}>
            <ListItemButton>
              <ListItemText primary={"More Categories"} />

              <Add />
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>
    </>
  );
};

export default Sidebar;
