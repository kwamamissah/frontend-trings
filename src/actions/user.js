export function login(username, firstName){
  return { type: 'LOGIN_USER', username: username, firstName: firstName}
}

export function logout(history){
  localStorage.clear()
  return { type: 'LOGOUT_USER'}
}

export function profileImages(image) {
  return { type: 'GET_IMAGES', image: image}
}
