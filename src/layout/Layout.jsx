import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Container } from "../styles/styles";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Carousel from "react-material-ui-carousel";
import Item from "../components/Item";
import { items, products, sells } from "../utility/Utility";
import Card from "../components/Card";
import SellerCard from "../components/SellerCard";
import Buttons from "../components/Buttons";
import { InputAdornment, TextField } from "@mui/material";
import { SocialIcon } from "react-social-icons";
import lady from "../images/lady.png";
import div from "../images/div.png";

const Layout = () => {
  return (
    <>
      <Container>
        <Box>
          <Grid container spacing={3}>
            <Grid item md={3}>
              <Sidebar />
            </Grid>

            <Grid item md={9}>
              <Stack>
                <Header />

                <Carousel className={"caurosel"}>
                  {items.map((item, i) => (
                    <Item key={i} item={item} />
                  ))}
                </Carousel>
              </Stack>
            </Grid>

            <Grid item md={12}>
              <Stack spacing={5}>
                <Typography variant="h4">Product Category</Typography>
                <Stack direction={"row"} spacing={10}>
                  {products.map((item, i) => (
                    <Card key={i} item={item} />
                  ))}
                </Stack>
              </Stack>
            </Grid>

            <Grid item md={12}>
              <Stack spacing={5} mt={2}>
                <Typography variant="h4">Best Seller</Typography>
                <Stack direction={"row"} spacing={10}>
                  {sells.map((item, i) => (
                    <SellerCard key={i} item={item} />
                  ))}
                </Stack>
              </Stack>
            </Grid>
            <Grid item md={12}>
              <Box
                sx={{
                  backgroundColor: "#9c2bd0",
                  borderRadius: "20px",
                  marginLeft: "30px",
                  width: "auto",
                }}
                mt={5}
              >
                <Grid container spacing={3}>
                  <Grid item md={6}>
                    <Stack spacing={10} sx={{ p: 10 }}>
                      <Typography variant="h4" sx={{ color: "white" }}>
                        EZone Ecomerse
                      </Typography>
                      <Typography variant="h6" sx={{ color: "white" }}>
                        Generate Lorem Ipsum placeholder text for use in your
                        graphic, print and web layouts, and
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item md={6}>
                    <img src={lady} alt={"hello there"} className="image3" />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item md={12}>
              <Stack spacing={5} mt={2}>
                <Typography variant="h4">Deal of the Day</Typography>
                <Stack direction={"row"} spacing={10}>
                  {sells.map((item, i) => (
                    <SellerCard key={i} item={item} />
                  ))}
                </Stack>
              </Stack>
            </Grid>
            <Grid
              item
              md={12}
              mt={2}
              sx={{
                backgroundColor: "#ea4c20",
                height: "300px",
                color: "white",
                mb: "30px",
              }}
            >
              <Grid container spacing={3}>
                <Grid item md={6}>
                  <Stack spacing={5} alignItems="left" ml={15}>
                    <Typography variant="h5">Sign up for Newsletter</Typography>
                    <Typography variant="span">
                      and get the latest news and update
                    </Typography>
                    <TextField
                      sx={{
                        width: "60%",
                        marginLeft: "50px",
                        backgroundColor: "white",
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Buttons text={"Subscribe"} />
                          </InputAdornment>
                        ),
                      }}
                      placeholder="Enter your Email"
                    />
                  </Stack>
                </Grid>
                <Grid item md={2}></Grid>
                <Grid item md={4}>
                  <Stack direction={"row"} spacing={2} mt={9}>
                    <Typography component={"span"}>Follow us on</Typography>
                    <SocialIcon url="https://twitter.com/" fgColor="white" />
                    <SocialIcon url="https://facebook.com/" fgColor="white" />
                    <SocialIcon url="https://instagram.com" fgColor="white" />
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12} sx={{ color: "grey !important" }}>
              <Grid container>
                <Grid item md={3} p={4}>
                  <Typography
                    component="p"
                    sx={{ textAlign: "left", fontSize: "10pt" }}
                  >
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now
                  </Typography>
                </Grid>
                <Grid item md={1}></Grid>
                <Grid item md={8}>
                  <Grid container>
                    <Grid item md={4}>
                      <Stack spacing={2}>
                        <Box
                          sx={{
                            width: "30px",
                            height: "5px",
                            backgroundColor: "#e9556e",
                          }}
                        ></Box>
                        <Typography
                          component="p"
                          sx={{ textAlign: "left", fontSize: "10pt" }}
                        >
                          Why Choose Us
                        </Typography>
                        <Typography
                          component="p"
                          sx={{ textAlign: "left", fontSize: "10pt" }}
                        >
                          Our Services
                        </Typography>
                        <Typography
                          component="p"
                          sx={{ textAlign: "left", fontSize: "10pt" }}
                        >
                          Contact Us
                        </Typography>
                        <Typography
                          component="p"
                          sx={{ textAlign: "left", fontSize: "10pt" }}
                        >
                          Terms & Conditions
                        </Typography>
                      </Stack>
                    </Grid>

                    <Grid item md={4}>
                      <Stack spacing={2}>
                        <Box
                          sx={{
                            width: "50px",
                            height: "5px",
                            backgroundColor: "#e9556e",
                          }}
                        ></Box>
                        <Typography
                          component="p"
                          sx={{ textAlign: "left", fontSize: "10pt" }}
                        >
                          Monday - Friday | 8:00am - 10pm
                        </Typography>
                        <Typography
                          component="p"
                          sx={{ textAlign: "left", fontSize: "10pt" }}
                        >
                          Saturdays | 9:00am - 11pm
                        </Typography>
                        <Typography
                          component="p"
                          sx={{ textAlign: "left", fontSize: "10pt" }}
                        >
                          Sundays | 8:00am - 9pm
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item md={4}>
                      <Stack spacing={2}>
                        <Box
                          sx={{
                            width: "50px",
                            height: "5px",
                            backgroundColor: "#e9556e",
                          }}
                        ></Box>
                        <Typography
                          component="p"
                          sx={{ textAlign: "left", fontSize: "10pt" }}
                        >
                          3A Idowu Matins Victoria Island Lagos
                        </Typography>
                        <Typography
                          component="p"
                          sx={{ textAlign: "left", fontSize: "10pt" }}
                        >
                          Call Us - 081078899008
                        </Typography>
                        <Typography
                          component="p"
                          sx={{ textAlign: "left", fontSize: "10pt" }}
                        >
                          Email - info@keggo.com
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={12} p={1}>
              <img src={div} alt={"div"} style={{ marginLeft: "20px" }} />
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Box
        sx={{
          width: "100vw",
          height: "50px",
          borderTop: "1px solid #ede8ef",
          p: 2,
        }}
      >
        <span style={{ margin: "20% 0% 0% 37%" }}>
          Copyrigths @2022 Ezone. All Right Reserved
        </span>
      </Box>
    </>
  );
};

export default Layout;
