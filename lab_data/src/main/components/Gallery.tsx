import {Box, Container, ImageList, ImageListItem, ImageListItemBar} from "@mui/material";
import {Link} from 'react-router-dom';
import structures from "../../data";

const imgData = structures.slice(0, -1);

function Gallery() {
    return (
        <Container maxWidth="xl">
            <Box sx={{height: 585, overflowY: 'scroll', m: '20px auto'}}>
                <ImageList
                    variant="masonry"
                    sx={{
                        columnCount: {
                            xs: '1 !important',
                            sm: '2 !important',
                            md: '3 !important',
                            lg: '4 !important',
                        },
                    }}
                    gap={8}
                >
                    {imgData.map((item, index) => (
                        <Link key={index} to={"/building/" + index} style={{textDecoration: 'none', color: 'inherit'}}>
                            <ImageListItem key={item.img}>
                                <img
                                    srcSet={item.img}
                                    src={item.img}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar position="bottom" title={item.title}/>
                            </ImageListItem>
                        </Link>
                    ))}
                </ImageList>
            </Box>
        </Container>
    )
        ;
}

export default Gallery;