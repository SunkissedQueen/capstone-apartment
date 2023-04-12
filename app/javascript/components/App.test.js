// imports
import React from "react";
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";
// import userEvent from "@testing-library/user-event";

// component
import App from "./App"

// custom jest matchers
import '@testing-library/jest-dom'

describe("<App />", () => {
  it("renders a greeting", () => {
    // arrange
    render(<App />) //[Error: You cannot render a <Router> inside another <Router>. You should never have more than one in your app.]
    // screen.debug()
    // screen.logTestingPlaygroundURL()
    // act
    const greeting = screen.getByRole('heading', {
      name: /sky/i
    })
    // assert
    expect(greeting).toBeInTheDocument()
  })

  it("has a home screen", () => {
    render(<App />)
    const home = screen.getByText(/home/i)
    // console.log("home", home)
    expect(home).toBeInTheDocument()
  })
})