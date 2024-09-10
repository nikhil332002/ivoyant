import { render,screen } from "@testing-library/react"
import Query from "./query"

describe('test',()=>{

    test('logout button',()=>{
        render(<Query/>)
        const element = screen.getByRole('button',{name: 'Logout'})
        expect (element).toBeInTheDocument()
    })
    
    test('login button',()=>{
        render(<Query/>)
        const element = screen.queryByRole('button',{name: 'Login'})
        expect (element).not.toBeInTheDocument()
    })
})