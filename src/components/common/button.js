import React from 'react'

const Button = ({type,className,children, onClick}) => {
  return (
    <>
   <button type={type} onClick={()=>{
    onClick ?  onClick() : "";
    
    }} className={`flex items-center justify-center rounded-full transition px-6 py-3 focus:outline-none ${className}`}>{children}</button>
   </>
  )
}

export default Button;


