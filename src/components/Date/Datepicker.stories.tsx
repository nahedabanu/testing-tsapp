import React, { useState } from 'react'; 
import { storiesOf } from "@storybook/react";
import Datepicker from './Datepicker';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';



export interface State {
   // startDate:any,
   //   onChange:()=> Date,
   // setStartDate:any
   date: any;
   onChange : () => void
   startDate:Date;
   handleChange: () => void
 }

storiesOf("DateSelector", module)
    .add("Date Selection",
       ()=> {
         const [startDate , setStartDate] = useState(new Date());
         const handleChange =(date : any)=>{
           setStartDate(date);
         }
         
     return(
      <Datepicker startDate={startDate}  dateFormat="DD/MM/YYYY" onChange={handleChange} selectflag={1}  />
     );
       }
   )
     

    .add("Date Selection with time",
    ()=> {
      const [startDate , setStartDate] = useState(new Date());
      const handleChange =(date : any)=>{
        setStartDate(date);
      }
       return(
         <Datepicker startDate={startDate}  onChange={handleChange} selectflag={2}
        
      timeFormat="HH:mm"
      timeIntervals={30}
      timeCaption="Time"
      dateFormat="MMMM d, yyyy h:mm aa" />
       );
      
    }
 )
 .add("Date Range Selection",  () => {
    const [startDate, setStartDate] = useState(new Date());
      const [endDate, setEndDate] = useState(new Date());
      const handleChange =(date : any)=>{
         setStartDate(date);
       }

       const handleChange1 =(date : any)=>{
         setEndDate(date);
       }

     
     return(
         <>
         <label> select Start Date : </label>
         <DatePicker
            selected={startDate}
            onChange={handleChange}
            
            startDate={startDate}
            endDate={endDate}
            
          />
          <br/>
          <br/>
          <label>Select End Date :</label>
          <DatePicker
            selected={endDate}
            onChange={handleChange1}
            
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            
          />
</>
         
     
     )
   
  
     }
     )
  

    

