import { combineReducers } from 'redux'
import round from './rounds'
import eventsWithRounds from './events-with-rounds'

export default combineReducers({round, eventsWithRounds})
