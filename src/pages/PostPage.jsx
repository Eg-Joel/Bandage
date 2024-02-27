import React from 'react'
import { Box, Typography, useMediaQuery, Button } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import PostCards from '../components/PostCards';


const theme = createTheme();
const posts = [
    { image: "./post1.jpeg" },
    { image: "./post2.jpeg" },
    { image: "./post3.jpeg" },
    
  ];

function PostPage() {
    const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div>
        <Box
        sx={{
          padding: isMediumScreen ? "25px 150px" : "25px 25px",
          
        }}
      >
 <Box>
          <Typography variant="body" paragraph color="#5abcf4" textAlign="center" mt={3}>
            Practice Advice
          </Typography>
          <Typography
            variant="h4"
            color="black"
            textAlign="center"
          >
            Featured Posts
          </Typography>
          <Typography variant="body" paragraph color="black" textAlign="center">
          Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics 
          </Typography>
        </Box>

        <Box mt={9}>
          <Grid
            container
            spacing={{ xs: 1,  }}
            columns={{ xs: 12, sm: 12, md: 12 }}
            justifyContent="center"
          >
           
              {posts.map((item, index) => (
                 <Grid item xs={12} sm={12} md={4} key={index}>
                <PostCards image={item.image} />
                </Grid>
              ))}
           
          </Grid>
        </Box>
      </Box>
    </div>
  )
}

export default PostPage