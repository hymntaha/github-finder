import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USER,
  GET_USER,
  GET_REPOS,
} from '../types';

const GithubState = props => {
  const initialSTate = {
    users: [],
    user: {},
    repos: {},
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialSTate);

  return <GithubContext.Provider value={{
    users: state.users,
    user: state.user,
    repos: state.repos,
    loading: state.loading
  }}>
    {props.children}
  </GithubContext.Provider>
};

export default GithubState;
