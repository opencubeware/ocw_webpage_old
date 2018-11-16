import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { EventsPage } from './components/static/Events'
import { AboutPage } from './components/static/About'
import { TeamPage } from './components/static/Team'
import { ContactPage } from './components/static/Contact'
import { HomePage } from './components/static/Home'
import { NewsPage } from './components/static/News'
import LivePage from './containers/live-page'
import Navbar from './components/navbar/Navbar'

const StaticPages = () => (
  <div>
    <Navbar />
    <Route exact={true} path="/" component={HomePage} />
    <Route path="/news" component={NewsPage} />
    <Route path="/events" component={EventsPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/team" component={TeamPage} />
    <Route path="/contact" component={ContactPage} />
  </div>
)
export const routes = (
  <Switch>
    <Route path="/tournaments/:tournamentId/events/:eventId/rounds/:roundId" component={LivePage} />
    <Route component={StaticPages} />
  </Switch>
)
