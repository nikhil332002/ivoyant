

import { render,screen } from "@testing-library/react"
import Input from "./input"


test('check input',()=>{
    render(<Input/>)
    const textElement = screen.getByDisplayValue('6')
    expect(textElement).toBeInTheDocument()
})