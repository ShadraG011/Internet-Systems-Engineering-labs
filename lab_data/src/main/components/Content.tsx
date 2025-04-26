import BuildCard from "./BuildCard";
import structures from "../../data";
import {Container, Grid} from "@mui/material";
import React from "react";

const cardData = [structures[3], structures[6], structures[9], structures[7]]

function Content() {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={{xs: 3, md: 6}}>
                {cardData.map((item, index) => (
                    <BuildCard building={item} index={index}/>
                ))}
            </Grid>
        </Container>
    );
}

export default Content;