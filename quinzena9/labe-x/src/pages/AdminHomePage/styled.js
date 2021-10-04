import styled from "styled-components"

export const ContainerAdminHomePage = styled.div`
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

export const H1 = styled.h1`
margin-top: 25px;
`

export const ContainerButton = styled.div`
margin: 40px 0px;
display: grid;
grid-template-columns: 100px 100px 100px;
gap: 5px;
justify-content: center;

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
    background-color: #0c0c0c;
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

export const ButtonLogout = styled.button`
background-color: rgba(102, 51, 153, 1);
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
display: grid;
grid-template-columns: 58% 100px;
justify-content: space-between;
align-items: center;
background-color: white;
width: 100%;
border-bottom: 1px solid gray;
padding: 40px 10px;
cursor: pointer;
:hover{
    background-color: rgba(213, 184, 255, 1);
    border: 0.1rem solid rgba(213, 184, 255, 1);
    color: white;
    border-bottom: 1px solid gray;
}
:active{
    background-color: rgba(102, 51, 153, 1);
    color: white;
    border-bottom: 1px solid gray;
}
`
export const P = styled.p`
text-align: left;
padding: 6px;
font-size: 20px;
color: rgba(102, 51, 153, 1);
`

export const ButtonRemove = styled.button`
padding: 10px 10px;
background-color: #0c0c0c;
border-radius: 4px;
border: 1px solid black;
max-width: 100%;
color: white;
margin-right: 8px;
cursor: pointer;
text-align: center;
:hover{
    background-color: rgba(3, 201, 169, 1);
    border: 0.1rem solid black;
    color: black;
}
:active{
    background-color: rgba(102, 51, 153, 1);
    color: white;
}
`