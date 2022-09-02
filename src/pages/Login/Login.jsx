import {
    Container,
    Wrapper,
    Title,
    Form,
    Input,
    Button,
    Link
  } from "./Login.styles";

const Login = () => {
  return (
    <Container>
    <Wrapper>
      <Title>SIGN IN</Title>
      <Form>
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <Button>LOGIN</Button>
        <Link>DO YOU NOT REMEMBER THE PASSWORD?</Link>
        <Link>CREATE A NEW ACCOUNT</Link>
      </Form>
    </Wrapper>
  </Container>
  )
}

export default Login;