import React from 'react'
import {render} from '@testing-library/react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Button from './index'

test("Should not allowed click if button isDisabled is present",()=>{
    const { container } = render(<Button isDisabled></Button>)

    expect(container.querySelector("span.disabled")).toBeInTheDocument()
})

test("Should render string loading/spinner",()=>{
    const { container, getByText } = render(<Button isExternal isLoading></Button>)

    expect(getByText(/loading/i)).toBeInTheDocument()
    expect(container.querySelector("span")).toBeInTheDocument()
})

test("Should render <a> tag ",()=>{
    const { container } = render(<Button type="link" isExternal></Button>)

    expect(container.querySelector("a")).toBeInTheDocument()
})

test("Should render <Link> component ",()=>{
    const { container } = render(<Router><Button href="" type="link"></Button></Router>)

    expect(container.querySelector("a")).toBeInTheDocument()
})
