import { LOGIN, LOGOUT } from './types'
/*

        const deleteTodo = {
            id
        }
        const action = {
            type: 'delete',
            payload: deleteTodo,
        }
        dispatch(action);
*/
export const AuthActions = (state, dispatch) => {

  const loginAction = (user) => {
    dispatch({
      type: LOGIN,
      payload: user
    })
  }

  const logoutAction = () => {
    dispatch({ type: LOGOUT })
  }

  return { loginAction, logoutAction }
}
