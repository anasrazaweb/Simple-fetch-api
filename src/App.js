import React from 'react'
import ContextApi from './Components/ContextApi '
import Card from './Components/Card'

const App = () => {
  return (
    <div style={{ height: "100vh", flexDirection: "column", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <ContextApi />
      <div style={{marginTop:"1000px", marginLeft:"40px"}}>
        <Card/> 
      </div>
    </div>
  )
}

export default App