import { RECEIVE_ROUND } from '../action-types'

const round = (state = {}, action) => {
  switch (action.type) {
  case RECEIVE_ROUND:
    return Object.assign({}, state, { currentRound: action.payload })
  default:
    return state
  }
}

export default round
