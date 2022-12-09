import React from "react";
import Claims from "../../pages/Claims/Claims";
import Vehicles from "../../pages/Vehicles/Vehicles";
import Owner from "../../pages/Owner/Owner";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Body() {
  
  const urlClaim = "http://localhost:5042/claim";
  const urlVehicle = "http://localhost:5042/vehicle";
  const urlOwner = "http://localhost:5042/owner";

  function getAllData(){
    axios.get(urlClaim).then(response => setClaims(response.data))
    axios.get(urlVehicle).then(response => setVehicles(response.data))
    axios.get(urlOwner).then(response => setOwners(response.data))
  }


  const [owners,setOwners]= useState([])
  const [vehicles,setVehicles]= useState([])
  const [claims,setClaims]= useState([])

  
  React.useEffect(getAllData,[owners])
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
