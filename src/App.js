import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import HomePage from './components/HomePage'
import AboutUsPage from './components/AboutUsPage'
import ContactPage from './components/ContactPage'
import NotFoundPage from './components/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <div className="outer_div">
        <Switch>
          <Route path="/" component={HomePage} exact={true}/>
          <Route path="/about" component={AboutUsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
