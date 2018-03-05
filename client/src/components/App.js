import React from 'react';
import { Switch, Route } from 'react-router-dom'

const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/head" component={Header}/>
      <Route exact path="/dash" component={Dashboard}/>
      <Route exact path="/surveys" component={SurveyNew}/>
    </Switch>
  )
};
export default App;
