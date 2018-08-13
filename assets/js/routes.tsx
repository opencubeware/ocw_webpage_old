import * as React from 'react'
import { Route } from 'react-router-dom'
import Root from './Root'
import { EventsPage } from './components/static/Events'
import { AboutPage } from './components/static/About'
import { TeamPage } from './components/static/Team'
import { ContactPage } from './components/static/Contact'
import { HomePage } from './components/static/Home'
import { NewsPage } from './components/static/News'
import { TournamentShowPage } from './components/tournament/tournament-show-page'

export const routes = (
  <Root>
    <Route exact={true} path="/" component={HomePage} />
    <Route path="/news" component={NewsPage} />
    <Route path="/events" component={EventsPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/team" component={TeamPage} />
    <Route path="/contact" component={ContactPage} />
    <Route path="/tournaments/:tournament_id" component={TournamentShowPage} />
  </Root>
)
