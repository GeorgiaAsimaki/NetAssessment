import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
        <Link to="owner">Owner</Link>
        <Link to="vehicles">Vehicles</Link>
        <Link to="claims">Claims</Link>
    </div>
  )
}

export default Home