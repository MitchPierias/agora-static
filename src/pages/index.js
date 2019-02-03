import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['agora','convert','video','file']} />
    <div style={{margin:"0 auto",maxWidth:960,textAlign:"center",color:"#FFFFFF",height:"50vh",display:"flex",flexDirection:"column",justifyContent:"center"}}>
      <h2>Simple File Conversion</h2>
      <p style={{padding:"12px",fontSize:"18px"}}>Select your operating system below</p>
    </div>
    <svg height={80} width="100%" viewBox="0 0 64 64" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0,64 C 18,0 46,0 64,64" fill="#FFFFFF"/>
    </svg>
    <section style={{padding:"4vh 0vw",textAlign:"center"}}>
      <p>Binaries have not been signed.</p>
      <p>Please build from source for now if you'd like to experience the application.</p>
      <div className="carousel">
        <a className="download" href="https://s3-ap-southeast-2.amazonaws.com/agora-distribution/Agora-0.2.3.dmg" download>
          <span className="artifact">Mac</span>
        </a>
        <a className="download" onClick={() => alert("Windows currently not supported")}>
          <span className="artifact">Windows</span>
        </a>
        <a className="download" href="https://s3-ap-southeast-2.amazonaws.com/agora-distribution/Agora+0.2.3.AppImage" download>
          <span className="artifact">Linux</span>
        </a>
      </div>
    </section>
    <svg height={30} width="100%" viewBox="0 0 64 64" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 64,0 0,0 0,64 C 22,0 42,0 64,64" fill="#FFFFFF"/>
    </svg>
  </Layout>
)

export default IndexPage
