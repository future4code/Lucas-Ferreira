import styled from "styled-components"

export const Container = styled.div`
display: grid;
grid-template-columns: 1fr;
justify-content: center;
align-items: center;
text-align: center;
`

export const ContainerTripDetailsPage = styled.div`
background-color: rgba(232, 236, 241, 1);
max-width: 100vw;
min-height: 100vh;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const DetailsPage = styled.div`
margin-top: 10px;
padding-bottom: 10px;
width: 80%;
display: grid;
align-items: center;
color: black;
justify-content: center;
`
export const P = styled.p`
text-align: left;
padding: 6px;
font-size: 20px;
color: rgba(102, 51, 153, 1);
`
export const ContainerPendingCandidates = styled.div`
background-color: white;
border-radius: 4px;
box-shadow: 5px 5px 5px rgba(102, 51, 153, 1);
width: 100%;
height: 230 px;
margin: 15px auto;
padding: 20px;
`

export const ContainerButton = styled.div`
margin: 15px 0px;
display: grid;
grid-template-columns: 100px 100px;
gap: 80px;
justify-content: center;

`
export const ButtonReprove = styled.button`
background-color: #0c0c0c;
border: 1px solid #0c0c0c;
color:  white;
box-shadow: 0 0 1em rgba(102, 51, 153, 1);
cursor: pointer;
padding: 5px 5px;
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
:hover{
    background-color: tomato;
    color: white;

}
:active{
    background-color: #0c0c0c;
}
`
export const ButtonAprove = styled.button`
background-color: rgba(3, 201, 169, 1);
border: 1px solid #0c0c0c;
box-shadow: 0 0 1em rgba(102, 51, 153, 1);
cursor: pointer;
color: white;
padding: 5px 0px;
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
:hover{
    background-color: rgba(165, 55, 253, 1);

}
:active{
    background-color: #0c0c0c;
}
`

export const ButtonBack = styled.button`
background-color: white;
border: 1px solid gray;
color:  rgba(165, 55, 253, 1);
box-shadow: 0 0 1em rgba(102, 51, 153, 1);
cursor: pointer;
width: 100px;
margin-top: 50px;
margin-bottom: 50px;
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
export const ContainerH1 = styled.div`
margin: 20px 0;
`
export const H1 = styled.h1`
margin: 20px 0;
`