import React from "react";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const pages = ["Home", "Shop", "About", "Blog", "Contact", "Pages"];

function HeaderMain() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <div>
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
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

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 800,
                color: "black",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, marginLeft:9 }}>
            {pages.map((page) => (
        page === "Shop" ? (
          <React.Fragment key={page}>
            <Button
              onClick={handleOpenNavMenu}
              aria-haspopup="true"
              aria-controls="nav-menu"
              sx={{ my: 2, color: "black", display: "flex", justifyContent: 'center',}}
            >
              {page} <KeyboardArrowDownIcon/>
            </Button>
            <Menu
              id="nav-menu"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              <MenuItem onClick={handleCloseNavMenu}>Option 1</MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>Option 2</MenuItem>
            </Menu>
          </React.Fragment>
        ) : (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "black", display: "block" }}
          >
            {page}
          </Button>
        )
      ))}
            </Box>

            <Box sx={{ flexGrow: 0,  display: "flex", gap: 3, color:"#23a6f0", alignItems: "center", justifyContent: "center" }}>
                <Box sx={{display: { xs: "none", md: "flex" }, alignItems: "center", justifyContent: "center"  }}>
                <PersonOutlineOutlinedIcon />
            <Button variant="text" sx={{color:'#23a6f0'}}>Login</Button>/
            <Button variant="text"  sx={{color:'#23a6f0'}}>Register</Button>
                </Box>

                <Box sx={{ display: "flex", gap: 2,  }}>
                <SearchOutlinedIcon sx={{ flexGrow: 0, display: { xs: "flex", md: "flex" } }}/>
                <Typography variant="body1" sx={{ display: { xs: "none", md: "flex" } }} >
                <ShoppingCartOutlinedIcon />1
            </Typography>
            <Typography variant="body1" sx={{ display: { xs: "none", md: "flex" } }}>
            <FavoriteBorderOutlinedIcon />1
            </Typography>
          
            
                    </Box>

         
            
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
          <Box
            sx={{ display: { xs: "inline", md: "none" }, textAlign: "center",margin:5 }}
          >
            <Typography variant="h5" color={"gray"} margin={1}>
              Home
            </Typography>

            <Typography variant="h5" color={"gray"} margin={1}>
              Product
            </Typography>

            <Typography variant="h5" color={"gray"} margin={1}>
              Pricing
            </Typography>

            <Typography variant="h5" color={"gray"} margin={1}>
              Contact
            </Typography>
          </Box>
        </Container>
      </AppBar>
    </div>
  );
}

export default HeaderMain;
