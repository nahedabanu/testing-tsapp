import { configure } from '@storybook/react';

const req = require.context('../src/components', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}
configure(loadStories, module);

import { withKnobs } from "@storybook/addon-knobs";
import { addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
addDecorator(withKnobs);
addDecorator(withInfo);