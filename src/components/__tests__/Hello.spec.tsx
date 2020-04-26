import * as React from "react";

import {shallow} from "enzyme";
import {Label1} from "../Hello";
it("renders the heading", () => {

    const result = shallow(<Label1 />).contains(<h1>Hello!</h1>);

    expect(result).toBeTruthy();

});