import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import "./assets/main.css";
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { createMuiTheme } from '@material-ui/core/styles';

import store from "./components/Zenreact/store/store"


// const store = createStore(allReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store= { store } >
      <App /> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

{/* <DataProvider>
<App />  
</DataProvider> */}
