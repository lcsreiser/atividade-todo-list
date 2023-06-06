import React from "react";
import {render, screen} from "@testing-library/react"
import Button from "../../components/Button";

describe("Componente botao enviar", () =>{
    test("Deve renderizar um botao", () =>{
        render(<Button textButton="Enviar"/>)
        expect(screen.getByText("Enviar")).toBeTruthy()
    })
})

describe("Componente botao concluir", () =>{
    test("Deve renderizar um botao", () =>{
        render(<Button textButton="Concluir"/>)
        expect(screen.getByText("Concluir")).toBeTruthy()
    })
})