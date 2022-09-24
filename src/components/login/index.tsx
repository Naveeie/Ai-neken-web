import { connect } from 'react-redux';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import Container from "../../../shared/components/container";
import backImage from "../../../assets/backgroundImage3.jpg";
import Paragraph from "../../../shared/components/paragraph";
import Animation from "../../../shared/components/animation";
import Image from "../../../shared/components/image";
import micGif from "../../../assets/mic3.png";
import face from "../../../assets/face-scan.gif";
import Div from "../../../shared/components/div";
import Watch from "../../../shared/components/watch";
import { faceAuth } from "../../../shared/api/url-helper";

const Login = (props: any) => {
    const { command } = props;
    const [faceScan, setFaceScan] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (['open my account'].includes(command)) setFaceScan(true);
    }, [command])

    useEffect(() => {
        if (faceScan) {
            faceAuth({}).then((res) => {
                window.localStorage.setItem('emailId', res.data);
                navigate('/events')
                setFaceScan(false);
            }).catch((err) => {
                setFaceScan(false);
            })
        }
    }, [faceScan])

    return (
        <Container
            minHeight="100vh"
            bgImage={backImage}
            bgPosition="center"
            bgSize="cover"
        >
            <Container
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
            >
                <Paragraph
                    color="#66FCF1"
                    fontSize="100px"
                    fontWeight="700"
                    margin="100px 0px 0px 0px "
                    letterSpacing="3px"
                >
                    Ai-NEKEN
                </Paragraph>
                <Div color="#66FCF1" fontSize="25px" letterSpacing="5px">
                    <Watch />
                </Div>
                {faceScan ? (
                    <Image
                        src={face}
                        width="100px"
                        height="100px"
                        margin="30px"
                    ></Image>
                ) : (
                    <Animation
                        animationName="rubberBand"
                        animationDuration="2s"
                        animationIterationCount="10000"
                    >
                        <Image
                            src={micGif}
                            width="100px"
                            height="100px"
                            margin="30px"
                        ></Image>
                    </Animation>
                )}
                <Paragraph color="white" fontWeight="500" letterSpacing="2px">
                    Say&nbsp;
                    <span style={{ color: "#66FCF1", fontWeight: "600" }}>Jarvis</span>
                </Paragraph>
            </Container>
        </Container>
    );
};

const mapStateToProps = (state: any) => ({
    command: state.command.command,
});

export default connect(mapStateToProps, null)(Login);
