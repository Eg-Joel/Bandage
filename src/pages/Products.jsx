import React from "react";
import { Box, useMediaQuery, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import ProductCard from "../components/ProductCard";

const theme = createTheme();

const products = [
  { image: "./prod1.jpeg" },
  { image: "./prod2.jpeg" },
  { image: "./prod3.jpeg" },
  { image: "./prod4.jpeg" },
  { image: "./prod5.jpeg" },
  { image: "./prod6.jpeg" },
  { image: "./prod7.jpeg" },
  { image: "./prod8.jpeg" },
];
function Products() {
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div>
      <Box
        sx={{
          padding: isMediumScreen ? "25px 150px" : "25px 25px",
        }}
      >
        <Box>
          <Typography variant="body" paragraph color="black" textAlign="center">
            Featured Products
          </Typography>
          <Typography
            variant="h5"
            color="black"
            fontSize={21}
            textAlign="center"
          >
            BESTSELLER PRODUCTS
          </Typography>
          <Typography variant="body" paragraph color="black" textAlign="center">
            Problems trying to resolve the conflict between
          </Typography>
        </Box>
        <Box>
          <Grid
            container
            spacing={{ xs: 1, md: 3 }}
            columns={{ xs: 12, sm: 12, md: 12 }}
            justifyContent="center"
          >
           
              {products.map((item, index) => (
                 <Grid item xs={12} sm={12} md={3} key={index}>
                <ProductCard  image={item.image} />
                </Grid>
              ))}
           
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Products;
