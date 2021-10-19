import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//import components not using layout
import Login from './components/login/Login';
import Chat from './components/chat/Chat';


function App() {
  return (
    <Router forceRefresh={true}>
      <Route exact path='/' component={Login}/>
      <Route exact path="/chat" component={Chat}/>
  </Router>
  );
}
export default App;
