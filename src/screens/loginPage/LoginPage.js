import React from "react"
import { MainDiv, LoginDiv, Input, TitleDiv, PetiteDiv, LuneDiv, LoginButton } from "../loginPage/styled"

const LoginPage = () => {
    return(
        <MainDiv>
            <TitleDiv>
                <PetiteDiv>Petite</PetiteDiv>
                <LuneDiv>Lune</LuneDiv>
            </TitleDiv>
            <LoginDiv>
                <Input placeholder="e-mail" type="email" />
                <Input placeholder="senha" type="password" />
                <LoginButton>Entrar</LoginButton>
            </LoginDiv>
        </MainDiv>
    )
}

export default LoginPage;