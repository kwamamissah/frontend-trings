export function login(username){
  return { type: 'LOGIN_USER', username: username}
}

export function logout(history){
  localStorage.clear()
  return { type: 'LOGOUT_USER'}
}
