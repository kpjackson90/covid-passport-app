import { ActionType } from '../action-types';
import { AuthInfo  } from '../reducers/authReducer';

interface LoginUserAction {
  type: ActionType.LOGIN_USER;
}

interface LoginUserSuccessAction {
  type: ActionType.LOGIN_USER_SUCCESS;
  payload: AuthInfo;
}

interface LoginUserErrorAction {
  type: ActionType.LOGIN_USER_ERROR;
  payload: string;
}

interface ConfirmUserAction {
  type: ActionType.CONFIRM_USER;
}

interface ConfirmUserSuccessAction {
  type: ActionType.CONFIRM_USER_SUCCESS;
  payload: AuthInfo;
}

interface ConfirmUserErrorAction {
  type: ActionType.CONFIRM_USER_ERROR;
  payload: string;
}

interface LogoutUserAction {
  type: ActionType.LOGOUT_USER;
}

interface LogoutUserActionSuccess {
  type: ActionType.LOGOUT_USER_SUCCESS;
}

interface LogoutUserActionError {
  type: ActionType.LOGOUT_USER_ERROR;
  payload: any;
}

export type Action =
  | LoginUserAction
  | LoginUserSuccessAction
  | LoginUserErrorAction
  | LogoutUserAction
  | LogoutUserActionSuccess
  | LogoutUserActionError
  | ConfirmUserAction
  | ConfirmUserSuccessAction
  | ConfirmUserErrorAction;