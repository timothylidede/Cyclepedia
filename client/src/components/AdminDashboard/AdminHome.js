import React, {useEffect, useState} from "react";
import axios from "axios";
import { AdminHomeStyle, ModuleSection } from "./admin.styles";
import SideBar from "./SideBar";
import Users from "./Users";
import styled from "styled-components";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useAxiosGet } from './Hooks/axioshooks';
import { white } from '@mui/material/colors';
import {DateTime} from "luxon";
import { Chart ,Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Summary = styled.div`
  height: 15vh;
  display: flex;
  margin-top: 20px;
`;
const LineGraph = styled.div`
  width: 98vh;
  border-radius: 20px;
  margin-left: 10px;
  box-shadow: 1.6px 3.2px 3.2px hsl(0deg 0% 0% / 0.45);
  background-color: rgb(255, 255, 255);
`;
const SummaryAnalytic = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50vh;
  height: 10vh;
  margin: 0 30px 0 10px;
  border-radius: 20px;
  box-shadow: 1.6px 3.2px 3.2px hsl(0deg 0% 0% / 0.45);
  background-color: rgb(255, 255, 255);
`;
const IconBackground = styled.div`
  width: 6vh;
  height: 6vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  position: absolute;
  margin-left: 10px;
`;
const H4Text = styled.h4`
 color: grey;
 padding-left: 100px;
`;
const H3Text = styled.h3`
  padding-left: 100px;
  font-weight: 900;
`;

const CenterVertical = styled.div`

`;
export default function AdminHome({ content }) {

  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [payments, setPayments] = useState([]);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }


  useEffect(() => {
    async function getproducts() {
      axios
        .get(` http://localhost:5000/api/products/allproducts`)
        .then((res) => {
          if (res.data.error) {
            alert(res.data.error);
          } else {
            setProducts(res.data);
          }
        });
    }
    async function getorders() {
      axios
        .get(` http://localhost:5000/api/admin/allorders`)
        .then((res) => {
          if (res.data.error) {
            alert(res.data.error);
          } else {
            setOrders(res.data);
          }
        });
    }
    async function getpayments() {
      axios
        .get(` http://localhost:5000/api/admin/allpayments`)
        .then((res) => {
          if (res.data.error) {
            alert(res.data.error);
          } else {
            setPayments(res.data);
          }
        });
    }
    getproducts();
    getorders();
    getpayments();
  }, []);

  let total = 0;
  for(let x = 0; x < payments.length; x++){
    const payment = parseFloat(payments[x].amount)
    total += payment;
  }

  let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for(let y=0;y < orders.length; y++){
    const month = parseInt(DateTime.fromISO(orders[y].createdAt).toFormat('M'));
    data[month]++;
  }

  const state = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June' , 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Orders',
        backgroundColor: 'rgb(230,81,36)',
        borderColor: 'rgb(230,81,36)',
        borderWidth: 3,
        data: data
      }
    ]
  };

  return (
    <AdminHomeStyle>
      <SideBar />
      <ModuleSection>
        <div className="module_heading">
          <h2>Main Dashboard</h2>
          <p>Welcome, interact with your app analytics here </p>
        </div>
        <div className="module_container">{content}
        <Summary>
          <SummaryAnalytic>
            <IconBackground style={{ background: "#fc8f1e", boxShadow: "2.4px 4.8px 4.8px hsl(31deg 97% 55% / 0.43)" }}> <CurrencyExchangeIcon  sx={{color:"white"}}/></IconBackground>
            <CenterVertical>
            <H4Text>Total Sales</H4Text>
            <H3Text>Ksh {numberWithCommas(total)}</H3Text>
            </CenterVertical>
          </SummaryAnalytic>
          <SummaryAnalytic>
          <IconBackground style={{ background: "#01b511", boxShadow: "2.4px 4.8px 4.8px hsl(125deg 99% 36% / 0.43)"  }}><ShoppingCartIcon  sx={{color:"white"}}/></IconBackground>
          <CenterVertical>
          <H4Text>Total Orders</H4Text>
          <H3Text>{orders.length}</H3Text>
          </CenterVertical>
          </SummaryAnalytic>
          <SummaryAnalytic>
          <IconBackground style={{ background: "#2f68ed", boxShadow: "2.4px 4.8px 4.8px hsl(222deg 84% 56% / 0.43)"  }}><ShoppingBasketIcon  sx={{color:"white"}}/></IconBackground>
          <CenterVertical>
          <H4Text>Total Products</H4Text>
          <H3Text>{products.length}</H3Text>
          </CenterVertical>
          </SummaryAnalytic>
        </Summary>
        <LineGraph>
          <Line
            data={state}
            options={{
              title:{
                display:true,
                text:'Number of orders per month',
                fontSize: 20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
        </LineGraph>
        </div>
      </ModuleSection>
    </AdminHomeStyle>
  );
}
