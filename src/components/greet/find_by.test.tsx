import { render,screen } from "@testing-library/react"
import Find_by from "./find_by"

test('using find by',async ()=>{
    render(<Find_by/>)
    const element = await screen.findByRole('button',{name:'Logout'},{timeout:5000})
    expect (element).toBeInTheDocument()
}) 