import { render,screen } from "@testing-library/react"
import user from '@testing-library/user-event'
import Counter from "./Counter"

test('renders 1 after button click',async ()=>{
    user.setup(); 
    render(<Counter/>)
    const incrementButton = screen.getByRole('button',{name:'increment'})
    await user.click(incrementButton)
    const countElement = screen.getByRole('heading');
    expect (countElement).toHaveTextContent('1'); 
}) 