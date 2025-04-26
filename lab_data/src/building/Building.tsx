import {Breadcrumbs, Container, Link,styled, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import Navbar from "../components/Navbar";
import structures from "../data";


const StyledTypography = styled(Typography)(({theme}) => ({
    color: "black",
    textAlign: 'justify',
    marginBottom: theme.spacing(2),
}))


function Building() {
    const {id} = useParams();

    const building = structures[Number(id)];

    return (
        <Container>
            <Navbar active=""/>
            <Breadcrumbs aria-label="breadcrumb" separator=">" sx={{pl:"28px", mb:"28px"}}>
                <Link underline="hover" href="/" color="#5d8aa8" >
                    Главная
                </Link>
                <Typography color="text.primary">{building.title}</Typography>
            </Breadcrumbs>
            <Container sx={{
                display: 'flex',
                alignItems: "center",
                justifyContent: "center",
                flexDirection: 'column',
                mb: "28px"
            }}>
                <Typography gutterBottom variant="h5" sx={{textAlign: 'center', color: "gray", mb:"14px"}}>
                    {building.title}
                </Typography>
                <img
                    srcSet={building.img}
                    src={building.img}
                    alt={building.title}
                    loading="lazy"
                    width={"40%"}
                    height={"auto"}
                />
            </Container>
            <Container sx={{display: "flex", gap: 4}}>
                {building.description.map((item, ind) => (
                    <StyledTypography key={ind} variant="body2" sx={{flex:"1"}}>
                        {item}
                    </StyledTypography>
                ))}
            </Container>

        </Container>
    )
}

export default Building