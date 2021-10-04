import styled from "styled-components"

export const ContainerCreateTripPage = styled.div`
background-color: rgba(232, 236, 241, 1);
background-size: cover;
background-position: center;
max-width: 100vw;
min-height: 100vh;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const ContainerForm = styled.form`
width: 100%;
height: 90vh;
padding-bottom: 5px;
display: grid;
align-items: center;
color: black;

`
export const Select = styled.select`
width: 60%;
margin: 0 auto;
border-radius: 4px;
border: 1px solid white;
background-color:rgba(102, 51, 153, 1); 
height: 50px;
color: white;
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
  color: white;
  opacity: 1;
}
`
export const ContainerButton = styled.div`
margin-bottom: 60px;
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
    background-color: rgba(165, 55, 253, 1);
    color: white;
}
:active{
    background-color: #0c0c0c;  
}

`

export const ButtonSubmit = styled.button`
background-color: rgba(3, 201, 169, 1);
border: 1px solid #0c0c0c;
box-shadow: 0 0 1em rgba(102, 51, 153, 1);
cursor: pointer;
color: white;
padding: 15px 10px;
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
:hover{
    background-color: #0c0c0c;
}
:active{
    background-color: rgba(102, 51, 153, 1)
}
`
