import { ActionType } from '../action-types';
import { Action } from '../actions';

export interface AuthInfo {
  email: string;
  token: string;
}

interface AuthState {
  loading: boolean;
  error: string | null;
  auth?: AuthInfo;
}

const initialState = {
  loading: false,
  error: null,
  auth: {
    email: '',
    token: '',
  },
};

const reducer = (
  action: Action,
  state: AuthState = initialState
): AuthState => {
  switch (action?.type) {
    case ActionType.LOGIN_USER:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        auth: action.payload,
      };
    case ActionType.LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
