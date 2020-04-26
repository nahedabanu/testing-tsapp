import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Label1 } from "./Hello"
storiesOf("Label", module)
  .add("Label Hello", () => (
  <Label1/>
  ));