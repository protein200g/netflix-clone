import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import { darkTheme } from './theme';
import { ThemeProvider } from 'styled-components';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  color:black;
  line-height: 1.2;
  background:linear-gradient(135deg,#e09,#d0e);
}
a {
  text-decoration:none;
  color:inherit;
}
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RecoilRoot>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </RecoilRoot>
);
