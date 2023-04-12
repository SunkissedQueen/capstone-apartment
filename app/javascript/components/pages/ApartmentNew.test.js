import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import ApartmentNew from "./ApartmentNew"
import userEvent from "@testing-library/user-event"

describe("<ApartmentNew />", () => {
  beforeEach(() => {
    // mock function to represent createApartment()
    const mock = jest.fn()

    render(
      <BrowserRouter>
        <ApartmentNew createApartment={mock}/>
      </BrowserRouter>
    )
    // screen.debug()
  })

  it("renders without crashing", () => {
    // screen.debug()
    // screen.logTestingPlaygroundURL()
    expect(screen.getByRole("button", {
      name: /submit apartment/i
    })).toBeInTheDocument()
  })

  it("redirects to ApartmentIndex", () => {
    const submitButton = screen.getByRole("button", {
      name: /submit apartment/i
    })
    // screen.debug()
    fireEvent.click(submitButton)
    expect(location.pathname).toBe("/apartmentindex")
  })

  // userEvent will need async and await
  test("render street input", async () => {
    // render(<textarea />)
    const newInput = screen.getAllByRole("textbox", { name: "" })
    await userEvent.type(newInput[0], "227 Queens Ct")
    // screen.debug(newInput)
    expect(newInput[0]).toBeInTheDocument()
    expect(newInput[0]).toHaveAttribute("name", "street")
    expect(newInput[0]).toHaveValue("227 Queens Ct")
  })

  // fireEvent
  test("should change input value", () => {
    const cityInputElement = screen.getByPlaceholderText(/enter city/i)
    fireEvent.change(cityInputElement, {
      target: { value: "Fake City" }
    })
    expect(cityInputElement.value).toBe("Fake City")
  })
})
