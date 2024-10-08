import React from 'react';
import { useParams } from 'react-router-dom';

const BookingConfirmation = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Booking Confirmation for Spot ID: {id}</h1>
      {/* Display confirmation details */}
    </div>
  );
};

export default BookingConfirmation;