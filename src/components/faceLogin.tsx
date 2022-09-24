import Container from "../../shared/components/container";
import backImage from "../../assets/backgroundImage3.jpg";
import Paragraph from "../../shared/components/paragraph";
import Image from "../../shared/components/image";
import faceScan from "../../assets/face-scan.gif";

function Frontpage() {
  return (
    <>
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
            <Paragraph>
              <Image
                src={faceScan}
                width="150px"
                height="150px"
                margin="10px"
              ></Image>
            </Paragraph>
        </Container>
      </Container>
    </>
  );
}

export default Frontpage;
