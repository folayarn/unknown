import {
  Woman,
  Person,
  ChildCare,
  Sports,
  Watch,
  Build,
  Checkroom,
  HealthAndSafety,
  Diamond,
} from "@mui/icons-material";
import Buttons from "../components/Buttons";

import phone from "../images/phone.png";
import fri from "../images/eclipse1.png";
import acc from "../images/Ellipse7.png";
import acc3 from "../images/Ellipse8.png";
import acc2 from "../images/Ellipse9.png";
import acc1 from "../images/Ellipse6.png";

export const menus = [
  {
    text: "Woman's",
    icon: <Woman />,
    path: "/g",
    expand: true,
  },
  {
    text: "Men's",
    icon: <Person />,
    path: "/u",
    expand: true,
  },
  {
    text: "Kid's",
    icon: <ChildCare />,
    path: "/",
    expand: true,
  },
  {
    text: "Accessories",
    icon: <Build />,
    path: "/e",
    expand: true,
  },
  {
    text: "Clothing",
    icon: <Checkroom />,
    path: "/d",
    expand: false,
  },
  {
    text: "Shoes",
    icon: <Checkroom />,
    path: "/f",
    expand: false,
  },
  {
    text: "Watches",
    icon: <Watch />,
    path: "/s",
    expand: false,
  },
  {
    text: "Jewellery",
    icon: <Diamond />,
    path: "/f",
    expand: false,
  },
  {
    text: "Health & Beauty",
    icon: <HealthAndSafety />,
    path: "/f",
    expand: false,
  },
  {
    text: "Sport",
    icon: <Sports />,
    path: "/f",
    expand: false,
  },
];

export const items = [
  {
    image: phone,
    button: <Buttons text={"Shop Now"} />,
    description: "Probably the most random thing you have ever seen!",
  },
  {
    image: phone,
    button: <Buttons text={"Shop Now"} />,
    description: "Hello World!",
  },
  {
    image: phone,
    button: <Buttons text={"Shop Now"} />,
    description: "Lower than Before",
  },
  {
    image: phone,
    button: <Buttons text={"Shop Now"} />,
    description: "Help the closest person to you",
  },
];

export const products = [
  {
    image: phone,

    description: "Accessories",
  },
  {
    image: fri,

    description: "Health & Beauty",
  },
  {
    image: acc,

    description: "Sports",
  },
  {
    image: acc1,

    description: "Clothing",
  },
  {
    image: acc2,

    description: "Electronics",
  },
  {
    image: acc3,

    description: "Clothing",
  },
];

export const sells = [
  {
    image: phone,
    price: "$1000",
    percentage: "10%",
    lowprice: "$30000",
    description: "Iphone11",
  },
  {
    image: fri,
    price: "$1000",
    percentage: "10%",
    lowprice: "$30000",
    description: "Refrigerator",
  },
  {
    image: acc,
    price: "$1000",
    percentage: "60%",
    lowprice: "$30000",
    description: "Sports",
  },
  {
    image: acc1,
    price: "$1000",
    percentage: "70%",
    lowprice: "$30000",
    description: "Clothing",
  },
];
