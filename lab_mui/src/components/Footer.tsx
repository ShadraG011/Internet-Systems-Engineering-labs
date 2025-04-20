import React from 'react';
import {Box, Container, Typography, Link, Divider} from '@mui/material';

function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: 'grey.900',
                color: 'grey.100',
                py: 4,
                borderRadius: "10px 10px 0 0"
            }}
            component="footer"
        >
            <Container maxWidth="xl">
                <Box display="flex" justifyContent="space-between" flexWrap="wrap" gap={4}>
                    <Box>
                        <Typography variant="h6" gutterBottom>О компании</Typography>
                        <Typography variant="body2">Мы занимаемся строительством и управлением объектов недвижимости с
                            2000 года.</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" gutterBottom>Навигация</Typography>
                        <Link href="/" underline="hover" color="inherit" display="block">Главная</Link>
                        <Link href="/buildings" underline="hover" color="inherit" display="block">Здания</Link>
                        <Link href="/contacts" underline="hover" color="inherit" display="block">Контакты</Link>
                    </Box>
                    <Box>
                        <Typography variant="h6" gutterBottom>Контакты</Typography>
                        <Typography variant="body2">Тел: +7 (966) 270-05-32</Typography>
                        <Typography variant="body2" >Email: gardash.vv@dvfu.ru</Typography>
                    </Box>
                </Box>
                <Divider sx={{my: 3, borderColor: 'grey.700'}}/>
                <Typography variant="body2" align="center" color="grey.500">
                    © {new Date().getFullYear()} ООО "Shadrag Industries". Все права защищены.
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;