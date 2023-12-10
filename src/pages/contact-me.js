import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Facebook, Twitter, GitHub, LinkedIn } from "@mui/icons-material";
import { styled } from '@mui/system';
import ProfilePic from '.././images/backgroundImage.jpeg';

const ButtonStyled = styled(Button)(({theme}) => ({
    color: 'black',
    padding: 10,
    fontSize: 20,
    left: 0,
    fontWeight: 'bold',
    borderRadius: 5,
    border: '3px solid black',
    '&:hover': {
        backgroundColor: 'black',
        border: '3px solid black',
        color: 'pink'
    }
}));

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/junardvillahermosa">
        junardvillahermosa
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const defaultTheme = createTheme();

export default function ContactMe() {
    const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      email: data.get('email'),
      subject: data.get('subject'),
      message: data.get('message'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${ProfilePic})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} sx={{backgroundColor: '#FFF3F5'}} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',

            }}
          >
            <Typography variant="h4" component='div' sx={{fontWeight: 'bold', fontSize: '50px'}}>
                CONTACT ME
            </Typography>
            <Typography component="h1" variant="h5">
              Send me a message by filling out the form
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField sx={{backgroundColor: 'white'}}
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField sx={{backgroundColor: 'white'}}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type='email'
                autoComplete="email"
                autoFocus
              />
              <TextField sx={{backgroundColor: 'white'}}
                margin="normal"
                required
                fullWidth
                id="subject"
                label="Subject"
                name="subject"
                autoComplete="subject"
                autoFocus
              />
              <TextField sx={{backgroundColor: 'white'}}
                margin="normal"
                required
                fullWidth
                name="message"
                label="Message"
                id="message"
                autoComplete="message"
                multiline
                rows={4}
              />


              <ButtonStyled
                type="submit"
                fullWidth

                sx={{ mt: 3, mb: 2, bgcolor: 'transparent' }}

              >
                Send Email
              </ButtonStyled>
              <Box
                sx={{
                my: 2,
                mx: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
                >
                <Typography component="h1" variant="h5">
                    Or get in touch with me on socials
                </Typography>
                <div style={{marginTop: '20px', display: 'flex', gap: '20px'}}>
                                <a href="https://www.facebook.com/junarddvillahermosa"><Facebook sx={{ color: 'blue', fontSize: '50px'}}/></a>
                                <a href="https://twitter.com/junardurable"><Twitter sx={{ color: 'skyblue', fontSize: '50px'}}/></a>
                                <a href="https://github.com/junardvillahermosa"><GitHub sx={{ color: 'black', fontSize: '50px'}}/></a>
                                <a href="https://www.linkedin.com/in/junardvillahermosa/"><LinkedIn sx={{ color: 'blue', fontSize: '50px'}}/></a>
                </div>
                </Box>

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}