import React from "react";
import Claims from "../../pages/Claims/Claims";
import Vehicles from "../../pages/Vehicles/Vehicles";
import Owner from "../../pages/Owner/Owner";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function Body() {
  
  const [owners,setOwners]= useState([])
  const [vehicles,setVehicles]= useState([])
  const [claims,setClaims]= useState([])
  return (
    <Routes>
      <Route path="*" element={<Owner elements={owners} setElements={setOwners}></Owner>}></Route>
      <Route path="/owner" element={<Owner  elements={owners} setElements={setOwners}></Owner>}></Route>
      <Route path="/vehicles/:id" element={<Vehicles   elements={vehicles} setElements={setVehicles}></Vehicles>}></Route>
      <Route path="/claims/:id" element={<Claims   elements={claims} setElements={setClaims}></Claims>}></Route>
    </Routes>
  );
}

export default Body;
