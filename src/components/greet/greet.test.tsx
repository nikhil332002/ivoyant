
import { render,screen } from "@testing-library/react"
import Greet from "./greet"


describe('Greet', () => {
    test('renders correctly',()=>{
        render(<Greet/>)
        const textElement = screen.getByText("Hello")
        expect(textElement).toBeInTheDocument()
    })
    test('renders correctly with name',()=>{
        render(<Greet name='nikhil'/>)
        const textElement = screen.getByText("Hello nikhil")
        expect(textElement).toBeInTheDocument()
    })
})