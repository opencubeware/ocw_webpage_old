import * as React from 'react'
import { Route } from 'react-router-dom'
import Root from './Root'
import { Events } from './components/static/Events'
import { About } from './components/static/About'
import { Team } from './components/static/Team'
import { Contact } from './components/static/Contact'
import { Home } from './components/static/Home'
import { News } from './components/static/News'

export const routes = (
  <Root>
    <Route exact={true} path="/" component={Home} />
    <Route path="/news" component={News} />
    <Route path="/events" component={Events} />
    <Route path="/about" component={About} />
    <Route path="/team" component={Team} />
    <Route path="/contact" component={Contact} />
  </Root>
)
