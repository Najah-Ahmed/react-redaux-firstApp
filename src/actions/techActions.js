import {
  GET_TECH,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from './types';

//get tech from server
export const getTechs = () => async (dispatch) => {
  try {
    setLoadings();

    const res = await fetch('/techs');
    const data = await res.json();
    dispatch({
      type: GET_TECH,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.respone.statusText,
    });
  }
};
//add tech
export const addTech = (tech) => async (dispatch) => {
  try {
    setLoadings();

    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.respone.statusText,
    });
  }
};
//delete techs
export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoadings();

    await fetch(`/techs/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.respone.statusText,
    });
  }
};

//setloading true
export const setLoadings = () => {
  return {
    type: SET_LOADING,
  };
};
