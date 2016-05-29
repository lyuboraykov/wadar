import React from 'react';
import { render } from 'react-dom';

import {App} from './app';
import {Radar} from './radar';

(() => {
  render(<App />, document.getElementById('content'));
  Radar.init();
})();
