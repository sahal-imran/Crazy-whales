import React, {useEffect} from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {Button} from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CancelIcon from "@mui/icons-material/Cancel";
import {styled} from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import InputBase from "@mui/material/InputBase";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import heroImage from '../assets/hero.png';

import {useForm, Controller} from "react-hook-form";
import Image from 'next/image';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 750,
    background: "#FCFEFF",
    boxShadow: 24,
    borderRadius: "10px",
    p: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
};

const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
        color: "none",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "none",
        },
        "&:hover fieldset": {
            borderColor: "none",
        },
        "&.Mui-focused fieldset": {
            borderColor: "none",
        },
    },
});

function Hero() {

    const {control, handleSubmit, watch, clearErrors, setValue, getValues, formState: {errors}} = useForm({
        defaultValues: {
            gains: '500',
            nft: '1'
        }
    });

    const onSubmit = data => console.log(data);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const switchValues = () => {
        const userInputedValues = getValues();
        // console.log(userInputedValues)
        setValue('gains', userInputedValues.nft);
        setValue('nft', userInputedValues.gains);
    }

    return (
        <Container
            sx={{
                backgroundColor: "black",
                minHeight: "80vh",
                py: 6,
                position: "relative",
                overflow: 'hidden',
            }}
            maxWidth="fluid"
        >
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }} maxWidth="lg">
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        // flexDirection:'column'
                    }}
                    component="div"
                >
                    {/* WalletModelCode */}

                    <Modal
                        open={open}

                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >


                        <Box sx={style} id="model">
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                }}
                                component="div"
                            >
                                <CancelIcon
                                    onClick={handleClose}
                                    sx={{
                                        color: "rgba(4, 19, 22, 0.5)",
                                        fontSize: "30px",
                                        cursor: "pointer",
                                    }}
                                />
                            </Box>
                            <Typography
                                variant="h5"
                                component="div"
                                gutterBottom
                                sx={{
                                    fontFamily: "'Cinzel Decorative', cursive",
                                    lineHeight: "42px",
                                    fontWeight: "900",
                                    mb: 0,
                                    textAlign: "center",
                                    // lineHeight: "42px",
                                    fontSize: {
                                        xs: '36px',
                                        md: '45px',
                                    },
                                    color: "#88E9FC",
                                }}
                            >
                                3000
                            </Typography>
                            <Typography
                                variant="body1"
                                component="div"
                                gutterBottom
                                sx={{
                                    fontFamily: "lato",
                                    lineHeight: "33.6px",
                                    fontWeight: "500",
                                    mb: 0,
                                    textAlign: "center",
                                    fontSize: {
                                        xs: '22px',
                                        md: '28px',
                                    },
                                    color: "#041316",
                                    my: 4,
                                }}
                            >
                                Crazy Whales are still available for adoption
                            </Typography>
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                }}
                                component="form"
                                onSubmit={handleSubmit(onSubmit)}
                            >

                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: "100%",
                                        background: "rgba(4, 19, 22, 0.05)",
                                        borderRadius: "20px",
                                        height: "61px",
                                        '& input[type=number]' : {
                                           ' -moz-appearance': 'textfield !important',
                                        },
                                        "& input::-webkit-outer-spin-button": {
                                            '-webkit-appearance': 'none !important',
                                            margin: 0
                                        },
                                        "input::-webkit-inner-spin-button" : {
                                            '-webkit-appearance': 'none !important',
                                            margin: 0
                                        }
                                     }}
                                    component="div"
                                >
                                    <Controller
                                        rules={{
                                            required: 'Specify how many NFTs you want',
                                            onChange: (event) => {
                                                setValue('gains', event.target.value * 500);
                                            },
                                            validate: {
                                                isInteger: (value => Number.isInteger(+value) || "Decimal numbers not supported"),
                                                isNegative: (value => value > 0 || "Negative numbers not supported"),
                                            }
                                        }}
                                        name="nft"
                                        control={control}
                                        render={({field}) =>

                                            <InputBase
                                                sx={{ml: 1, flex: 1, p: 1, width: "80%"}}
                                                placeholder=""
                                                type={'number'}
                                                // inputProps={{"aria-label": "search google maps"}}
                                                {...field}
                                            />
                                        }
                                    />

                                    <Button
                                        sx={{
                                            fontSize: {
                                                xs: '17px',
                                                md: "24px",
                                            },
                                            '&:hover': {
                                                background: 'transparent',
                                            },
                                            lineHeight: "29px",
                                            fontFamily: "lato",
                                            fontWeight: 700,
                                            color: "#041316",
                                            width: "20%",
                                            borderLeft: "1px solid #1C292C33",
                                            borderRadius: "0px",
                                            mr: 1,
                                        }}
                                        disableRipple
                                        variant="text"
                                        type={'button'}
                                    >
                                        NFT
                                    </Button>
                                </Box>
                                {
                                    errors.nft && (

                                        <Box
                                            sx={{
                                                width: '100%',
                                                color: 'red',
                                                mt: '4px',
                                                ml: '2rem',
                                            }}
                                        >
                                            {errors.nft.message}
                                        </Box>
                                    )
                                }

                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        width: "100%",
                                    }}
                                    component="div"
                                >
                                    <Typography
                                        variant="body1"
                                        component="div"
                                        gutterBottom
                                        sx={{
                                            fontFamily: "lato",
                                            lineHeight: "21.6px",
                                            fontWeight: "700",
                                            mb: 0,
                                            textAlign: "center",
                                            fontSize: {
                                                xs: '15px',
                                                md: '18px',
                                            },
                                            color: "#041316",
                                            my: 4,
                                        }}
                                    >
                                        1 Crazy Whale = 500 GAINS
                                    </Typography>

                                    {/*<ImportExportIcon*/}
                                    {/*    onClick={switchValues}*/}
                                    {/*    sx={{*/}
                                    {/*        background: "#88E9FC",*/}
                                    {/*        borderRadius: "10px",*/}
                                    {/*        color: "black",*/}
                                    {/*        width: "40px",*/}
                                    {/*        height: "40px",*/}
                                    {/*        cursor: "pointer",*/}
                                    {/*    }}*/}
                                    {/*/>*/}
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: "100%",
                                        background: "rgba(4, 19, 22, 0.05)",
                                        borderRadius: "20px",
                                        height: "61px",
                                    }}
                                    component="div"
                                >
                                    {/* <CssTextField sx={{width:'80%',mr:2,outline:'none',border:'none',}} label="You Send" id="custom-css-outlined-input" /> */}
                                    <Controller
                                        rules={{
                                            required: '',
                                            onChange: (event) => {
                                                setValue('nft', event.target.value / 500);
                                            },
                                            min: {
                                                value: 500,
                                                message: "Min. purchase is 500 GAINS",
                                            },
                                            // validate: (value => value % 500 === 0 || "Invalid Input, Must be multiple of 500")
                                        }}
                                        name="gains"
                                        control={control}
                                        render={({field}) => <InputBase
                                            disabled
                                            type={'number'}
                                            sx={{ml: 1, flex: 1, p: 1, width: "80%"}}
                                            placeholder=""
                                            {...field}
                                            // inputProps={{"aria-label": "search google maps"}}
                                        />}
                                    />


                                    <Button
                                        sx={{
                                            fontSize: {
                                                xs: '17px',
                                                md: "24px",
                                            },
                                            '&:hover': {
                                                background: 'transparent',
                                            },
                                            lineHeight: "29px",
                                            fontFamily: "lato",
                                            fontWeight: 700,
                                            color: "#041316",
                                            width: "20%",
                                            borderLeft: "1px solid #1C292C33",
                                            borderRadius: "0px",
                                            mr: 1,
                                        }}
                                        type={'button'}
                                        variant="text"
                                        disableRipple

                                    >
                                        GAINS
                                    </Button>
                                </Box>

                                {
                                    errors.gains && (

                                        <Box sx={{
                                            width: '100%',
                                            color: 'red',
                                            mt: '4px',
                                            ml: '2rem',
                                        }}>
                                            {errors.gains.message}
                                        </Box>
                                    )
                                }

                                <Button
                                    sx={{
                                        mt: 4,
                                        background: "#88E9FC",
                                        width: "100%",
                                        borderRadius: "20px",
                                        "&:hover": {
                                            background: "#88E9FC",
                                        },
                                        fontWeight: 500,
                                        fontSize: {
                                            xs: '20px',
                                            md: '24px'
                                        },
                                        height: {
                                            xs: '61px',
                                            md: '71px',
                                        },
                                        color: '#041518',
                                        lineHeight: '30px'
                                    }}
                                    variant="contained"
                                    type={'submit'}
                                    disabled={errors.nft}
                                >
                                    claim
                                </Button>
                                <Button
                                    sx={{
                                        '&:hover': {
                                            background: '#fff',
                                        },
                                        my: '1.5rem',
                                        borderBottom: '1px solid #000',
                                        py: '1rem',
                                        borderRadius: 0,
                                        px: '0 !important',
                                        width: "240px",
                                        height: '15px',
                                        fontWeight: 400,
                                        fontSize: {
                                            xs: '15px',
                                            md: '15px',
                                        },
                                        color: '#041518',
                                        lineHeight: '30px',
                                    }}
                                    variant="text"
                                    type={'button'}
                                    disableRipple
                                >
                                    buy gains on QuickSwap
                                </Button>
                            </Box>
                        </Box>


                    </Modal>

                    {/* WalletModelCode */}

                    <Button
                        className={'connect-button'}
                        sx={{
                            width: "220px",
                            height: "60px",
                            color: "#88E9FC",
                            borderRadius: "10px",
                            border: "2px solid #88E9FC",
                            fontFamily: "Lato",
                            fontWeight: 500,
                            lineHeight: "30px",
                            fontSize: "18px",
                            position: 'relative',
                            zIndex: 999,
                            mr: {
                                xs: '8px',
                                sm: 0,
                                md: 0,
                                lg: '8px',

                            },
                            "&:hover": {
                                border: "2px solid #88E9FC",
                            },
                        }}
                        variant="outlined"

                    >
                        Connect Wallet
                    </Button>
                </Box>


                <Box
                    // id="hero-down"
                    sx={{
                        // width: "100%",
                        display: "grid",
                        gridTemplateColumns: {
                            xs: '1fr',
                            md: "1fr 1fr",
                        },
                        gridGap: '1rem',
                        placeItems: 'center',
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: 8,
                    }}
                >
                    <Box
                        // id="hero-left"
                        sx={{
                            order: {
                                xs: 5,
                                md: 0,
                            },
                            width: {
                                xs: "90%",
                                sm: "100%",
                            },
                            // flexShrink:0,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            px: {
                                md: 2,
                                sm: 3,
                            },
                        }}
                        // component="div"
                    >
                        <Fade bottom cascade>
                            <Typography
                                id="hero-heading"
                                variant="h1"
                                component="div"
                                gutterBottom
                                sx={{
                                    fontFamily: "'Cinzel Decorative', cursive",
                                    fontSize: {
                                        md: "120px",
                                        xs: "80px",
                                    },
                                    fontWeight: 700,
                                    lineHeight: {
                                        xs: "145.84px",
                                        lg: "170px"
                                    },
                                    mt: '3rem',
                                    textTransform: "uppercase",
                                    textAlign: "center",
                                    width: {
                                        lg: "588px",
                                        sm: "auto",
                                    },
                                    mb: 1,
                                }}
                                className={'crazy-whale'}
                            >
                                Crazy{" "}
                                <Box
                                    component="span"
                                    sx={{
                                        fontFamily: "'Cinzel Decorative', cursive",
                                        fontWeight: 400,
                                    }}
                                >
                                    Whales
                                </Box>
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "lato",
                                    fontWeight: "500",
                                    fontSize: "17px",
                                    lineHeight: "30px",
                                    color: "rgba(255, 255, 255, 0.9)",
                                    textAlign: "center",
                                }}
                                variant="body1"
                                gutterBottom
                                className={'crazy-whale-text'}
                            >
                                Crazy Whales is a collection of 3,000 randomly generated NFTs on the Polygon blockchain.
                                Our whales are wet, cute, fun, and sometimes grumpy. Crazy Whales are known to have
                                different rarities, surf on beautiful waves, eat salty plankton & donate a portion of
                                their royalties to non-profit organizations that protect oceans.
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    width: {
                                        sm: "372px",
                                        xm: "90%",
                                    },
                                    height: "90px",
                                    background: "#88E9FC",
                                    borderRadius: "10px",
                                    color: "black",
                                    fontSize: "24px",
                                    lineHeight: "30px",
                                    fontWeight: 600,
                                    mt: 5,
                                    "&:hover": {
                                        background: "#88E9FC",
                                    },
                                }}
                                onClick={handleOpen}
                                className={'claim-my-whale'}
                            >
                                Claim my Crazy Whale
                            </Button>
                        </Fade>
                    </Box>
                    <Box
                        sx={{
                            width: {
                                xs: "90%",
                                sm: "100%",
                            },
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            // px: 2,

                        }}
                        // id="hero-right"
                        // component="div"
                    >
                        <Flip style={{width: '100%'}} left>
                            <Image id="WhaleWallpaper" src={heroImage}
                                   alt="WhaleWallpaper"/>
                        </Flip>
                        {/*<Typography*/}
                        {/*    sx={{*/}
                        {/*        fontFamily: "lato",*/}
                        {/*        fontWeight: "600",*/}
                        {/*        fontSize: "18px",*/}
                        {/*        lineHeight: "30px",*/}
                        {/*        color: "rgba(255, 255, 255, 0.9)",*/}
                        {/*        textAlign: "center",*/}
                        {/*        textTransform: "uppercase",*/}
                        {/*        my: 4,*/}
                        {/*    }}*/}
                        {/*    variant="body1"*/}
                        {/*    gutterBottom*/}
                        {/*>*/}
                        {/*    Powered by*/}
                        {/*</Typography>*/}
                        {/*<Box*/}
                        {/*    sx={{*/}
                        {/*        display: "grid",*/}
                        {/*        gridTemplateColumns: 'auto auto',*/}
                        {/*        justifyContent: "center",*/}
                        {/*        alignItems: "center",*/}
                        {/*        flexWrap: "wrap",*/}
                        {/*        gridGap: '1rem',*/}
                        {/*    }}*/}
                        {/*    component="div"*/}
                        {/*>*/}
                        {/*    <img id="poweredBy1" src="/polygon.png" alt=""/>*/}
                        {/*    /!*<img id="poweredBy2" src="/poweredBy2.png" alt=""/>*!/*/}
                        {/*    <img id="poweredBy3" src="/poweredBy3.png" alt=""/>*/}
                        {/*</Box>*/}
                    </Box>
                </Box>
            </Container>
            <Box sx={{
                left: {
                    lg: -100,
                }
            }} component={'img'} id="left" src="/left.png" alt="Corner"/>
            <Box component={'img'} id="right" src="/right1.png" alt="Corner"/>
        </Container>
    );
}

export default Hero;
