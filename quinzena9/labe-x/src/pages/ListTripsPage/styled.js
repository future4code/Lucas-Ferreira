import styled from "styled-components"

export const ContainerListTripPage = styled.div`
background-image: url('https://cdn.pixabay.com/photo/2020/09/10/03/02/mountains-5559099_960_720.png');
background-size: cover;
background-position: center;
max-width: 100vw;
min-height: 100vh;
background-color: #0c0c0c;
text-align: center;
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: center;
align-items: center;

`

export const ContainerButtons = styled.div`
margin: 15px 0px;
display: grid;
grid-template-columns: 150px 150px;
gap: 10px;

`

export const ButtonReturn = styled.button`
background-color: Transparent;
border: 1px solid gray;
box-shadow: 0 20px 20px -15px rgba(102, 51, 153, 1);
cursor: pointer;
color: white;
padding: 15px 10px;
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
:hover{
    background-color: rgba(213, 184, 255, 1);
}
:active{
    background-color: transparent;
}


`

export const ButtonRegister = styled.button`
background-color: rgba(102, 51, 153, 1);
border: 1px solid #0c0c0c;
box-shadow: 0 0 2em rgba(102, 51, 153, 1);
cursor: pointer;
color: white;
padding: 15px 10px;
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
export const ContainerListItem = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
width: 70%;
min-height: 100vh;
background-color: white;
box-shadow: 0 0 2em rgba(102, 51, 153, 1);
`

export const ListItem = styled.div`
background-color: white;
padding: 8px 0px;
width: 100%;
border-bottom: 1px solid gray;

`
export const P = styled.p`
text-align: left;
margin-left: 8px;
padding: 7px;
font-size: 20px;
color: rgba(102, 51, 153, 1);
`
export const H1 = styled.h1`
color: white;
margin: 40px 0px;
`
export const Message = styled.p`
color: white;
font-weight: bold;
`