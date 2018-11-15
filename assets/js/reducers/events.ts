import { RECEIVE_EVENT } from '../action-types'

const initialState = { event: {} }

const event = (state = initialState, action) => {
  switch (action.type) {
  case RECEIVE_EVENT:
    return Object.assign({}, state, { current_event: action.event })
  default:
    return state
  }
}

export default event
