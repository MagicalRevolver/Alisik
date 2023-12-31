import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core';

import theme from './utils/theme';

import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme} >
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);