import { Result } from './result'

export interface Round {
  name: string
  event: {name: string}
  tournament: {name: string}
  results: Result[]
}
