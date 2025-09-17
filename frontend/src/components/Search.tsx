import { Container, Autocomplete, TextField, ButtonGroup, Button, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { format } from 'date-fns'
import { motion } from 'framer-motion';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import SearchIcon from "@mui/icons-material/Search";
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import type { SearchingType } from "../utils/Types";
import { useSearchForFlightQuery } from "../API/flightAPI";
import toast from "react-hot-toast";
import { DotLoader } from 'react-spinners'
import Flights from "../pages/Flights";
export default function SearchFlights() {
  const ExternalDestinations = [
    { text: "Paris, France" },
    { text: "Monaco, France" },
    { text: "New York, USA" },
    { text: "Washington, USA" },
    { text: "Delhi, India" },
    { text: "Madrid, Spain" },
    { text: "London, UK" },
  ];

  const InternalDestinations = [
    { text: "Casablanca" },
    { text: "Fez" },
    { text: "Agadir" },
    { text: "Tanger" },
    { text: "Dakhla" },
    { text: "Rabat" },
    { text: "Marrakech" },
  ];

  const [destinationType, setDestination] = useState('EX');

  const [searchData, setSearchData] = useState<SearchingType>({ from: '', destination: '', date: '' })

  return (
    <Container maxWidth="sm" sx={{ mt: 8, textAlign: "center" }}>
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0, duration: 0.6, ease: 'easeOut' }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "white" }}>
          Explore Available Flights <ConnectingAirportsIcon />
        </Typography>
      </motion.div>

      {/* Flight Type Buttons */}
      <Box sx={{ mb: 4 }}>
        <ButtonGroup variant="contained" sx={{ borderRadius: "50px", overflow: "hidden" }}>


          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.4, ease: 'easeOut' }}
          >
            <Button
              sx={{
                px: 4,
                backgroundColor: destinationType === 'IN' ? "#1976d2" : "#29343fff",
                "&:hover": { backgroundColor: destinationType === 'IN' ? "#115293" : "#121416ff" },
                color: "white",
              }}
              onClick={() => setDestination('EX')}
            >
              External Flights
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.4, ease: 'easeOut' }}
          >
            <Button
              sx={{
                px: 4,
                backgroundColor: destinationType === 'EX' ? "#1976d2" : "#29343fff",
                "&:hover": { backgroundColor: destinationType === 'EX' ? "#115293" : "#121416ff" },
                color: "white",
              }}
              onClick={() => setDestination('IN')}
            >
              Internal Flights
            </Button>
          </motion.div>
        </ButtonGroup>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 0,
          mb: 4,
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.5, ease: 'easeOut' }}
        >
          <Autocomplete
            freeSolo
            options={InternalDestinations.map((option) => option.text)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="From"
                variant="outlined"
                onChange={(e) => setSearchData(prev => ({ ...prev, from: e.target.value }))}
                sx={{
                  borderRadius: "50px 0 0 50px",
                  "& .MuiOutlinedInput-root": { borderRadius: "50px 0 0 50px" },
                  backgroundColor: "white",
                  boxShadow: "0 4px 10px rgba(255,255,255,0.1)",
                  minWidth: 150,

                }}
              />
            )}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 0.5, ease: 'easeOut' }}
        >
          <Autocomplete
            freeSolo
            options={
              destinationType === 'EX'
                ? ExternalDestinations.map((option) => option.text)
                : InternalDestinations.map((option) => option.text)
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Destination"
                variant="outlined"
                onChange={(e) => setSearchData(prev => ({ ...prev, destination: e.target.value }))}
                sx={{
                  backgroundColor: "white",
                  minWidth: 150,
                }}
              />
            )}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, duration: 0.5, ease: 'easeOut' }}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date"
              onChange={(value) => setSearchData(prev => ({ ...prev, date: format(value?.toString()!, 'yyyy-MM-dd') }))}
              sx={{
                backgroundColor: "white",
                minWidth: 120,
              }}
            />
          </LocalizationProvider>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8, duration: 0.5, ease: 'easeOut' }}
        >
          <Button
            onClick={async () => {
              try {
                const { data, isLoading } = useSearchForFlightQuery({ ...searchData })
                if (isLoading) return <DotLoader />
                else return <Flights {...data} />

              } catch (error: any) {
                toast.error(error.message || 'Error Loading the page')
              }
            }

            }
            sx={{
              backgroundColor: '#1976d2',
              borderRadius: "0 50px 50px 0",
              color: 'white',
              minWidth: 120,
              height: '56px',
              padding: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              "&:hover": { backgroundColor: "#115293" },
            }}
          >
            <SearchIcon />
          </Button>
        </motion.div>
      </Box>

    </Container>
  );
}
