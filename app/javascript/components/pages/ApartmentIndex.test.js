import React from "react"
import { render, screen } from "@testing-library/react"
import ApartmentIndex from "./ApartmentIndex"
import mockApartments from "../mockApartments"
import { BrowserRouter } from "react-router-dom"

describe("<ApartmentIndex />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <ApartmentIndex apartments={mockApartments} />
      </BrowserRouter>
    )
  })
  it("displays an apartment price", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <ApartmentIndex apartments={mockApartments} />
      </BrowserRouter>
    )
    mockApartments.forEach((apt) => {
      const aptPrice = screen.getAllByText("$" + apt.price + "/month")
      expect(aptPrice[0]).toBeInTheDocument()
    })
  })
})
