import React, { ChangeEventHandler, ChangeEvent } from 'react';
import './TextBox.css';

interface TextBoxProps {
  label: string
  change: Function
}

function TextBox({ change, label }: TextBoxProps) {

  const changeValue: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => change(e.target.value)

  return (
    <div className="text-box">
      <label htmlFor={label}>{label}</label>
      <input id={label} type="text" onChange={changeValue}></input>
    </div >
  );
}

export default TextBox;
