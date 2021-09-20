import styled from "styled-components";


export const ContainerHome = styled.div`
max-height: 100vh;
max-width: 100vw;

`


export const ContainerBackImage = styled.div`
background-image: url('https://cdn.pixabay.com/photo/2020/09/10/03/02/mountains-5559099_960_720.png');
background-size: cover;
background-position: center;
height: 80vh;
display: grid;
grid-template-columns: 1fr 1fr;
margin-bottom: 5px;

`

export const ButtonPublic = styled.button`
background-color: Transparent;
box-shadow: 0 20px 20px -15px rgba(102, 51, 153, 1);
border: none;
cursor: pointer;
color: white;
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
:hover{
    background-color: rgba(213, 184, 255, 1);
}
:active{
    background-color: transparent;
}


`

export const ButtonPrivate = styled.button`
background-color: rgba(102, 51, 153, 1);
border: 1px solid #0c0c0c;
box-shadow: 0 0 2em rgba(102, 51, 153, 1);
cursor: pointer;
color: white;
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
:hover{
    background-color: rgba(213, 184, 255, 1);
    border: 0.1rem solid rgba(213, 184, 255, 1);
}
:active{
    background-color: rgba(102, 51, 153, 1)
}


 `



