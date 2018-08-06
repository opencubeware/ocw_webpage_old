import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { routes } from './routes'

import 'phoenix_html'

ReactDOM.render(
  <BrowserRouter children={routes} />,
  document.getElementById('react-app')
)
