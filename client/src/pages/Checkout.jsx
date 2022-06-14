import React from 'react';
import styled from 'styled-components';
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";

const Container = styled.div`
`
const OuterWrapper = styled.div`
        margin-top: 20px;
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
`

const Wrapper = styled.div`
      position: relative;
      padding: 20px;
      width: 47%;
      height: 67%;
      background-color: white;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 40px;
`

const Title = styled.h1`
      margin-top: 10px ;
      font-size: 24px;
      color: #605f5f;
      font-family: "Roboto Regular", sans-serif;
      font-weight: 600;
`
const Hr = styled.hr`
      margin: 10px 0 25px 0;
      justify-content: center;
`

const Label = styled.label`
      margin-left: 25px;
      color: #504f4f;
      font-family: "Roboto Bold", sans-serif;
`

const Form = styled.form`
      width: 90%;
      position: relative;
      display: flex;
      flex-direction: column;
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

const Dropdown = styled.select`
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
      width: 40%;
      border: none;
      padding: 15px 5px;
      background-color: teal;
      color: white;
      cursor: pointer;
      margin-top: 50px;
      margin-bottom: 10px;
      border-radius: 55px;
      font-weight: 700;
      font-size: 24px;
`
const RadioLabel = styled.label`
      padding: 10px;
      display: block;
`
const RadioInput = styled.input`
      margin-right: 20px;
`
const RadioGroup = styled.div`
margin-bottom: 30px;
`

const Checkout = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <OuterWrapper>
                <Wrapper>
                    <Title>Address Details</Title>
                    <Form>
                        <Hr/>
                        <Label>First Name*</Label>
                        <Input placeholder="John"></Input>
                        <Label>Last Name*</Label>
                        <Input placeholder="Doe"></Input>
                        <Label>Mobile phone number*</Label>
                        <Input placeholder="0742571886"></Input>
                        <Label>Delivery Address*</Label>
                        <Input placeholder="Street Name / Building / Apartment No / Floor "></Input>
                        <Label>State/Region*</Label>
                        <Dropdown>
                            <option value = "" disabled selected hidden > select state/region</option>
                            <option value = "weed">some</option>
                            <option value = "weed2">dummy</option>
                            <option value = "weed3">options</option>
                        </Dropdown>
                        <Label>City*</Label>
                        <Dropdown>
                            <option value = "" disabled selected hidden > select city</option>
                            <option value = "weed">other</option>
                            <option value = "weed2">dummy</option>
                            <option value = "weed3">options</option>
                        </Dropdown>
                        <Action>
                            <Button>SAVE AND CONTINUE</Button>
                        </Action>
                    </Form>
                    <Title>Payment Method</Title>
                       <Form>
                        <Hr/>
                           <Label>How do you want to pay for your order?</Label>
                           <RadioGroup>
                               <RadioLabel for="bank"><RadioInput name="payment" type="radio" id="bank"/>Bank</RadioLabel>
                               <RadioLabel for="mpesa"><RadioInput name= "payment" type="radio" id="mpesa"/>Mpesa</RadioLabel>
                           </RadioGroup>
                           <Label>Name on the card*</Label>
                        <Input placeholder="John Doe"></Input>
                        <Label>Card number*</Label>
                        <Input placeholder="0000 0000 0000 0000"></Input>
                        <Label>Expiry month*</Label>
                        <Input placeholder="MM"></Input>
                           <Label>Expiry year*</Label>
                           <Input placeholder="YY"></Input>
                        <Label>CVC*</Label>
                           <Input placeholder="000"></Input>
                        <Action>
                            <Button>CONFIRM ORDER</Button>
                        </Action>
                    </Form>
                </Wrapper>
            </OuterWrapper>
        </Container>
    );
}

export default Checkout;