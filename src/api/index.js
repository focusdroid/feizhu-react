import fetch from './fetch'
import { baseUrl } from "./url";

export function getAPI (obj) {
  return fetch.requestget(`${ baseUrl }`, obj)
}
