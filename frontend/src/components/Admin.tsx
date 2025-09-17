import { Box, Container, List, ListItem, ListItemIcon, ListItemText, Divider } from "@mui/material";
import FlightIcon from '@mui/icons-material/Flight';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useSelector } from "react-redux";
import type { RootState } from "../States/Store";
import { useNavigate } from "react-router-dom";
export default function Admin() {

    const Navigate = useNavigate()

    const options = [
        { icon: <DashboardIcon />, text: "Dashboard" },
        { icon: <FlightIcon />, text: "Current Flights" },
        { icon: <PeopleIcon />, text: "Passengers" },
        { icon: <SettingsIcon />, text: "Settings" },
    ];

    const User = useSelector((state: RootState) => state.user)

    if (!User) Navigate('/')

    return (
        <Box display="flex" height="100vh">

           
            <Box
                sx={{
                    width: 240,
                    bgcolor: 'primary.main',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    p: 2
                }}
            >
                <Box sx={{ mb: 2, fontWeight: 'bold', fontSize: '1.2rem' }}>
                    Admin Panel
                </Box>
                <Divider sx={{ bgcolor: 'white', mb: 2 }} />
                <List>
                    {options.map((option, index) => (
                        <ListItem key={index}>
                            <ListItemIcon sx={{ color: 'white' }}>
                                {option.icon}
                            </ListItemIcon>
                            <ListItemText primary={option.text} />
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box flex={1} p={3}>
                <Container>
                    <h1>Welcome to Admin Panel</h1>
                </Container>
            </Box>
        </Box>
    );
}
