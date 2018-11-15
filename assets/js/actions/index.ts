import { RECEIVE_EVENT } from '../action-types'
import axios from 'axios'

export const receiveEvent = (event) => {
  return {
    type: RECEIVE_EVENT,
    event
  }
}
export const fetchEvent = (tournamentId, eventId, roundId) => {
  return async (dispatch) => {
    try {
      const response =
        await axios.get(`/api/v1/tournaments/${tournamentId}/events/${eventId}/rounds/${roundId}`)
      dispatch(receiveEvent(response.data.data))
    } catch (error) {
      console.log(error)
    }
  }
}
