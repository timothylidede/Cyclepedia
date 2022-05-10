import styled from "styled-components";
import React from "react";

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
    return (
        <Container>
            <p>Super Deal! | Free Shipping on all Orders! | 20% Discount on orders over KES 250,000!</p>
        </Container>
    );
}

export default Announcement;