import React from 'react'
import Claims from '../../pages/Claims/Claims'
import Vehicles from '../../pages/Vehicles/Vehicles'
import Owner from '../../pages/Owner/Owner'
import Home from '../../pages/Home/Home'
import { Route,Routes } from 'react-router-dom'

function Body() {
    return <Routes>
    <Route path="owner" element={<Owner></Owner>}></Route>
    <Route path="vehicles" element={<Vehicles></Vehicles>}></Route>
    <Route path="claims" element={<Claims></Claims>}></Route>
    </Routes>
}

export default Body