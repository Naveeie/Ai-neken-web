import error from "../../assets/error.jpg";
import Container from "../../shared/components/container";

const Error = () => {
  return (
    <Container
      bgImage={error}
      bgPosition="center"
      bgSize="cover"
      minHeight="100vh"
    ></Container>
  );
};
export default Error;
