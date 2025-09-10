import { Box, Container, ListItem, Typography, List, ListItemButton } from "@mui/material";
import Logo from '../assets/Logo.png'
import InfoIcon from '@mui/icons-material/Info';
import Groups2Icon from '@mui/icons-material/Groups2';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
export default function Footer() {

    const Links = [
        {
            icon: <InfoIcon />,
            Links: '#',
            Text: 'About Us'
        },
        {
            icon: <Groups2Icon />,
            Links: '#',
            Text: 'Team'
        },
        {
            icon: <MapsHomeWorkIcon />,
            Links: '#',
            Text: 'Head Quarters'
        },
        {
            icon: <AttachMoneyIcon />,
            Links: '#',
            Text: 'Referrels'
        },
        {
            icon: <InstagramIcon />,
            Links: '#',
            Text: 'Instagram'
        },
        {
            icon: <LinkedInIcon />,
            Links: '#',
            Text: 'LinkedIn'
        },
        {
            icon: <XIcon />,
            Links: '#',
            Text: 'X'
        },
        {
            icon: <XIcon />,
            Links: '#',
            Text: 'X'
        },
    ]

    return <>
        <Box component="div" sx={{
            backgroundColor: '#313030ff',
            p: 5,
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <Container component="div" sx={{
                ml: 0,
            }}>
                <img src={Logo} width={300} style={{ marginTop: 2 }} />
                <Typography sx={{
                    color: 'white',
                }}>Created by Anas Riad</Typography>
            </Container>
            <Container >
                <List sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 10,
                    color: 'white'
                }}>
                    {Links.map((item, i) => (<ListItemButton key={i} sx={{
                        display: 'flex', gap: 3,
                        '&:hover': { backgroundColor: '#18455fff', color: 'white' }
                    }}>{item.icon}{item.Text}</ListItemButton>))}
                </List>
            </Container>
        </Box>
    </>
}