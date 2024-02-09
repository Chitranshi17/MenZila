import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import logo from '../assets/ManZila-Logo.png'

const About = () => {
  return (
    <div className="about">
      <Container className="topAbout mt-5 d-flex">
        <Box className="leftAb">
          <Grid container spacing={1}>
            <Grid item lg={6}>
              <Paper>
                <Box p={2}>
                  <Typography variant="h4">Heading</Typography>
                  <Typography variant="subtitle1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </Typography>
                  <Button> Save </Button>
                </Box>
              </Paper>
            </Grid>
            <Grid item lg={6}>
              <Paper>
                <Box p={2}>
                  <Typography variant="h4">Heading</Typography>
                  <Typography variant="subtitle1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </Typography>
                  <Button> Save </Button>
                </Box>
              </Paper>
            </Grid>
            <Grid item lg={6}>
              <Paper>
                <Box p={2}>
                  <Typography variant="h4">Heading</Typography>
                  <Typography variant="subtitle1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </Typography>
                  <Button> Save </Button>
                </Box>
              </Paper>
            </Grid>
            <Grid item lg={6}>
              <Paper>
                <Box p={2}>
                  <Typography variant="h4">Heading</Typography>
                  <Typography variant="subtitle1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </Typography>
                  <Button> Save </Button>
                </Box>
              </Paper>
            </Grid>
            <Grid item lg={6}>
              <Paper>
                <Box p={2}>
                  <Typography variant="h4">Heading</Typography>
                  <Typography variant="subtitle1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </Typography>
                  <Button> Save </Button>
                </Box>
              </Paper>
            </Grid>
            <Grid item lg={6}>
              <Paper>
                <Box p={2}>
                  <Typography variant="h4">Heading</Typography>
                  <Typography variant="subtitle1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </Typography>
                  <Button> Save </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <Box className="midAb">
          <div className="midContent">
            <div className="midlogo">
              <img src={logo} alt="" />
            </div>
            <h1 className="display-3 text-center">Menzila</h1>
            <p className="text-center fs-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odit
              veniam tenetur sint voluptatum distinctio. Ducimus recusandae
              officia ipsum ex voluptas repudiandae modi?
            </p>

          </div>
        </Box>
        <Box className="rightAb">
          <Grid container spacing={1}>
            <Grid item lg={6}>
              <Paper>
                <Box p={2}>
                  <Typography variant="h4">Heading</Typography>
                  <Typography variant="subtitle1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </Typography>
                  <Button> Save </Button>
                </Box>
              </Paper>
            </Grid>
            <Grid item lg={6}>
              <Paper>
                <Box p={2}>
                  <Typography variant="h4">Heading</Typography>
                  <Typography variant="subtitle1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </Typography>
                  <Button> Save </Button>
                </Box>
              </Paper>
            </Grid>
            <Grid item lg={6}>
              <Paper>
                <Box p={2}>
                  <Typography variant="h4">Heading</Typography>
                  <Typography variant="subtitle1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </Typography>
                  <Button> Save </Button>
                </Box>
              </Paper>
            </Grid>
            <Grid item lg={6}>
              <Paper>
                <Box p={2}>
                  <Typography variant="h4">Heading</Typography>
                  <Typography variant="subtitle1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </Typography>
                  <Button> Save </Button>
                </Box>
              </Paper>
            </Grid>
            <Grid item lg={6}>
              <Paper>
                <Box p={2}>
                  <Typography variant="h4">Heading</Typography>
                  <Typography variant="subtitle1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </Typography>
                  <Button> Save </Button>
                </Box>
              </Paper>
            </Grid>
            <Grid item lg={6}>
              <Paper>
                <Box p={2}>
                  <Typography variant="h4">Heading</Typography>
                  <Typography variant="subtitle1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </Typography>
                  <Button> Save </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container className="bottomAbout"></Container>
    </div>
  );
};

export default About;
