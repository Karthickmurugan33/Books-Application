import React from "react"
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div className="navbar">
      <Link to={"/"}> <button>
        Home
      </button></Link>
      <Link to={"/toread"}> <button>
        To Read
      </button></Link>
      <Link to={"/alredyread"}> <button>
        Already Read
      </button></Link>
      <Link to={"/reading"}> <button>
        Reading
      </button></Link>

    </div>
  )
}

export default Nav