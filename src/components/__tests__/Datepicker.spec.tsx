import * as React from "react";

import {shallow, mount} from "enzyme";
import Datepicker from "../Date/Datepicker";


const dateInterface =(props : any)=>{
    <Datepicker
     { ...dateInterface}
     { ...props}
/>
    }
it("renders the Date picker", () => {

    const result = shallow(<Datepicker onChange={dateInterface.prototype.all}/>);

    expect(result).toBeTruthy();

});


/*describe('DatePicker', () => {
    test('datepicker calls the onChange Event', () => {
        const DateComponent = mount(<Datepicker onChange={dateInterface.prototype.onChange}/>),
            dateInput = DateComponent.find('selected');

        DateComponent.simulate('change', {target: { value: "" }});
    
        expect(onchange).toHaveBeenCalled();
    });
});*/

it("Testing  the Date picker selected value to be date  type", () => {
    const format = 'MM/DD/YYYY';
    const result = shallow(<Datepicker onChange={dateInterface.prototype.onChange}/>);
    expect((result).prop('selected')).toEqual(Date)
   

});