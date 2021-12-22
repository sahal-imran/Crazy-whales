import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {Button} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {experimentalStyled as styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Fade from 'react-reveal/Fade';

const Item = styled(Paper)(({theme}) => ({
    padding: theme.spacing(0),
    margin: theme.spacing(1),
    backgroundColor: "unset",
    background: "unset",
}));

function Collection() {
    return (
        <>
            <Container
                sx={{
                    backgroundColor: "black", minHeight: "80vh", py: 1, pb: {
                        xs: '1rem',
                        sm: '1rem',
                        overflow: 'hidden',
                    }, mt: -1, position: 'relative', zIndex: 111
                }}
                maxWidth="fluid"
            >
                <Container
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: 'column',
                        mt: {
                            xs: 0,
                            sm: 8,
                        }
                    }}
                    maxWidth="lg"
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                            flexWrap: 'wrap'
                            //   mx:3
                        }}
                        id="coll-up"
                        component="div"
                    >
                        <Fade cascade bottom>

                            <Typography
                                id="collection-heading"
                                variant="h2"
                                component="div"
                                gutterBottom
                                sx={{
                                    ml: {
                                        xs: '0',
                                        lg: '8px',
                                    },
                                    fontFamily: "'Cinzel Decorative', cursive",
                                    lineHeight: {
                                    xs: "43.14px",
                                        sm: "96px",
                                },
                                    fontWeight: "900",
                                    mb: 0,
                                    textAlign: 'center'
                                }}
                                className={'collection'}
                            >
                                THe Collection
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    width: "188px",
                                    mr: {
                                        xs: '0',
                                        lg: '8px',
                                    },
                                    height: "60px",
                                    background: "#88E9FC",
                                    borderRadius: "10px",
                                    fontFamily: "lato",
                                    fontSize: "18px",
                                    lineHeight: "30px",
                                    fontWeight: '600',
                                    color: "#041518",
                                    "&:hover": {
                                        background: "#88E9FC",
                                    },
                                }}
                                className={'check-it-out'}
                            >
                                Check it out!
                            </Button>
                        </Fade>
                    </Box>
                    <Box component="div" sx={{}}>

                        <Grid
                            sx={{justifyContent: "center", alignItems: "center", mt: 5}}
                            container
                            gap={0}
                            columns={{md: 3, sm: 2}}
                        >
                            <Fade cascade={true} delay={1} bottom>
                            <Grid  sx={{boxShadow: "none"}}>
                                <Item  sx={{boxShadow: "none"}} className="item">
                                    <img className={'shake'} id="whale-pic" src="/collection/collection1.png" alt=""/>
                                </Item>
                            </Grid>
                            <Grid sx={{boxShadow: "none"}}>
                                <Item sx={{boxShadow: "none"}} className="item">
                                    <img className={'shake'} id="whale-pic" src="/collection/collection2.png" alt=""/>
                                </Item>
                            </Grid>
                            <Grid sx={{boxShadow: "none"}}>
                                <Item sx={{boxShadow: "none"}} className="item">
                                    <img className={'shake'} id="whale-pic" src="/collection/collection3.png" alt=""/>
                                </Item>
                            </Grid>
                            <Grid sx={{boxShadow: "none"}}>
                                <Item sx={{boxShadow: "none"}} className="item">
                                    <img className={'shake'} id="whale-pic" src="/collection/collection4.png" alt=""/>
                                </Item>
                            </Grid>
                            <Grid sx={{boxShadow: "none"}}>
                                <Item sx={{boxShadow: "none"}} className="item">
                                    <img className={'shake'} id="whale-pic" src="/collection/collection5.png" alt=""/>
                                </Item>
                            </Grid>
                            <Grid sx={{boxShadow: "none"}}>
                                <Item sx={{boxShadow: "none"}} className="item">
                                    <img className={'shake'} id="whale-pic" src="/collection/collection6.png" alt=""/>
                                </Item>
                            </Grid>
                            </Fade>
                        </Grid>
                    </Box>
                </Container>
                <img id="group1" src="/Group1.png" alt="Corner"/>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginRight: '-3rem',
                    pt: '64px',
                }}>
                    <Box as={'img'} sx={{
                        width: {
                            xs: '103px',
                            md: '178px',
                            lg: "337px",
                        }
                    }} id="" src="/line1.png" alt="Corner"/>

                </Box>
            </Container>
        </>
    );
}

export default Collection;
