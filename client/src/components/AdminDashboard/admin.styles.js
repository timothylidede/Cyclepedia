import styled from 'styled-components';


export const AdminHomeStyle = styled.section`

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 1000px;
    font-family: 'Open Sans', sans-serif;

    --dark-bg : #1e3f66;
    --light-dark-bg: #528aae;
    --light-bg : #bcd2e8;
    /* background-color: var(--light-dark-bg); */
    background-color: rgb(247, 247, 247);
    overflow-x: hidden;

`;

export const AdminSideBarStyle = styled.section`
    display: flex;
    flex-direction: column;
    width: 17.5%;
    border-right: 4px solid var(--dark-bg);
    /* background-color: var(--light-bg); */
    background-color: rgba(255, 255, 255, 0.3);

    .logo_div{
        width: 100%;
        height: 100px;

        img { 
            object-fit: contain;
            width: 80%;
            height: 100%;
            margin-left: 10%;

        }
    }
    
    .button_div {
        width: 100%;
        height: 100px;
        background: ;
        display: flex;
        justify-content: center;
        align-items: center;

    }

`;

export const SideBarLink = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 12px 24px 12px 36px;
    margin: 12px 0 0 0;
    height: 48px;
    border: none; 
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    font-weight: normal;
    
    p { font-size: 16px;}

    svg, p {
        color: var(--light-dark-bg);

    }
    &.active, &:hover {
        border-left: 4px solid var(--dark-bg) ;

        svg, p {
            color: var(--dark-bg);
        }
    }
`;

export const Button = styled.button`
    border: none;
    outline: none;
    width: 180px;
    height: 42px;
    transition: all 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    font-size: 16px;

    :hover {
        transform: scale(1.02);
        color: var(--dark-bg);
        cursor: pointer;
    }
`;

export const ModuleSection = styled.section`
width: 82.5%;
height: 100%;
display: flex;
flex-direction: column;
padding: 20px 20px;

.module_heading {

    width: 100%;
    height: 60px;
    margin: 0 0 20px 0;
    * {
        margin: 5px 0;
    }
    h4 {}

    p {}


}

.module_container {
    width: 100%;
    height: 100%;
    padding: 20px 0;

}

.table_wrapper {
    width: 100%;
    height: 800px;
    overflow-y: scroll;
}
`;