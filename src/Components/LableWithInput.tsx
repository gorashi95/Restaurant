import React from 'react';
import styles from './addReservation.module.css'

type LableWithInputprops={
    
    name:string;
    placeholder:string;
    value:string |number;
    onChange:(name:string,value:string)=>void;
    type?:string;

}
 const LableWithInput: React.FC<LableWithInputprops> = (props) => {
    const { name, placeholder, type = "text", onChange,value } = props;

    const handleChange =(event:React.ChangeEvent<HTMLInputElement>)=> {
        onChange(event.target.name, event.target.value)
        }
    
    return (<div>
        <label className={styles.lable} htmlFor={name}>{placeholder}</label>
        <input className={styles.input} value={value} onChange={handleChange} type={type} placeholder={placeholder} name={name}></input>
    </div>);
};
export default LableWithInput;
