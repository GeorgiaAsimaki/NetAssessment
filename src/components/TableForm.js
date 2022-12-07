import React from 'react';
import StudentForm from './table';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from "react";
import axios from "axios"
import VehicleTable from './VehicleTable';
import ClaimTable from './ClaimTable';


function TableForm() {
  const urlOwners ="http://localhost:8082/user/users"
  useEffect( () =>{
    axios.get(urlOwners).then(response =>( setUserData(response.data)))\
    axios.get(urlVehicle).then(response =>( setVehicleData(response.data)))
    axios.get(urlClaims).then(response =>( setClaimsData(response.data)))
  }
    ,[])
  const [userData, setUserData] = useState([]);
  const [vehicleData,setVehicleData] = useState([]);
  const [claimsData,setClaimsData] =useState([]);

  const tableOwners = userData.map((info) => {
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.firstName}</td>
        <td>{info.lastName}</td>
        <td>{info.license}</td>
      </tr>
    );
  });

  const addOwners = (data) => {
    const totalUsers = userData.length;
    data.id = totalUsers + 1;
    axios.post(urlOwners,data)
    const updatedUserData = [...userData];
    updatedUserData.push(data);
    setUserData(updatedUserData);
  };

  const tableVehicles = vehicleData.map((info) => {
      return (
        <tr>
          <td>{info.id}</td>
          <td>{info.brand}</td>
          <td>{info.vin}</td>
          <td>{info.color}</td>
          <td>{info.year}</td>
          <td>{info.ownerName}</td>
        </tr>
      );
    });

    const addVehicles = (data) => {
      const totalVehicles = vehicleData.length;
      data.id = totalVehicles + 1;
      axios.post(urlVehicle,data)
      const updatedVehicleData = [...vehicleData];
      updatedVehicleData.push(data);
      setVehicleData(updatedVehicleData);
    };

    const tableClaims = claimsData.map((info) => {
        return (
          <tr>
            <td>{info.id}</td>
            <td>{info.description}</td>
            <td>{info.status}</td>
            <td>{info.date}</td>
            <td>{info.vehicleName}</td>
          </tr>
        );
      });

      const addClaims = (data) => {
        const totalClaims = userClaims.length;
        data.id = totalClaims + 1;
        axios.post(urlClaims,data)
        const updatedClaimsData = [...claimsData];
        updatedClaimsData.push(data);
        setClaimsData(updatedClaimsData);
      };

  return (
    <div>
      <Stack sx={{m:4}}>
          <StudentForm func={addOwners} />
          </Stack>
      <Stack sx={{m:2}}>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>Sr.NO</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Driver License</th>
          </tr>
        </thead>
        <tbody>{tableOwners}</tbody>
      </table>
      </Stack>

      <Stack sx={{m:4}}>
            <StudentForm func={addVehicles} />
            </Stack>
        <Stack sx={{m:2}}>
            <table className="vehicles">
              <thead>
                <tr>
                  <th>Sr.NO</th>
                  <th>Brand</th>
                  <th>Vin</th>
                  <th>Color</th>
                  <th>Year</th>
                  <th>Owner</th>
                </tr>
              </thead>
              <tbody>{tableVehicles}</tbody>
            </table>
        </Stack>

        <Stack sx={{m:4}}>
            <StudentForm func={addClaims} />
            </Stack>
        <Stack sx={{m:2}}>
            <table className="claims">
              <thead>
                <tr>
                  <th>Sr.NO</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Vehicle</th>
                </tr>
              </thead>
              <tbody>{tableClaims}</tbody>
            </table>
        </Stack>
    </div>
  );
}

export default TableForm;