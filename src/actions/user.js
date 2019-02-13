export function login(username, firstName, id){
  return { type: 'LOGIN_USER', username: username, firstName: firstName, id: id}
}

export function logout(history){
  localStorage.clear()
  return { type: 'LOGOUT_USER'}
}

export function profileImages(image) {
  return { type: 'GET_IMAGES', image: image}
}

export function favGems(user){
  return { type: 'FAVORITE_GEMS', userId: user}
}
