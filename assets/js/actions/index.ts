import { RECEIVE_ROUND } from '../action-types'
import axios from 'axios'

export const fetchRound = (tournamentName, eventName, roundName) => {
  return async (dispatch) => {
    const response =
      await axios.get(`/api/v1/tournaments/${tournamentName}/events/${eventName}/rounds/${roundName}`)
    return dispatch(receiveMatch(response.data))
  }
}

const receiveMatch = (payload) => {
  return {
    type: RECEIVE_ROUND,
    payload
  }
}
