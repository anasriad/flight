import React from "react";
import { AppBar, Toolbar, Button, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/Logo.png";
import {motion} from 'framer-motion'
export default function Header() {
  const menuItems = ["Maps", "About Us", "FAQ","Partners","Hotels","Tourism"];

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor:'white',
        boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
        height:'100px',
        py: 0,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          px: { xs: 2, md: 6 },
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={Logo}
            alt="Logo"
            style={{
              width: 160,
              cursor: "pointer",
              filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.2))",
            }}
          />
        </Box>

        {/* Desktop Menu */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 5,
            alignItems: "center",
          }}
        >
          {menuItems.map((item, index) => (
            
            <motion.div 
             
              initial={{opacity:0, y:-100}}
              animate={{opacity:1, y:0}}
              transition={{delay:index/3, duration:1}}
              key={item}

            >
              <Button
              key={item}
              sx={{
                color: "#0d47a1",
                fontWeight: 600,
                letterSpacing: "0.5px",
                position: "relative",
                backgroundColor: "transparent",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "0%",
                  height: "2px",
                  bottom: -2,
                  left: 0,
                  backgroundColor: "#0d47a1",
                  transition: "width 0.3s ease-in-out",
                },
                "&:hover::after": {
                  width: "100%",
                },
              }}
            >
              {item}
              </Button>
            </motion.div>
            
            
          ))}
        </Box>

        {/* Mobile Menu */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton size="large" sx={{ color: "#0d47a1" }}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
