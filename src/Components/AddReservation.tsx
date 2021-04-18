import React, { useState } from 'react';
import  LableWithInput  from './LableWithInput';
import styles from './addReservation.module.css'
export type ReservationType ={
    name:string;
    email:string;
    number:number;
}
type AddReservationprops={
    onAdd:(reservation :ReservationType) =>void;
}
const AddReservation:React.FC<AddReservationprops> = ({onAdd}) => {
    const initialState ={
        name:'',
        email:'',
        number:1,

    }
    const[form,setForm] = useState<ReservationType>(initialState)
    const onChange =(name:string, value:string) => {
        setForm({
            ...form,
            [name]: value
        })
    };
    const onSubmit =(event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        onAdd(form);
        setForm(initialState)
    }

  return (
      
  <div className={styles.div}>
      
    <h1> اضافة حجز</h1>
    <form className={styles.form} onSubmit={onSubmit}>
        <LableWithInput  value={form.name} onChange={onChange} name="name" placeholder="الاسم"/>
        <LableWithInput value={form.email} onChange={onChange} name="email" placeholder="الايميل"/>
        <LableWithInput value={form.number} onChange={onChange} name="number" placeholder="العدد" type="number"/>
       <div>
           <input className={styles.submit} type="submit" value="اضافة حجز"/>
       </div>
    </form>
  </div>
  
  );
};
export default AddReservation;