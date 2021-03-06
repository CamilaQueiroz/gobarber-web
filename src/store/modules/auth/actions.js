export function singInRequest(email, password) {
 return {
  type: '@auth/SIGN_IN_REQUEST',
  payload: { email, password },
 };
}

export function singInSuccess(token, user) {
 return {
  type: '@auth/SIGN_IN_SUCCESS',
  payload: { token, user },
 };
}

export function singUpRequest(name, email, password) {
 return {
  type: '@auth/SIGN_UP_REQUEST',
  payload: { name, email, password },
 };
}

export function singUpSuccess(token, user) {
 return {
  type: '@auth/SIGN_UP_SUCCESS',
  payload: { token, user },
 };
}

export function signFailure() {
 return {
  type: '@auth/SIGN_FAILURE',
 };
}
