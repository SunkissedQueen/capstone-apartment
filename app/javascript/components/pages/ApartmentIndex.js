import React from "react"
import { Button, Card, CardBody, CardTitle } from "reactstrap"
import {NavLink} from "react-router-dom"

const ApartmentIndex = ({apartments}) => {
  return(
    <main className="cat-index-cards">
      <h3>ApartmentIndex page</h3>
      {apartments?.map((apartment, index) => {
        return (
          <Card
            style={{width: "300"}} key={index}
          >
            <img 
              className="card"
              src={apartment.image} 
              alt="image of apartment"
              height="200"
              width="300" 
            />
            <CardBody>
              <CardTitle tag="h5">
                <p>{`$${apartment.price}/month`}</p>
                <p>{`Located in ${apartment.city}, ${apartment.state}`}</p>
              </CardTitle>
                <NavLink className="nav-link" to={`/apartmentshow/${apartment.id}`}>
                  <Button>
                      See More Details
                  </Button>
                </NavLink>
            </CardBody>
          </Card>
        )
      })}
    </main>
  )
}

export default ApartmentIndex