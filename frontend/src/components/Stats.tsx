import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Box, Card, CardActionArea, Container, Typography } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import LuggageIcon from "@mui/icons-material/Luggage";
import GroupIcon from "@mui/icons-material/Group";
import { motion } from "framer-motion";

export default function Stats() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      icon: <LuggageIcon sx={{ fontSize: 50, color: "#1976d2" }} />,
      label: "Available Airports in Our Platform",
      end: 800,
      duration: 3,
    },
    {
      icon: <FlightTakeoffIcon sx={{ fontSize: 50, color: "#ff9800" }} />,
      label: "Flight.ma Bookings",
      end: 700,
      duration: 3,
    },
    {
      icon: <GroupIcon sx={{ fontSize: 50, color: "#4caf50" }} />,
      label: "Current Users",
      end: 1080,
      duration: 3,
    },
  ];

  return (
    <Box
      component="section"
      ref={ref}
      sx={{
        py: 10,
        background: "linear-gradient(135deg, #f0f4ff 0%, #e0f7fa 100%)",
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Travel Around the World
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Approximately 70 planes take off each minute around the world. Why not you!
        </Typography>
      </Container>

      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "stretch",
          justifyContent: "center",
          gap: { xs: 4, md: 6 },
        }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
            style={{ flex: 1 }}
          >
            <Card
              sx={{
                p: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: 3,
                boxShadow: "0px 8px 20px rgba(0,0,0,0.1)",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0px 12px 24px rgba(0,0,0,0.15)",
                  transition: "0.3s",
                },
                height: "320px", // fixed height
                textAlign: "center",
              }}
            >
              <CardActionArea
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "100%", // stretch content to match card height
                  gap: 2,
                  pointerEvents: "none", // optional: disable hover effect on content
                }}
              >
                {stat.icon}
                <Typography variant="h6" fontWeight="medium">
                  {stat.label}
                </Typography>
                <Typography variant="h4" fontWeight="bold" color="primary">
                  {isInView && <CountUp end={stat.end} duration={stat.duration} />}
                </Typography>
              </CardActionArea>
            </Card>
          </motion.div>
        ))}
      </Container>
    </Box>
  );
}
