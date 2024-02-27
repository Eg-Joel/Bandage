import React from "react";
import { Box, useMediaQuery, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();

function BuyPage() {

    const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          margin: 0,
          padding: isMediumScreen ? "0px 0px" : "25px 25px",
        }}
      >
        <Grid container columns={{ xs: 12, sm: 12, md: 12 }}>
          <Grid item xs={12} md={6}>
            <Box
              textAlign="center"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <img
                src="./buyimg1.png"
                alt="image"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
          </Grid>

          <Grid
            xs={12}
            sm={12}
            md={6}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box
              sx={{
                padding: "10px 35px",
              }}
            >
              <Typography variant="body1" gutterBottom color="gray">
                SUMMER 2020
              </Typography>

              <Typography variant="h4" paragraph color="black" mt={3}>
                Part of the Neural Universe
              </Typography>
              <Typography variant="body1" paragraph color="black" fontSize={21}>
                We know how large objects will act, but things on a small scale.
              </Typography>

              <Box>
                <Button
                  sx={{
                    borderRadius: "5px",
                    backgroundColor: "#2dc071",
                    color: "white",
                    padding: 1,
                    mr: 1,
                  }}
                >
                  Buy Now
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "5px",
                    borderColor: "#2dc071",
                    color: "#2dc071",
                    padding: 1,
                  }}
                >
                  Read More
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box
              p={2}
              textAlign="center"
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <img
                src="./buyimg1.png"
                alt="image"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default BuyPage;
