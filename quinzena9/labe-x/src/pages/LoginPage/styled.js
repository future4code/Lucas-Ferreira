import styled from "styled-components"

export const ContainerLoginPage = styled.div`
background-image: url('https://cdn.pixabay.com/photo/2017/05/13/16/04/earth-2309897_960_720.png');
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
export const ButtonBack = styled.button`
background-color: white;
border: 1px solid gray;
color:  rgba(165, 55, 253, 1);
box-shadow: 0 0 1em rgba(102, 51, 153, 1);
cursor: pointer;
padding: 5px 5px;
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
:hover{
    background-color: rgba(165, 55, 253, 1);
    color: white;
}
:active{
    background-color: white;
}
`
export const ButtonSubmit = styled.button`
background-color: rgba(3, 201, 169, 1);
border: 1px solid #0c0c0c;
box-shadow: 0 0 1em rgba(102, 51, 153, 1);
cursor: pointer;
color: white;
padding: 5px 0px;
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
:hover{
    background-color: #0c0c0c;

}
:active{
    background-color: rgba(102, 51, 153, 1);
}
`

export const ContainerButton = styled.div`
margin: 15px 0px;
display: grid;
grid-template-columns: 100px 100px;
gap: 10px;
justify-content: center;

`

export const Form = styled.form`
width: 300px;
height: 350px;
background-color: transparent;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Input = styled.input`
width: 100%;
margin: 8px auto;
border-radius: 4px;
border: 1px solid white;
background-color: rgba(165, 55, 253, 1); 
height: 50px;
color: white;
padding-left: 10px;
box-shadow: 0 0 1em rgba(102, 51, 153, 1);
::placeholder{
  color: lightgrey;
  opacity: 1;
}
`
