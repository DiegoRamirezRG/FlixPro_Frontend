import { IoEye, IoEyeOff } from 'react-icons/io5';
import { InputTextCompInterface } from './InputTextInterface';
import './InputTextStyle.scss';
import { useState } from 'react';

export const InputTextComp = ({ id, name, label, placeholder, type, iconBtn } : InputTextCompInterface) => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='inputContainer'>
      <label>{label}</label>
      <section className='input_wrapper'>
        <input type={type == 'password' ? showPassword ? 'text' : type : type} placeholder={placeholder}/>
        { 
          type == 'password' 
            ? showPassword 
              ? <div className="iconBtn overable" onClick={() => setShowPassword(!showPassword)}> <IoEye /> </div>
              : <div className="iconBtn overable" onClick={() => setShowPassword(!showPassword)}> <IoEyeOff /> </div>
            : iconBtn ? <div className="iconBtn"> { iconBtn } </div> : <></>
        }
      </section>
    </div>
  )
}