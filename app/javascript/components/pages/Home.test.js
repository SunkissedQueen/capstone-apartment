import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Home from "./Home"

describe("<Home />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
  })

  it("renders without crashing", () => {
    // screen.debug()
    const element = screen.getByText("Home page")
    expect(element).toBeInTheDocument()
    // screen.logTestingPlaygroundURL()
    // displays a url to paste in the browser so you can see the various queries to run on the test file
  })
})