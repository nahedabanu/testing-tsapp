import React from "react"
import {Link,Route,BrowserRouter,NavLink} from 'react-router-dom'
import {Home} from "./Home"
import {About} from "./About"

export const Routing:React.FC<any > = () =>{
    return(
      <div>
              <BrowserRouter>
           
                <nav>
                  
                <Link to="/">Home</Link>
                { '|'}
                <Link to="/About">About</Link>
                </nav>
               
                
                <Route
                    path="/"
                    component={Home}
                    exact 
                />
                <Route
                    path="/About"
                    component={About} 
                />
                </BrowserRouter>
                
            </div>
      
    )
}
