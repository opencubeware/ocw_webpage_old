import { RECEIVE_EVENTS_WITH_ROUNDS } from '../action-types'

const eventsWithRounds = (state = {}, action) => {
  switch (action.type) {
  case RECEIVE_EVENTS_WITH_ROUNDS:
    return Object.assign({}, state, { eventsWithRounds: action.payload })
  default:
    return state
  }
}

export default eventsWithRounds
