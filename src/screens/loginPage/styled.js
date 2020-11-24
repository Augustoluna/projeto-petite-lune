import styled from "styled-components"
import fourKids from "../../img/four-kids.jpg"

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background-image: url(${fourKids});
    background-size: cover;
`

export const LoginDiv = styled.div`
    display: flex;
    height: 60vh;
    width: 25vw;
    align-items: center;
    justify-content: space-around;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    flex-direction: column;
    background-color: rgba(255,0,255,.4);
`

export const Input = styled.input`
    border-radius: 10px;
    border: none;
    outline: none;
    height: 20px;
    width: 250px;
`

export const TitleDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 25vw;
    background-color: rgba(255,0,255,.4);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

export const PetiteDiv = styled.p`
    color: white;
    font-size: 60px;
    font-family: cursive;
    margin: 0;
`

export const LuneDiv = styled.p`
    font-size: 60px;
    margin: 0;
    color: #DC143C;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
`

export const LoginButton = styled.button`
    border-radius: 10px;
    border: none;
    outline: none;
    height: 10vh;
    width: 10vw;
    background-color: #312244;
    color: white;
    font-size: 20px;
    font-weight: 700;
    
    &:hover{
        background-color: #f28482;
        color: black;
        cursor: pointer;
    }
    &:active{
        background-color: brown;
        color: white;
    }
`