import React from "react";
import ReactDOM from "react-dom";
import {MyComponent as Hooks} from "../Hooks/Hooks";
import { getByTestId, render } from "@testing-library/react";
import { shallow } from "enzyme";
//import { render, fireEvent, getByTestId} from "react-testing-library";
describe('Hooks Rendering', () => {
  test(' Hooks should render', () => {
    const wrapper = shallow(
      <Hooks/>
    )

    expect(wrapper.exists()).toBeTruthy()
  })
})
test('Initial value is 0',() =>{
  const wrapper =shallow(<Hooks/>)
  //expect(wrapper.find('count').text()).toEqual("0");
  expect(wrapper.find('label').render().text()).toEqual('Count value is :0');
})

  