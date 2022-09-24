import Container from "../../shared/components/container";
import backImage from "../../assets/backgroundImage3.jpg";
import Table from "../../shared/components/table";
import Paragraph from "../../shared/components/paragraph";

const Events = () => {
  const data = [
    { Name: "pranesh", Age: 21, Events: "none" },
    { Name: "pranesh", Age: 21, Events: "none" },
    { Name: "pranesh", Age: 21, Events: "none" },
    { Name: "pranesh", Age: 21, Events: "none" },
    { Name: "pranesh", Age: 21, Events: "none" },
  ];
  return (
    <Container
      bgImage={backImage}
      bgPosition="center"
      bgSize="cover"
      minHeight="100vh"
    >
      <Container
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        color="white"
        width="100%"
      >
        <Paragraph
          color="#66FCF1"
          letterSpacing="1px"
          fontSize="40px"
          fontWeight="500"
          margin="30px"
        >
          Ai-Neken
        </Paragraph>
        <Table data={data}></Table>
      </Container>
    </Container>
  );
};

export default Events;
