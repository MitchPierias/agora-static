import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Header = ({ siteTitle, logo }) => (
  <header>
    <Link to="/">
      <span style={{padding:"10px",display:"flex",flexDirection:"row",alignItems:"center"}}>
        <Img fixed={logo}/>
      </span>
    </Link>
    <nav>
      <Link to="/">Download</Link>
      <Link to="/">Roadmap</Link>
      <a href="https://github.com/MitchPierias/Agora">Source code</a>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "",
}

export default Header
