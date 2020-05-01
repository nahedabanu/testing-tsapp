import * as React from 'react';

import { X, Search, Icon } from 'react-feather';

import { Camera } from 'react-feather';

export interface IButtonProps {
  children?: React.ReactNode,
  disabled?:boolean
  buttonText?: string;
  click?:boolean
  onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
  backgroundColor?:string  
  color?:string
  Icon?:(Icon)
  outline?:boolean
  isIcon?:boolean
  flag?:number
  action?:any
}




export default (props: IButtonProps) => {
  const {flag,onClick,backgroundColor,buttonText,color,isIcon,Icon,disabled,action} = props;
 
  if(flag===1)
  {
  return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
       <button className="fa4" style={{backgroundColor,color}}  disabled={disabled} onClick={onClick}  type="button">
      
           <div>
            <X/>  
          </div>
            {props.children}
      </button> 
   </div>

  )
       }
       else if (flag===2)
       {
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
           <button className="fa4" style={{backgroundColor,color}}  disabled={disabled} onClick={onClick}   type="button">
          
               <div>
                <Search/>  
              </div>
                {props.children}
          </button> 
       </div>
    
      )
      
       }
       else if(flag===3)
       {
        return (
          <div style={{ display: 'flex', alignItems: 'center' }} >
           <button className="fa4" style={{backgroundColor,color}}  disabled={disabled}  onClick={onClick}  type="button">
          
               <div>
                <Camera/>  
              </div>
                {props.children}
          </button> 
       </div>
    
      )
       }
       else
       
       {
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
           <button className="fa4" style={{backgroundColor,color}}  disabled={disabled} onClick={() =>
             props.click === true && ( alert(" Clicked"))}   type="button">
          
                {props.children}
          </button> 
       </div>
    
      )
       }
  }



