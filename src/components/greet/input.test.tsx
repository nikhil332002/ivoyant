

import { render,screen } from "@testing-library/react"
import Input from "./input"


test('check input',()=>{
    render(<Input/>)
    const textElement = screen.getByRole("button")
    expect(textElement).toBeInTheDocument()
})