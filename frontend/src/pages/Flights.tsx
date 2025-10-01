import { Box, Button, Card, CardActions, CardMedia, Container, Typography, Grid } from "@mui/material";
import Header from "../components/Header";
import { useSearchForFlightQuery } from "../API/flightAPI";
import { DotLoader } from 'react-spinners';
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion"; // 👈 import framer motion
import RyanAir from '../assets/ryanair.png'
import AirArabia from '../assets/airArabia.png'
import RAM from '../assets/ram.png'
import { useNavigate } from "react-router-dom";
export default function Flights() {
  const location = useLocation();
  const { data, isLoading, error, isError } = useSearchForFlightQuery(location.state);
  const Navigate = useNavigate()

  if (isLoading) return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
      <DotLoader />
    </Box>
  );

  if (isError) toast.error((error as any)?.message);
  else if (data) toast.success('Flights loaded successfully!');

  const pictureDisplayed = (company: string) => {
    switch (company) {
      case 'Ryanair': return RyanAir
      case 'Air Arabia': return AirArabia
      case 'Royal Air Maroc': return RAM
      default: return ""
    }
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    <>
      <Header />

      <Box sx={{ py: 4, bgcolor: "#f5f5f5" }}>
        <Container>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', textAlign: 'center' }}>
            Available Flights
          </Typography>

          {data?.length === 0 && (
            <Typography variant="h6" sx={{ textAlign: 'center', mt: 4 }}>
              No flights found for your search criteria.
            </Typography>
          )}

          <Grid container spacing={4} justifyContent="center">
            {data?.map((flight, idx) => (
              <Grid item xs={12} md={10} key={idx}>
                {/* Wrap each card in a motion.div */}
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  custom={idx} // 👈 pass index for stagger delay
                >
                  <Card
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "stretch",
                      p: 3,
                      borderRadius: 4,
                      background: "linear-gradient(135deg, #ffffff, #f9fafc)",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Left - Logo + Airline */}
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 180 }}>
                      <CardMedia
                        component="img"
                        alt={`${flight.company} logo`}
                        image={pictureDisplayed(flight.company)}
                        sx={{ height: 60, width: "auto", objectFit: "contain", mb: 1 }}
                      />
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {flight.company}
                      </Typography>
                    </Box>

                    {/* Middle - Flight Details */}
                    <Box sx={{ flex: 1, px: 4, borderRight: "2px dashed #ddd" }}>
                      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                        {flight.from} → {flight.destination}
                      </Typography>
                      <Typography variant="body1">
                        <strong>Take Off:</strong> {flight.takeOffTime} | <strong>Landing:</strong> {flight.landingTime}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Date: {flight.date}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Seats: {flight.SeatsAvailable}/{flight.totalSeats}
                      </Typography>
                    </Box>

                    {/* Right - Price & Button */}
                    <Box sx={{ minWidth: 200, textAlign: "center", pl: 3 }}>
                      <Typography variant="h4" sx={{ fontWeight: "bold", color: "primary.main", mb: 2 }}>
                      {flight.price}
                      </Typography>
                      <Button variant="contained" size="large" sx={{ borderRadius: 3, px: 4 }} href={flight.Link} target="blank">
                        SELECT
                      </Button>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
