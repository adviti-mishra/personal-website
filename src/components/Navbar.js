import React, {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import "../styles/Navbar.css"
import ReorderIcon from "@material-ui/icons/Reorder"

function Navbar() {
  // state determining whether or not to expand the navBar
  const [expandNavbar, setExpandNavbar] = useState(false)

  const location = useLocation()
  // if location changes, run useEffect to set expandNavbar to false
  useEffect(() => {
    setExpandNavbar(false)
  }, [location])
  return (
    <div className="navbar" id={expandNavbar? "open" : "close"}>
        <div className="toggleButton">
            <button onClick = {() => {
                setExpandNavbar((prev)=> !prev)
                }}>
                <ReorderIcon />
            </button>
        </div>
        <div className="links">
            <Link to="/"> Home </Link>
            <Link to="/Projects"> Projects </Link>
            <Link to="/Experience"> Experiences </Link>


        </div>

    </div>
  )
}

export default Navbar