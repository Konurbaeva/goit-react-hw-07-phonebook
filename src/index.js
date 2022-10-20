import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './styleConfig/theme';
import { store } from './redux/store';
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
