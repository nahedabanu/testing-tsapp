import * as React from 'react';
 export const MyComponent: React.FC = () => {

  const [count, setCount] = React.useState(0);

  return (

    <div onClick={() => setCount(count + 1)}>

     <label >Count value is :{count}</label> 

    </div>

  );

};