import React from "react"

const RoadmapPage = () => (
  <>
    <section style={{padding:"4vh 0vw",textAlign:"center"}}>
      <h2>Roadmap</h2>
      <div className="timeline">
        <div className="event">
          <img width="150px" height="150px"/>
          <span className="content">
            <h3 className="title">File Conversion</h3>
          </span>
        </div>
        <div className="event">
          <span className="content">
            <h3 className="title">Library Sharing</h3>
            <p className="details">Host and share files through the Inter-planetary File System</p>
          </span>
          <img width="150px" height="150px"/>
        </div>
        <div className="event">
          <img width="150px" height="150px"/>
          <span className="content">
            <h3 className="title">Decentralized Library</h3>
            <p className="details">Store user library on the blockchain</p>
          </span>
        </div>
      </div>
    </section>
    <svg height={30} width="100%" style={{minWidth:960}} viewBox="0 0 64 64" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 64,0 0,0 0,64 C 22,0 42,0 64,64" fill="#FFFFFF"/>
    </svg>
  </>
)

export default RoadmapPage
