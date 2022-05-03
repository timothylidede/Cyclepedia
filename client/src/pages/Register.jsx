import styled from 'styled-components';
import bg from '../assets/Registrationbg.png';
import logo from "../assets/logo.png";

const Container = styled.div`
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-image:url(${bg});
      background-size: cover;
`

const Image = styled.img`
      position: absolute;
      top: 0;
      left: 0;
      width: 10%;
`

const Wrapper = styled.div`
      position: relative;
      padding: 20px;
      width: 35%;
      height: 85%;
      background-color: white;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
`

const Title = styled.h1`
      font-size: 35px;
      color: #7a7a7a;
      font-family: "Roboto Regular", sans-serif;
      font-weight: 600;
`

const Hr = styled.hr`
      margin: 10px 0px 25px 0px;
      justify-content: center;
`

const Form = styled.form`
      width: 90%;
      position: relative;
      display: flex;
      flex-direction: column;
`

const Label = styled.label`
      margin-left: 25px;
      color: #504f4f;
      font-family: "Roboto Bold", sans-serif;
`

const Input = styled.input`
      flex: 1;
      min-width: 40%;
      margin: 10px 0 20px 0;
      padding: 15px 15px 15px 40px;
      border-radius: 5px;
      border: 1.5px solid lightgray;
      background-color: #efecec;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 17px;
`

const Action = styled.div`
      flex-direction: column; 
      display: flex;
      width: 100%;
      align-items: center;
`

const Button = styled.button`
      width: 30%;
      border: none;
      padding: 10px 5px;
      background-color: teal;
      color: white;
      cursor: pointer;
      margin-top: 25px;
      margin-bottom: 10px;
      border-radius: 55px;
      font-weight: 700;
      font-size: 24px;
`

const Message = styled.div`
      font-family: "Roboto Thin",sans-serif;
      color: #494949;
`

const Link = styled.a`
      margin: 5px 0;
      font-size: 15px;
      text-decoration: underline;
      cursor: pointer;
      color: #fd7b48;
      font-family: "Roboto Thin", sans-serif;
`

const Register = () => {
    return (
        <Container>
            <Image src={logo}/>
            <Wrapper>
                <Title>Create Account</Title>
                <Form>
                    <Hr/>
                    <Label>First Name*</Label>
                    <Input placeholder="first name"></Input>
                    <Label>Last Name*</Label>
                    <Input placeholder="last name"></Input>
                    <Label>Phone Number*</Label>
                    <Input placeholder="+254 xxx xxxxxx"></Input>
                    <Label>Email*</Label>
                    <Input placeholder="example@gmail.com"></Input>
                    <Label>Password*</Label>
                    <Input placeholder="password"></Input>
                    <Label>Confirm Password*</Label>
                    <Input placeholder="confirm password"></Input>
                    <Action>
                        <Button>CREATE</Button>
                        <Message>Already have an account? <Link><b>Log In</b></Link></Message>
                    </Action>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default Register;
