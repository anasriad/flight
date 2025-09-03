import { Box, Container } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import SearchFlights from "../components/Search";

// Import your images
import BgImage from "../assets/bg.jpg";
import Happy from "../assets/happy.jpg";
import Leisure from "../assets/leisure.jpg";
import Header from "../components/Header";

const images = [BgImage, Happy, Leisure];

export default function Home() {
  const [current, setCurrent] = useState(0);

  // Cycle through images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <Header/>
    <Box sx={{ position: "relative", width: "100%", minHeight: "100vh", overflow: "hidden" }}>
      {/* Background Image Slideshow */}
      <AnimatePresence>
        <motion.img
          key={current}
          src={images[current]}
          alt="Background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: "absolute",
            width: "100%",
            height: "900px",
            objectFit: "cover",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
      </AnimatePresence>

      {/* Animated SearchFlights Container */}
      <motion.div
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.5, ease: "easeOut" }}
  style={{
    position: "absolute",
    top: "20%",
    left: "25%",
    transform: "translate(-50%, -50%)",
    width: "80%", // stretch wider
    maxWidth: "1000px",
  }}
>
  <Container
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      textAlign: "center",
      backgroundColor: "rgba(0, 0, 139, 0.4)",
      borderRadius: 5,
      py: 4,
      px: 6,
    }}
  >
    <SearchFlights />
  </Container>
</motion.div>

    </Box>
    </>
    
  );
}
