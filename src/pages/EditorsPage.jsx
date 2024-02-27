import { Box, Typography, useMediaQuery, Button } from "@mui/material";
import React from "react";
import { createTheme } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";

const theme = createTheme();

function EditorsPage() {
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div>
      <Box
        sx={{
          padding: isMediumScreen ? "25px 150px" : "25px 25px",
          background: "#fafafa",
        }}
      >
        <Box>
          <Box>
            <Box>
              <Typography
                variant="h5"
                paragraph
                color="black"
                textAlign="center"
              >
                EDITORS' PICK
              </Typography>
              <Typography
                variant="body"
                paragraph
                color="black"
                textAlign="center"
              >
                Problems trying to resolve the conflict between
              </Typography>
            </Box>

            <Box>
              <Grid
                container
                spacing={{ xs: 1, md: 1 }}
                columns={{ xs: 12, sm: 12, md: 12 }}
                justifyContent="center"
              >
                <Grid item xs={12} sm={12} md={5}>
                  <Box
                    textAlign="center"
                    sx={{
                      backgroundImage: `url("./imge1.jpeg")`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      position: "relative",
                      height: isMediumScreen ? 500 : 500,
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        position: "absolute",
                        bottom: 10,
                        left: 10,
                        background: "white",
                        color: "black",
                      }} // Position the button
                    >
                      MEN
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                  <Box
                    textAlign="center"
                    sx={{
                      backgroundImage: `url("./image2.jpeg")`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      position: "relative",
                      height: isMediumScreen ? 500 : 500,
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        position: "absolute",
                        bottom: 10,
                        left: 10,
                        background: "white",
                        color: "black",
                      }}
                    >
                      WOMEN
                    </Button>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={2}>
                  <Box
                    textAlign="center"
                    sx={{
                      backgroundImage: `url("./image3.jpeg")`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      position: "relative",
                      height: isMediumScreen ? 243 : 500,
                      marginBottom: 2,
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        position: "absolute",
                        bottom: 10,
                        left: 10,
                        background: "white",
                        color: "black",
                      }}
                    >
                      ACCESSORIES
                    </Button>
                  </Box>
                  <Box
                    textAlign="center"
                    sx={{
                      backgroundImage: `url("./image4.jpeg")`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      position: "relative",
                      height: isMediumScreen ? 243 : 500,
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        position: "absolute",
                        bottom: 10,
                        left: 10,
                        background: "white",
                        color: "black",
                      }}
                    >
                      KIDS
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default EditorsPage;
