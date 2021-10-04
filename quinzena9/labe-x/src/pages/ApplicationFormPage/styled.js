import styled from "styled-components"

export const ContainerApplicationFormPage = styled.div`
background-color: #c0c0c0;
background-size: cover;
background-position: center;
max-width: 100vw;
min-height: 100vh;
background-color: #0c0c0c;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;

`
export const H1 = styled.h1`
color: white;
margin: 40px 0px;
`

export const ContainerForm = styled.form`
width: 100%;
height: 600px;
display: grid;
grid-template-columns: 100%;
align-items: center;
justify-content: center;
text-align: center;
color: rgba(165, 55, 253, 1);

`

export const Select = styled.select`
width: 60%;
margin: 0 auto;
border-radius: 4px;
border: 1px solid white;
background-color:rgba(102, 51, 153, 1); 
height: 50px;
color: lightgrey;
padding-left: 10px;
cursor: pointer;
box-shadow: 0 0 1em rgba(102, 51, 153, 1);
font-weight: bold;

`
export const Input = styled.input`
width: 60%;
margin: 0 auto;
border-radius: 4px;
border: 1px solid white;
background-color:rgba(102, 51, 153, 1); 
height: 50px;
color: white;
padding-left: 10px;
box-shadow: 0 0 1em rgba(102, 51, 153, 1);
::placeholder{
  color: lightgrey;
  opacity: 1;
}
`
export const ContainerButton = styled.div`
margin: 15px 0px;
display: grid;
grid-template-columns: 150px 150px;
gap: 10px;
justify-content: center;

`

export const ButtonBack = styled.button`
background-color: white;
border: 1px solid gray;
color:  rgba(165, 55, 253, 1);
box-shadow: 0 0 1em rgba(102, 51, 153, 1);
cursor: pointer;
padding: 15px 10px;
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
:hover{
    background-color: transparent;
    color: white;
}
:active{
    background-color: white;
    color: black;
}

`

export const ButtonSubmit = styled.button`
background-color: rgba(3, 201, 169, 1);
border: 1px solid #0c0c0c;
box-shadow: 0 0 1em rgba(102, 51, 153, 1);
cursor: pointer;
text-align: center;
padding: 15px 10px;
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
:hover{
    background-color: rgba(102, 51, 153, 1);
    border: 0.1rem solid rgba(102, 51, 153, 1);
    color: white;
}
:active{
    background-color:  rgba(3, 201, 169, 1);
}
`
