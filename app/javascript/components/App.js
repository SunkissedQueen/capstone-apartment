import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ApartmentEdit from "./pages/ApartmentEdit"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentShow from "./pages/ApartmentShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import mockApartments from "./mockApartments"
import "./App.css"
const App = () => {
  const [apartments, setApartments] = useState(mockApartments)
  console.log(apartments)

  const createApartment = (apartment) => {
    console.log(apartment, "This apartment has been created")
  }

  const updateApt = (updatedApt, id) => {
    console.log(updatedApt,"This apartment has been modified")
  }

  return (
    <BrowserRouter>
      <h1>Sky Ground</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartmentindex" element={<ApartmentIndex apartments={apartments} />} />
        <Route path="/apartmentshow/:id" element={<ApartmentShow apartments={apartments} />} />
        <Route path="/apartmentnew" element={<ApartmentNew createApartment={createApartment}/>} />
        <Route path="/apartmentedit/:id" element={<ApartmentEdit apartments={apartments} updateApt={updateApt} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
