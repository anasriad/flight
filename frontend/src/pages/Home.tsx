import { Box, Button, Container, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import SearchFlights from "../components/Search";
import StatImage from '../assets/StatHome.png'
import AUI from '../assets/Al_Akhawayn_University_Logo.png'
import Markoub from '../assets/wordmark.png'
import MRC from '../assets/mrc_logo.png'
import Kabdani from '../assets/agency_logo.png'
import BgImage from "../assets/bg.jpg";
import Happy from "../assets/happy.jpg";
import Leisure from "../assets/leisure.jpg";
import Header from "../components/Header";
import { FlightCardsContent } from "../utils/contants";
import FlightCards from "../components/FlightCards";
import type { FlightDetails } from "../utils/Types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
const images = [BgImage, Happy, Leisure];
export const Partners = [AUI, Kabdani, Markoub, MRC]
export default function Home() {

  const [current, setCurrent] = useState(0);

  const ref = useRef<HTMLInputElement>(null)

  

  // Cycle through images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <Header />
      <Box sx={{ position: "relative", width: "100%", minHeight: "100vh", overflow: "hidden" }} ref={ref}>
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
      <Box sx={{ mt: 20, mb: 20, ml: 10, mr: 10, justifyContent: 'center' }}>
        <Slider {...sliderSettings}>
          {FlightCardsContent.map((content: FlightDetails, i) => (
            <Box key={content.Destination} sx={{ px: 2 }}>
              <motion.div

                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 100 }}
                transition={{ delay: i / 3, duration: 0.3 }}>


                <FlightCards {...content} />
              </motion.div>
            </Box>
          ))}
        </Slider>
      </Box>
      <Box
        sx={{
          mt: 20,
          mb: 20,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 4, md: 6 },
            width: "100%",
            maxWidth: 1200,
            px: 2,
          }}
        >
          <motion.img
            src={StatImage}
            width={700}
            style={{
              display: "block",
            }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            style={{ flex: 1 }}
          >
            <Stats />
          </motion.div>
        </Box>
      </Box>
      <Box sx={{ mt: 20, mb: 20 }}>
        <Container component="div" sx={{
          maxWidth: 'full',
          justifyContent: 'center',
          textAlign: 'center',
          mb: 6
        }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              mb: 6,
              background: "linear-gradient(90deg, #074a64, #28ade2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: 2,
              textTransform: "uppercase",
              textShadow: "2px 2px 4px rgba(0,0,0,0.2)"
            }}
          >
            Partners
          </Typography>

        </Container>

        <Slider
          {...{
            dots: false,
            infinite: true,
            speed: 5000,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: "linear",
            arrows: false,
            responsive: [
              { breakpoint: 1024, settings: { slidesToShow: 3 } },
              { breakpoint: 768, settings: { slidesToShow: 2 } },
              { breakpoint: 480, settings: { slidesToShow: 1 } },
            ],
          }}
        >
          {Partners.concat(Partners).map((partner, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                px: 3,
              }}
            >
              <motion.img
                src={partner}
                alt={`Partner ${i}`}
                style={{
                  maxWidth: "150px",   // bigger logos
                  maxHeight: "80px",
                  objectFit: "contain",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              />
            </Box>
          ))}
        </Slider>
      </Box>

      <Box sx={{
        maxWidth: 'full',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 10,
        mb: 10
      }}>
        <Button

          sx={{
            backgroundColor: '#074a64ff',
            color: 'white',
            '&:hover': { backgroundColor: '#28ade2ff', color: 'white' },
            p: 2
          }}
          onClick={() => ref.current?.scrollIntoView({ behavior: 'smooth' })}

        >Explore Available Flights Now</Button>
      </Box>
      <Footer/>

    </>

  );
}
