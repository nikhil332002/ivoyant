import { render,screen } from "@testing-library/react"
import Skills from "./Skills"

describe('map',()=>{
    const skill=['react','java','c'];
    test('renders list',()=>{
        render(<Skills skill={skill}/>)
        const textElement = screen.getByRole("list")
        expect(textElement).toBeInTheDocument()
    })

    test('renders list items',()=>{
        render(<Skills skill={skill}/>)
        const textElement = screen.getAllByRole("listitem")
        expect(textElement).toHaveLength(skill.length)
    })
})