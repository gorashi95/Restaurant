import React from 'react';
import {ReservationType} from "./AddReservation"
import styles from './ReservationsList.module.css'
type ReservationListProps = {
    reservations: ReservationType[]
}

const ReservationsList: React.FC<ReservationListProps>= ({reservations}) =>{
    const hasReservations = Boolean(reservations.length);
  return (
  <div>
    <h2>
      قائمة الحجوزات
      </h2>
      {!reservations.length && <div className="text-xs text-grey">لا توجد حجوزات</div>}
     {hasReservations && <table className={styles.table}>
          <thead className={styles.tableHeader} >
              <td>الاسم</td>
              <td>الايميل</td>
              <td>العدد</td>
          </thead>
          <tbody>
              {reservations.map((reservation,index)=>{
                  return <tr className={styles.tableRow} key={index}>
                      <td>{reservation.name}</td>
                      <td>{reservation.email}</td>
                      <td>{reservation.number}</td>
                  </tr>
              })}
          </tbody>
      </table>}
     
  </div>
  );
};

export default ReservationsList;