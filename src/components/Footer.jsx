import React from "react";
import {
  Box,
  useMediaQuery,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { createTheme } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const theme = createTheme();

function Footer() {
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          margin: 0,
          background: "#fafafa",
          padding: isMediumScreen ? "25px 150px" : "25px 25px",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontWeight: 800,
            color: "black",
            textDecoration: "none",
          }}
        >
          Bandage
        </Typography>
        <Box sx={{ display: "flex", gap: 1, color: "#23a6f0" }}>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          margin: 0,
          padding: isMediumScreen ? "25px 150px" : "25px 25px",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          spacing={{ xs: 1, md: 3 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
          justifyContent="center"
        >
          <Grid item xs={12} sm={12} md={2}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Company
              </Typography>
              <Typography gutterBottom>About Us</Typography>
              <Typography gutterBottom>Career</Typography>
              <Typography gutterBottom>We are hiring</Typography>
              <Typography gutterBottom>Blog</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={2}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Legal
              </Typography>
              <Typography gutterBottom>About Us</Typography>
              <Typography gutterBottom>Career</Typography>
              <Typography gutterBottom>We are hiring</Typography>
              <Typography gutterBottom>Blog</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={2}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Features
              </Typography>
              <Typography gutterBottom>Business Marketing</Typography>
              <Typography gutterBottom>User Analytic</Typography>
              <Typography gutterBottom>Live Chat</Typography>
              <Typography gutterBottom>Unlimited Support</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={2}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Resources
              </Typography>
              <Typography gutterBottom>IOS & Android</Typography>
              <Typography gutterBottom>Watch a Demo</Typography>
              <Typography gutterBottom>Customers</Typography>
              <Typography gutterBottom>API</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Get in Touch
              </Typography>
              <Box sx={{display:"flex"}}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                size="small"
                sx={{ height: 40 }}
              />
              <Button variant="contained" color="primary"  size="small"  sx={{  height: 40 }}>
                Subscribe
              </Button>
              </Box>
              
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          margin: 0,
          background: "#fafafa",
          padding: isMediumScreen ? "25px 150px" : "25px 25px",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="body"
         

        >
          Made With Love By Finland All Right Reserved 
        </Typography>
       
      </Box>
    </div>
  );
}

export default Footer;
