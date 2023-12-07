import React from "react";
import { styled } from "@mui/system";
import { AppBar,Toolbar, Typography, Button, Box, Grid, Container, Card, CardContent, CardActions } from "@mui/material";
import { Facebook, Twitter, GitHub, LinkedIn } from "@mui/icons-material";
import ProfilePic from '.././images/junard.jpeg';


const Header = styled(AppBar)(({theme}) => ({
    backgroundColor: "white",
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
        color: 'black',
        marginLeft: 10,
        padding: '10px 12px',
        borderRadius: '5px',
    },
    '& .navigation': {
        marginRight: 30,
        '& .home:hover': {
            backgroundColor: 'black',
            color: 'pink'
        },
        '& .about:hover': {
            backgroundColor: 'black',
            color: 'pink'
        },
        '& .projects:hover': {
            backgroundColor: 'black',
            color: 'pink'
        },
        '& .contact:hover': {
            backgroundColor: 'black',
            color: 'pink'
        },

    },
    '& .junardlogo': {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',

    }
}));

const FirstContainer = styled(Box)(({theme}) => ({
    position: 'absolute',
    backgroundColor: 'none',
    height: '800px',
    width: '100%',
}));

const MainContent = styled(Container)(({theme}) => ({
    backgroundColor: 'none',
    display: 'flex',
    alignItems: 'center',
    height: 'auto',
    width: '100%',
    marginTop: '250px',
    padding: '30px',
    justifyContent: 'space-around',
    '& .content-here': {
        padding: '100px',
    }

}));

const ButtonStyled = styled(Button)(({theme}) => ({
    color: 'black',
    padding: 10,
    marginTop: 20,
    fontSize: 20,
    left: 0,
    fontWeight: 'bold',
    borderRadius: 5,
    border: '3px solid pink',
    '&:hover': {
        backgroundColor: 'black',
        border: '3px solid black',
        color: 'pink'
    }
}));

const ProfilePicture = styled('img')(({theme}) => ({
    height: '400px',
    width: '400px',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: '500px',

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
                        <a href="" className="home">HOME</a>
                        <a href="" className="about">ABOUT</a>
                        <a href="" className="projects">PROJECTS</a>
                        <a href="" className="contact">CONTACT</a>
                    </nav>

                </InnerHeader>
            </Header>

            <FirstContainer>
                <MainContent>

                    <Card sx={{ height: 'auto', width: '400px'}}>
                        <CardContent sx={{ backgroundColor: 'transparent',  height: 'auto', border: 'none', boxShadow: 'none'}}>
                            <Typography variant="h4" component='div' sx={{fontWeight: 'bold', fontSize: '50px'}}>
                                Hello, World!
                            </Typography>
                            <Typography variant="h6" component='div' sx={{fontWeight: 'bold'}}>
                                I am Junard D. Villahermosa
                            </Typography>
                            <Typography variant="h6" component='div'sx={{fontWeight: 'bold'}} >
                                I am a future Software Engineer
                            </Typography>
                            <CardActions>
                                <ButtonStyled>
                                    Download Resume
                                </ButtonStyled>
                            </CardActions>
                            <div style={{marginTop: '20px', display: 'flex', gap: '20px'}}>
                                <a href=""><Facebook sx={{ color: 'blue', fontSize: '50px'}}/></a>
                                <a href=""><Twitter sx={{ color: 'skyblue', fontSize: '50px'}}/></a>
                                <a href=""><GitHub sx={{ color: 'black', fontSize: '50px'}}/></a>
                                <a href=""><LinkedIn sx={{ color: 'blue', fontSize: '50px'}}/></a>
                            </div>


                        </CardContent>

                    </Card>
                    <Card sx={{height: 'auto', width: 'auto' }}>
                        <CardContent sx={{ backgroundColor: 'white', height: 'auto'}}>
                            <ProfilePicture src={ProfilePic}/>

                        </CardContent>
                    </Card>
                </MainContent>
            </FirstContainer>


        </React.Fragment>



    )


}

