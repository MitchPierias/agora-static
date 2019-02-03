import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/index.css'

const RoadmapPage = () => (
  <Layout>
    <SEO title="Home" keywords={['agora','convert','video','file']} />
    <div style={{margin:"0 auto",maxWidth:960,textAlign:"center",color:"#FFFFFF",height:"50vh",display:"flex",flexDirection:"column",justifyContent:"center"}}>
      <h2>Roadmap</h2>
    </div>
    <svg height={80} width="100%" viewBox="0 0 64 64" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0,64 C 18,0 46,0 64,64" fill="#FFFFFF"/>
    </svg>
    <section style={{padding:"4vh 0vw"}}>
      <div style={{maxWidth:960,margin:"auto"}}>
        <p>Implementing the Inter-Planetary File System (IPFS) to share media libraries with the world.</p>
      </div>
    </section>
  </Layout>
)

export default RoadmapPage
