import { RECEIVE_EVENTS } from '../action-types'

const initialState = { event: {} }

const event = (state = initialState, action) => {
  switch (action.type) {
  case RECEIVE_EVENTS:
    return Object.assign({}, state, { current_event: action.event })
  default:
    return state
  }
}

export default event
