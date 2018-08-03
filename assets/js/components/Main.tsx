import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { About } from './static/About';
import { Competitors } from './static/Competitors';
import { Contact } from './static/Contact';
import { Dev } from './static/Dev';
import { Events } from './static/Events';
import { Home } from './static/Home';
import { News } from './static/News';
import { Team } from './static/Team';

export const Main = () => (
  <div>
    <Switch>
      <Route exact={true} path='/' component={Home}/>
      <Route path='/news' component={News}/>
      <Route path='/events' component={Events}/>
      <Route path='/competitors' component={Competitors}/>
      <Route path='/dev' component={Dev}/>
      <Route path='/about' component={About}/>
      <Route path='/team' component={Team}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  </div>
)