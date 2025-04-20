import {AppBar, Box, Button, Container, Drawer, IconButton, MenuItem, styled, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {useState} from "react";


interface ComponentProps {
    active: string;
}

const StyledToolbar = styled(Toolbar)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    border: "1px solid",
    borderColor: theme.palette.divider,
    padding: "8px 12px",
}))

function Navbar({active}: ComponentProps) {

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    }

    return (
        <AppBar
            position="static"
            sx={{
                boxShadow: 0,
                bgcolor: 'transparent',
                mt: '28px'
            }}
        >
            <Container maxWidth="xl">
                <StyledToolbar>
                    <Typography variant="h6" sx={{color: '#5d8aa8'}}>
                        Самые высокие здания и сооружения
                    </Typography>

                    <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                        <Button variant={`${active === "1" ? "contained" : "text"}`} color="info" size="medium">
                            Главная
                        </Button>

                        <Button variant={`${active === "2" ? "contained" : "text"}`} color="info" size="medium">
                            Список зданий
                        </Button>

                        <Button variant={`${active === "3" ? "contained" : "text"}`} color="info" size="medium">
                            Контакты
                        </Button>
                    </Box>

                    <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                        <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                            <MenuIcon/>
                        </IconButton>

                        <Drawer
                            anchor="top"
                            open={open}
                            onClose={toggleDrawer(false)}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                }}
                            >
                                <IconButton onClick={toggleDrawer(false)}>
                                    <CloseRoundedIcon/>
                                </IconButton>
                            </Box>
                            <Box>
                                <MenuItem
                                    selected={active === "1"}
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: 'rgba(187,219,241,0.74)',
                                        },
                                    }}
                                >
                                    Главная
                                </MenuItem>
                                <MenuItem
                                    selected={active === "2"}
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: 'rgba(187,219,241,0.74)',
                                        },
                                    }}
                                >
                                    Список зданий
                                </MenuItem>
                                <MenuItem
                                    selected={active === "3"}
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: 'rgba(187,219,241,0.74)',
                                        },
                                    }}
                                >
                                    Контакты
                                </MenuItem>
                            </Box>
                        </Drawer>
                    </Box>

                </StyledToolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar;