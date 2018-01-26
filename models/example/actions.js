export const actionTypes = {
  FAILURE: 'EXAMPLE_FAILURE',
  INCREMENT: 'EXAMPLE_INCREMENT',
  LOAD_DATA: 'EXAMPLE_LOAD_DATA',
  LOAD_DATA_SUCCESS: 'EXAMPLE_LOAD_DATA_SUCCESS',
  START_CLOCK: 'EXAMPLE_START_CLOCK',
  TICK_CLOCK: 'EXAMPLE_TICK_CLOCK'
}

export function failure (error) {
  return {
    type: actionTypes.FAILURE,
    error
  }
}

export function increment () {
  return {type: actionTypes.INCREMENT}
}

export function loadData () {
  return {type: actionTypes.LOAD_DATA}
}

export function loadDataSuccess (data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data
  }
}

export function startClock () {
  return {type: actionTypes.START_CLOCK}
}

export function tickClock (isServer) {
  return {
    type: actionTypes.TICK_CLOCK,
    light: !isServer,
    ts: Date.now()
  }
}
