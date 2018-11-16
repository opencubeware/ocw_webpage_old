import { RECEIVE_ROUND } from '../action-types'
import axios from 'axios'

export const fetchRound = (tournamentId, eventId, roundId) => {
  return async (dispatch) => {
    const response = await axios.get(`/api/v1/tournaments/${tournamentId}/events/${eventId}/rounds/${roundId}`)
    return dispatch(receiveMatch(response.data))
  }
}

const receiveMatch = (payload) => {
  return {
    type: RECEIVE_ROUND,
    payload
  }
}
