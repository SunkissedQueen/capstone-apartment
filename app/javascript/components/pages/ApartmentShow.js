import React from "react"
import { useParams, NavLink } from "react-router-dom"
import { Button } from "reactstrap"

const ApartmentShow = ({ apartments }) => {
  const { id } = useParams()
  const currentApt = apartments?.find((apt) => {
    // console.log(apt)
    return apt.id === +id
  })
  // console.log(id, currentApt)

  return (
    <main className="cards">
    {currentApt && (
      <>
        <img
          src={currentApt.image}
          alt={`profile of an apt located in ${currentApt.city}, ${currentApt.state}`}
          height="100"
          width="100"
        />
        <p>Address:</p>
        <p>{currentApt.street}</p>
        <p>{currentApt.city}, {currentApt.state}</p>

        <p>Amenities:</p>
        <p>{currentApt.bedrooms} bedrooms/ {currentApt.bathrooms} bathrooms</p>
        <p>Pets allowed: {currentApt.pets}</p>

        <p>Monthly rate: ${currentApt.price}/month</p>

        <p>Contact {currentApt.manager} at {currentApt.email}</p>
        <Button>
          <NavLink to={`/apartmentedit/${currentApt.id}`} className="nav-link">
            Modify Apartment
          </NavLink>
        </Button>
      </>
    )}
  </main>
  )
}

export default ApartmentShow
