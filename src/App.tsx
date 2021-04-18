import React, { useState } from 'react';
import ReservationsList  from './Components/ReservationsList';
import  AddReservation  from './Components/AddReservation';
import "./App.css"
import "./index.css"
import {ReservationType} from './Components/AddReservation'
const App= () => {
  const [reservations,setReservations]=useState<ReservationType[]>([])
  const onAddReservation = (reservation:ReservationType) => {
    setReservations([
      ...reservations,
      reservation
    ])
  }
  return (
    <div className='app'>
      <header>
        <link rel="stylesheet" href="https://cdn.usebootstrap.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
        <script src="https://cdn.usebootstrap.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      </header>
      <header className="header">
        <h1 className="header">
          مطعمنا
        </h1>
      
      </header>
      <body>
      <div className="row">
        <div className="col-md-6" >
        <ReservationsList reservations={reservations}/>
        </div>
        <div className="col-md-6">
        <AddReservation onAdd={onAddReservation}/>
        </div>  
      </div>
      </body>
    </div>
  );
}

export default App;
