import React from 'react';
import { Reset } from 'styled-reset';
import {ThemeProvider} from 'styled-components';
import { Provider } from 'react-redux';

import theme from './theme'
import Home from './pages/Home';
import store from './redux/store';


function App() {
  return (

    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset/>
        <Home/>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
