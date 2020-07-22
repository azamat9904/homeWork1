import React from 'react';
import s from "./Button.module.scss";
export interface Button {
    buttonContent:string,
    callBack:()=>void
}
const Button = ({buttonContent,callBack}:Button)=>{
    return (
        <button className={s.button} onClick={()=>callBack()}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {buttonContent}
        </button>
    )
};
export default Button;
