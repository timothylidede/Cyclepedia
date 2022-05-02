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
  margin: 20px 10px 0 0;
  padding: 10px;
`

const Agreement = styled.span`
font-size: 12px;
  margin: 20px 0px;
`

const Button = styled.button`
width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`

const Link = styled.a``

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE ACCOUNT</Title>
                <Form>
                    <Input placeholder="first name"></Input>
                    <Input placeholder="last name"></Input>
                    <Input placeholder="+254 xxx xxxxxx"></Input>
                    <Input placeholder="example@gmail.com"></Input>
                    <Input placeholder="password"></Input>
                    <Input placeholder="confirm password"></Input>
                    <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                    <Link>Already have an account? <b>Log In</b></Link>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default Register;