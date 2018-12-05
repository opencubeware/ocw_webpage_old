import { RECEIVE_ROUND, RECEIVE_EVENTS_WITH_ROUNDS } from '../action-types'
import axios from 'axios'

export const fetchRound = (tournamentName, eventName, roundName) => {
  return async (dispatch) => {
    const response =
      await axios.get(`/api/v1/tournaments/${tournamentName}/events/${eventName}/rounds/${roundName}`)
    return dispatch(receiveRound(response.data))
  }
}

const receiveRound = (payload) => {
  return {
    type: RECEIVE_ROUND,
    payload
  }
}

export const fetchEventsWithRounds = (tournamentName) => {
  return async (dispatch) => {
    const response =
      await axios.get(`/api/v1/tournaments/${tournamentName}/events_with_rounds`)
    return dispatch(receiveEventsWithRounds(response.data))
  }
}

const receiveEventsWithRounds = (payload) => {
  return {
    type: RECEIVE_EVENTS_WITH_ROUNDS,
    payload
  }
}
