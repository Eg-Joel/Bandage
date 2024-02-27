import { Box, Typography, AppBar } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

function Header1() {
  return (
    <div>
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: "black", padding: 2,  display: { xs: "none", md: "flex" } }}
      >
        <Box
          sx={{
            display: "flex" ,
            mr: 1,
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", gap: 3 }}>
            <Box sx={{ display: "flex", gap: 1 }}>
              <PhoneIcon />
              <Typography variant="body1">(225) 555-0118</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <EmailOutlinedIcon />

              <Typography variant="body1">
                michelle.rivera@example.com
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography variant="body1">
              Follow Us and get a chance to win 80% off
            </Typography>
          </Box>
          <Box sx={{ display: "flex",gap: 1  }}>
            <Typography variant="body1">Follow Us :</Typography>
            <InstagramIcon />
            <YouTubeIcon />
            <FacebookIcon />
            <TwitterIcon />
          </Box>
        </Box>
      </AppBar>
    </div>
  );
}

export default Header1;
