import React from "react"
import { Link ,RouteComponentProps } from 'react-router-dom'
interface props extends RouteComponentProps{}

export const Home:React.FC<props>=({})=>{
    return(
      <div>
          <h1>Home Page</h1>
          
      </div>
    )
}