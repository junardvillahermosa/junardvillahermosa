import React from "react";
import { styled } from "@mui/system";
import { AppBar,Toolbar, Typography, Button, Box, Container, Card, CardContent, CardActions } from "@mui/material";
import { Facebook, Twitter, GitHub, LinkedIn } from "@mui/icons-material";
import ProfilePic from '.././images/junard.jpeg';
import ContactMe from "./contact-me";

const Header = styled(AppBar)(({theme}) => ({
    backgroundColor: "black",
    position: 'fixed',

}));

const InnerHeader = styled(Toolbar)(({theme}) => ({
    height: '90px',
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 25,
    fontWeight: "300",
    '& a': {
        textDecoration: 'none',
        color: 'white',
        marginLeft: 10,
        padding: '10px 12px',
        borderRadius: '5px',
    },
    '& .navigation': {
        marginRight: 30,
        '& .home:hover': {

            color: 'hotpink',
            fontWeight: "bold",
        },
        '& .about:hover': {

            color: 'hotpink',
            fontWeight: "bold",
        },
        '& .projects:hover': {

            color: 'hotpink',
            fontWeight: "bold",
        },
        '& .contact:hover': {

            color: 'hotpink',
            fontWeight: "bold",
        },

    },
    '& .junardlogo': {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',

    }
}));

const FirstContainer = styled(Box)(({theme}) => ({
    paddingBottom: '60px',
    backgroundColor: 'none',
    height: 'auto',
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
    padding: 15,
    marginTop: 20,
    fontSize: 20,
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
    height: 'auto',
    width: '100%',

    backgroundColor: 'transparent',
    paddingBottom: '90px',
}));

const SecondMainContent = styled(Container)(({theme}) => ({
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
    alignItems: 'center',
    height: 'auto',
    width: '100%',
    marginTop: '30px',
    padding: '20px',
    justifyContent: 'space-around',
    '& .content-here': {
        padding: '100px',
    }

}));

const ThirdContainer = styled(Box)(({theme}) => ({
    height: 'auto',
    width: '100%',
    position: 'relative',
    backgroundColor: 'transparent',
    paddingTop: '30px',
}));

const ThirdMainContent = styled(Container)(({theme}) => ({
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
    alignItems: 'center',
    height: 'auto',
    width: '100%',
    padding: '20px',
    justifyContent: 'space-around',
    '& .content-here': {
        padding: '100px',
    }
}));

const FourthContainer = styled(Box)(({theme}) => ({
    height: 'auto',
    width: '100%',
    position: 'relative',
    backgroundColor: 'transparent',
    paddingTop: '30px',



}));

const FourthMainContent = styled(Container)(({theme}) => ({
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
    alignItems: 'center',
    height: 'auto',
    width: '100%',
    padding: '20px',
    justifyContent: 'space-around',
    '& .content-here': {
        padding: '100px',
    }

}));


