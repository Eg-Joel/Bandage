import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box } from "@mui/material";
import ClockIcon from "@mui/icons-material/Schedule";

function PostCards({image}) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Box sx={{ display: "flex", gap:6 }}>
              <Typography variant="body1" sx={{color:"#23a6f0"}} >
                Google
              </Typography>
              <Typography variant="body1">Trending</Typography>
              <Typography variant="body1">New</Typography>
            </Box>
            <Typography gutterBottom variant="h5" component="div">
              Loudest à la Madison #1
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              (L'integral)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </Typography>
            <Box sx={{ display: "flex", justifyContent:"space-between" ,mt:3}}>
              <Typography variant="body1" component="div" >
                <ClockIcon sx={{ marginRight: 1,color:"#23a6f0" }} />
                22 April 2021
              </Typography>
              <Typography variant="body1" component="div">
                <img
                  src="./commenticon.png"
                  alt=""
                  style={{ width: 20, height: 20, marginRight: 1 }}
                />
                 10 Comments
              </Typography>
            
            </Box>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" sx={{color:"black"}}>
            Learn more
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default PostCards;
