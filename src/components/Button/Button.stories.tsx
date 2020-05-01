import { storiesOf, getStorybook } from '@storybook/react';
import { text, boolean, number,select, color} from '@storybook/addon-knobs'
import React from 'react';
import Button from './Button';
import { X, Search } from 'react-feather';
import {actions, decorate, action} from '@storybook/addon-actions'


storiesOf("Button", module)
  .add("Search Button",  () => (
    <Button buttonText="Search"  onClick={action("clicked")} backgroundColor={""} flag={2} color={""} 
     > Search</Button>
  ))
  .add("Close Button",  () => (
    <Button buttonText="Close" backgroundColor={""} flag={1} color={""} click={true}
     > Close</Button>
  ))
  .add("Disabled Button",  () => (
    <Button buttonText="Disabled" backgroundColor={"red"} flag={1} color={""} click={true}
     > Close</Button>
  ))
  
  .add("Button with Knobs",
  () => (<Button  buttonText="with KNOBS" backgroundColor={color("Background","blue","Background")} 
  flag={number("Icons from 1-3",0)}
  > Button Knobs</Button> 
  ));
