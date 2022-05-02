import styled from 'styled-components';

const Container = styled.div`
width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: coral;
`

const Wrapper = styled.div`
padding: 20px;
  width: 30%;
  background-color: white;

`
const Title = styled.h1`
font-size: 24px;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`

const Button = styled.button`
width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 30px;
  margin-bottom: 10px;
`

const Link = styled.a`
margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="example@gmail.com"></Input>
                    <Input placeholder="password"></Input>
                    <Button>SIGN IN</Button>
                    <Link>Don't have an account? <b>Create Account</b></Link>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default Login;