import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['agora','convert','video','file']} />
    <div style={{margin:"0 auto",width:"100vw",overflow:"hidden",textAlign:"center",color:"#FFFFFF",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"center"}}>
      <div style={{flex:"10 10",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h2>Simple Video Conversion</h2>
        <p style={{padding:"12px",fontSize:"18px"}}>Drag, Drop and Convert for Mac</p>
        <a className="btn" href="https://s3-ap-southeast-2.amazonaws.com/agora-distribution/Agora-0.2.4.dmg" download>
          <span className="artifact">Download</span>
        </a>
      </div>
      <svg height={80} width="100%" style={{minWidth:960}} viewBox="0 0 400 38.7" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="./../images/sway.png">
        <path d="M0,0c38.5,0,101.8,23.7,153.8,23.7S285.7,6.8,341.3,6.8S423.8,17.4,500,17.4v21.3L0,38.2V0z" fill="#FFFFFF"/>
      </svg>
    </div>
  </Layout>
)

export default IndexPage
