import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOGS,
  DELETE_LOGS,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOGS,
  SEARCH_LOGS,
} from './types';

// export const getLogs = () => {
//   return async (dispatch) => {
//     setLoadings();

//     const res = await fetch('/logs');
//     const data = await res.json();
//     dispatch({
//       type: GET_LOGS,
//       payload: data,
//     });
//   };
// };
//get loags from server
export const getLogs = () => async (dispatch) => {
  try {
    setLoadings();

    const res = await fetch('/logs');
    const data = await res.json();
    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.respone.statusText,
    });
  }
};
//add logs
export const addLogs = (log) => async (dispatch) => {
  try {
    setLoadings();

    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    dispatch({
      type: ADD_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.respone.statusText,
    });
  }
};

//Update logs
export const updateLog = (log) => async (dispatch) => {
  try {
    setLoadings();

    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: UPDATE_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.respone.statusText,
    });
  }
};
//search log and tech
export const searchLogs = (text) => async (dispatch) => {
  try {
    setLoadings();

    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();
    dispatch({
      type: SEARCH_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.respone.statusText,
    });
  }
};

//delete logs
export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoadings();

    await fetch(`/logs/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: DELETE_LOGS,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.respone.statusText,
    });
  }
};

//set current
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

//clear current
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

//setloading true
export const setLoadings = () => {
  return {
    type: SET_LOADING,
  };
};
