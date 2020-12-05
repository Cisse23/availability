import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Home from './Pages'
import FolderTree from './FolderTree';
import About from './Pages/About';
import Users from './Pages/Users';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/foldertree" component={FolderTree} />
        <Route path="/users" component={Users} />
      </Switch>

    </BrowserRouter>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
