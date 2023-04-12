import React from "react"
import { render, screen } from "@testing-library/react"
import ApartmentShow from "./ApartmentShow"
import mockApartments from "../mockApartments"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe("<ApartmentShow />", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/apartmentshow/1"]}>
        <Routes>
          <Route path="/apartmentshow/:id" element={<ApartmentShow apartments={ mockApartments } />} />
        </Routes>
      </MemoryRouter>
    )
  })

  it("renders without crashing", () => {
    expect(screen.getByText(/address/i)).toBeInTheDocument()
    expect(screen.getByRole("img", { name: /Little Whinging, Surrey/i })).toBeInTheDocument()
  })
})