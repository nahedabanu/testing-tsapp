import React from 'react'; 
import DatePicker from "react-datepicker";
interface IProps {
  selectflag?:number
  startDate?: Date;
  timeCaption?: string;
  onChange:(date : any)=>void;
  timeFormat?:string;
  dateFormat?:string;
  timeIntervals?:number;
  selected?:Date;
  endDate?:Date;
  minDate?:Date;
}



export default (props:IProps)=> {
  const {selectflag,startDate,timeCaption,onChange,timeFormat,dateFormat,timeIntervals,endDate}=props;
  
    if(selectflag===1)
    return (
        <div>
            <label>From Date</label>
          <DatePicker selected={startDate}  onChange={onChange}  />
        </div>
      
    )
      else if(selectflag===2)
    return(
        <div>
            <label>From date with time :  </label>
            <DatePicker selected={startDate}  onChange={onChange} timeIntervals={timeIntervals} timeCaption={timeCaption} timeFormat={timeFormat} dateFormat={dateFormat} showTimeSelect />
        </div>
      
    )

    else 
    return(
      <>
      <label> select Start Date : </label>
      <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
          />
          <br/>
          <br/>
          <label>Select End Date :</label>
          <DatePicker
            selected={endDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />


      
      
      
      
      </>
    )
    } 
 
