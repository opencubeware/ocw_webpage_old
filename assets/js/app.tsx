import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import { BrowserRouter } from 'react-router-dom'
import { routes } from './routes'

import 'phoenix_html'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter children={routes} />
  </Provider>,
  document.getElementById('react-app')
)