export const JunardVillahermosa = () => {
    return (
        <React.Fragment>
            <Header>
                <InnerHeader>
                    <a href="#Junard" className="junardvillahermosa">
                        <Typography className="junardlogo">JUNARDVILLAHERMOSA</Typography>
                    </a>
                    <nav className="navigation">
                        <a href="#home" className="home">HOME</a>
                        <a href="#about-me" className="about">ABOUT</a>
                        <a href="#projects" className="projects">PROJECTS</a>
                        <a href="#contact-me" className="contact">CONTACT</a>
                    </nav>

                </InnerHeader>
            </Header>

            <FirstContainer id="home">
                <MainContent>

                    <Card sx={{ height: 'auto', width: '400px', padding: '10px', border: 'none', boxShadow: 'none'}}>
                        <CardContent sx={{ height: 'auto', border: 'none', boxShadow: 'none'}}>
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
                            <div style={{marginTop: '20px', display: 'flex', gap: '20px', marginLeft: '5px'}}>
                                <a href=""><Facebook sx={{ color: 'blue', fontSize: '50px'}}/></a>
                                <a href=""><Twitter sx={{ color: 'skyblue', fontSize: '50px'}}/></a>
                                <a href=""><GitHub sx={{ color: 'black', fontSize: '50px'}}/></a>
                                <a href=""><LinkedIn sx={{ color: 'blue', fontSize: '50px'}}/></a>
                            </div>
                        </CardContent>

                    </Card>
                    <Card sx={{height: 'auto', width: 'auto', border: 'none', boxShadow: 'none' }}>
                        <CardContent sx={{ backgroundColor: 'white', height: 'auto', border: 'none', boxShadow: 'none'}}>
                            <ProfilePicture src={ProfilePic} sx={{boxShadow: '0 7px 8px rgba(0, 0, 0, 0.1)'}}/>

                        </CardContent>
                    </Card>
                </MainContent>
            </FirstContainer>

            <SecondContainer id="about-me">
                <hr style={{width: '90%', backgroundColor: 'gray', height: '3px'}}/>
                <SecondMainContent>
                    <Card sx={{ height: 'auto', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.066)'}}>
                        <CardContent sx={{ backgroundColor: 'transparent',  height: 'auto', border: 'none', boxShadow: 'none'}}>
                            <Typography variant="h4" component='div' sx={{fontWeight: 'bold', fontSize: '50px'}}>
                                ABOUT ME
                            </Typography>
                            <Typography variant="p" component='div' sx={{fontWeight: 'normal', textJustify: 'justify'}}>
                                My name is Junard Villahermosa, and I am a determined 22-year-old Information Technology student at Cebu Technological University - Argao Campus. My unwavering ambition is to become a highly skilled Software Engineer and make a significant impact in the Tech industry. <br /> <br />When I entered college, I anticipated the programming challenges that would come with no prior background. However, I refused to let that stop me from pursuing my passion through self-study. As a result, I have established a firm foundation in C and Java while expanding my skillset to include the creation of simple applications utilizing ASP.NET and Windows Forms. Furthermore, I have developed CRUD applications with Xamarin and Firebase's real-time database. To add to my repertoire, I've also created a small CRUD application utilizing JavaScript and PHP for a project. Currently, I am focused on my capstone project, which involves developing an application using React and TypeScript.
                            </Typography>



                        </CardContent>

                    </Card>
                    <Card sx={{ height: 'auto', width: '100%', backgroundColor: 'rgba(255, 192, 203, 0.571)'}}>
                        <CardContent sx={{ backgroundColor: 'transparent',  height: 'auto', border: 'none', boxShadow: 'none'}}>
                            <Typography variant="h4" component='div' sx={{fontWeight: 'bold', fontSize: '50px'}}>
                                SKILLSET
                            </Typography>
                            <Typography variant="p" component='div' sx={{fontWeight: 'normal', textJustify: 'justify'}}>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </Typography>
                        </CardContent>
                    </Card>
                </SecondMainContent>
            </SecondContainer>

            <ThirdContainer id="projects">
                <hr style={{width: '90%', backgroundColor: 'gray', height: '3px'}}/>

                    <ThirdMainContent>
                        <Card sx={{ height: 'auto', width: '100%', backgroundColor: 'rgba(255, 192, 203, 0.571)'}}>
                            <CardContent sx={{ backgroundColor: 'transparent',  height: 'auto', border: 'none', boxShadow: 'none'}}>
                                <Typography variant="h4" component='div' sx={{fontWeight: 'bold', fontSize: '50px'}}>
                                    PROJECTS
                                </Typography>
                                <Typography variant="p" component='div' sx={{fontWeight: 'normal', textJustify: 'justify'}}>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."                            </Typography>
                            </CardContent>
                        </Card>
                    </ThirdMainContent>
            </ThirdContainer>

            <FourthContainer id="contact-me">
            <hr style={{width: '90%', backgroundColor: 'gray', height: '3px'}}/>
            <ContactMe />






            </FourthContainer>


        </React.Fragment>



    )


}

