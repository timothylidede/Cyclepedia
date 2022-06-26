import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer} from 'react-toastify/dist/react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const [phone_number, setPhonenumber] = useState("");
    const [cartItems, setCartItems] = useState([]);
    const [productDetails, setProductDetails] = useState([]);
    const [amount, setAmount] = useState("");

    let navigate = useNavigate();
    
  useEffect(() => {
    async function getcartItems() {
      axios
        .get(`http://localhost:5000/api/user/cartinfo`, {
          headers: {
            Authorization: "Bearer " + localStorage.authToken,
          },
        })
        .then((res) => {
          if (res.data.error) {
            alert(res.data.error);
          } else {
            setCartItems(res.data.cart);
            setProductDetails(res.data.productDetails);
          }
        });
    }
    getcartItems();
  }, []);

    const getSubtotal = (productDetails, cartItems) => {
        let subtotal = 0;
    
        for (let i = 0; i < productDetails.length; i++) {
          const cost = cartItems[i].quantity * productDetails[i].price;
          subtotal += cost;
        }
        return subtotal;
      };

    const subtotal = getSubtotal(productDetails, cartItems);
    const deliveryfee = 500000;
    const discount = 100000;

    const lipanampesa = async (e) => {
    e.preventDefault();

    const config = {
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.authToken}`,
        },
    };
    setAmount(subtotal + deliveryfee - discount);

    try {
        const { data } = await axios.post(
            "http://localhost:5000/api/payment/lipanampesa", 
            {
                amount,
                phone_number,
            },
            config
        );
        console.log(data);

        toast.success('Order placed!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        navigate("/");
        

    } catch (error) {
        console.log(error.response.data);
    }

    

    }

    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <OuterWrapper>
                <Wrapper>
                    <Title>Address Details</Title>
                    <Form onSubmit={lipanampesa}>
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
                            <option value = "" disabled defaultValue={""} hidden > select state/region</option>
                            <option value = "weed">some</option>
                            <option value = "weed2">dummy</option>
                            <option value = "weed3">options</option>
                        </Dropdown>
                        <Label>City*</Label>
                        <Dropdown>
                            <option value = "" disabled defaultValue={""} hidden > select city</option>
                            <option value = "weed">other</option>
                            <option value = "weed2">dummy</option>
                            <option value = "weed3">options</option>
                        </Dropdown>
                        <Label>Mobile number for payment</Label>
                        <Input 
                        placeholder="2547xxxxxxxx" 
                        name="number"
                        id="phonenumber"
                        value={phone_number}
                        onChange={(e) => setPhonenumber(e.target.value)}
                        ></Input>
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