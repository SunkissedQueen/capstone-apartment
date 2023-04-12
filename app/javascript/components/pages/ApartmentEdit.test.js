import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom"
import mockApts from "../mockApartments"
import ApartmentEdit from "./ApartmentEdit"
import ApartmentShow from "./ApartmentShow"
describe("<ApartmentEdit />", () => {
  beforeEach(() => {
    const mock = jest.fn()
    render(
      <MemoryRouter initialEntries={["/apartmentedit/2"]}>
        <Routes>
          <Route path="/apartmentedit/:id" element={<ApartmentEdit apartments={ mockApts } updateApt={mock} l/>} />
        </Routes>
      </MemoryRouter>
    )
    // screen.debug()
  })

  it("renders without crashing", () => {
    expect(screen.getByText("ApartmentEdit")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /submit apartment/i })).toBeInTheDocument()
  })

  test("should change input value", () => {
    const cityInputElement = screen.getByPlaceholderText(/enter city/i)
    // screen.debug(cityInputElement)
    expect(cityInputElement.value).toBe("Yemen")
    fireEvent.change(cityInputElement, {
      target: { value: "Fake City" }
    })
    expect(cityInputElement.value).toBe("Fake City")
    // screen.debug(cityInputElement)
  })
})