import React, { useReducer } from 'react';
import axios from 'axios';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';

import {
  SET_ALERT,
  REMOVE_ALERT
} from '../types';

const AlertState = props => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT, payload: {msg, type}
    })

    setTimeout(() => dispatch({type: REMOVE_ALERT}), 5000);
  };

  return (
    <AlertReducer.Provider
      value={{
        alert: state.users,
        setAlert,
      }}
    >
      {props.children}
    </AlertReducer.Provider>
  );
};

export default AlertState;
