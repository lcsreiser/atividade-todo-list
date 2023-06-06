import React from "react";
import {render, screen} from "@testing-library/react"
import Input from "../../components/Input";

describe("Componente input", () =>{
    test("Deve renderizar um input", () =>{
        render(<Input />)
        expect(screen.getByPlaceholderText("Digite aqui")).toBeTruthy()
    })
})