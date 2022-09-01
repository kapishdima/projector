import { createTheme, NextUIProvider } from '@nextui-org/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './index.css';

const theme = createTheme({
  type: 'dark',
  theme: {
    fonts: {
      sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <NextUIProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>,
);
