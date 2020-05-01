import * as React from "react";
import {shallow} from "enzyme";
import Button from "../Button/Button"
import IButtonProps from "../Button/Button"

import { Search } from "react-feather";
describe('Button Rendering', () => {
    test(' Button should render', () => {
      const wrapper = shallow(
        <Button/>
      )
  
      expect(wrapper.exists()).toBeTruthy()
      expect(wrapper).toMatchSnapshot()
    })
  })


  describe(' Test Button with search icon ', () => {
    test(' Button for search component', () => {
      const wrapper = shallow(
        <Button/>
      )
  
      expect(wrapper.find(Search).length.toFixed(1))
     
    })
  })
  const buttonInt =(props : any)=>{
      <Button
       { ...buttonInt}
       { ...props}
/>
      }
  
  it('should pop up alert on click of a button', () => {
    window.alert = jest.fn();
    
    //const expectedArg = 0;
    const output = shallow(
     <Button onClick={buttonInt.prototype.onClick}/>
    );
    //console.log(output.debug())
    //console.log(output.html());
    output.simulate('click');
    expect(window.alert).toHaveBeenCalled();
  });

  


  
   