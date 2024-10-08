import React from 'react';
import { useParams } from 'react-router-dom';

const ParkingDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Parking Spot Details for ID: {id}</h1>
      {/* Display parking spot details here */}
    </div>
  );
};

export default ParkingDetails;