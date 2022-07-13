import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import {ListItemText} from "@mui/material";
import ListItem from "@mui/material/ListItem";
import { useLocation, useNavigate } from "react-router-dom";
import {ArrowRight} from "@mui/icons-material";

const activeStyle = {
  backgroundColor: "white",
  "&:hover": {
    cursor: "pointer",
    color:"#ec2668"
  },
};

const ListItems = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <ListItem
        
        sx={
          location.pathname === item.path
            ? {
                
                ...activeStyle,
                
                color: "#ec2668",
                borderEndStartRadius: "30px",
                borderStartStartRadius: "30px",
              }
            : {  mt:0,color:"grey" }
        }
        onClick={() => {
          navigate(item.path);
        }}
      >
        <ListItemButton >
          <ListItemIcon  sx={
          location.pathname === item.path
            ? {
                
               
                color: "#ec2668",
              
              }
            : { color:"grey" }
        }
       
      >{item.icon}</ListItemIcon>
          <ListItemText primary={item.text}/>
        
          {item.expand && <ArrowRight/>}
      
              </ListItemButton>
      </ListItem>
    </>
  );
};

export default ListItems;
