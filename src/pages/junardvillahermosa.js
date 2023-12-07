import React from "react";
import { styled } from "@mui/system";
import { AppBar,Toolbar, Typography, Button, Box, Grid, Container, Card, CardContent } from "@mui/material";

const Header = styled(AppBar)(({theme}) => ({
    backgroundColor: "#777777",
    position: 'fixed',

}));

const InnerHeader = styled(Toolbar)(({theme}) => ({
    height: '90px',
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 25,
    fontWeight: "bold",
    '& a': {
        textDecoration: 'none',
        color: 'white',
        marginLeft: 30,
    },
    '& .navigation': {
        marginRight: 50,
    },
    '& .junardlogo': {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',

    }
}));

const FirstContainer = styled(Box)(({theme}) => ({
    position: 'absolute',
    backgroundColor: 'whitesmoke',
    height: '800px',
    width: '100%',
}));

const MainContent = styled(Container)(({theme}) => ({
    backgroundColor: 'white',
    height: '300px',
    width: '100%',
    marginTop: '200px',
    display: 'flex',
    padding: '30px',
    justifyContent: 'space-around',
    '& .content-here': {
        padding: '100px',
    },

}));

const SecondContainer = styled(Box)(({theme}) => ({

}));

export const JunardVillahermosa = () => {
    return (
        <React.Fragment>
            <Header>
            <InnerHeader>
                <a href="#Junard" className="junardvillahermosa">
                    <Typography className="junardlogo">JUNARD VILLAHERMOSA</Typography>
                </a>
                <nav className="navigation">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </nav>

            </InnerHeader>
        </Header>

        <FirstContainer>
            <MainContent>

                <Card sx={{ height: '200px', width: '300px'}}>
                    <CardContent sx={{ backgroundColor: 'black',  height: '200px'}}>

                    </CardContent>

                </Card>
                <Card sx={{height: '200px', width: '300px' }}>
                    <CardContent sx={{ backgroundColor: 'red', height: '200px'}}>

                    </CardContent>

                </Card>



            </MainContent>

        </FirstContainer>






        </React.Fragment>



    )


}

