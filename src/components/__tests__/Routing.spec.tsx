import React from 'react';

import ReactDOM from 'react-dom';

import { shallow, mount } from 'enzyme';

import { MemoryRouter } from 'react-router';

import {Home} from "../Routing/Home"
import {About } from "../Routing/About"
import {Routing} from "../Routing/App"


describe('routes using memory router', () => {
    it('should show Home component for / router (using memory router)', () => {
      const component = mount( <MemoryRouter initialEntries = {['/']} >
          <Routing/>
        </MemoryRouter>
      );
      expect(component.find(Home)).toHaveLength(1);
    })
})
