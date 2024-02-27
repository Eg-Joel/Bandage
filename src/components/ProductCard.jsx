import React from 'react'
import { Card, CardContent, Typography, Box, Button } from '@mui/material';

function ProductCard({image}) {
    console.log(image);
  return (
    <div>
         <Card sx={{  border: 'none',boxShadow:"none", display: 'flex', flexDirection: 'column', alignItems: 'center',textAlign:"center" }}>
      <img
        src={image}
        alt="Product"
        style={{height: 400, objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom >
          Product Name
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          English Department
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
        <span style={{ color: 'gray' }}>$16.48</span> <span style={{ color: 'green' }}>$6.48</span>
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Box
            sx={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: 'blue',
              marginRight: 1,
            }}
          />
          <Box
            sx={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: 'green',
              marginRight: 1,
            }}
          />
          <Box
            sx={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: 'orange',
              marginRight: 1,
            }}
          />
          <Box
            sx={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: 'black',
            }}
          />
        </Box>
        
      </CardContent>
    </Card>
    </div>
  )
}

export default ProductCard