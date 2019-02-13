export function fetchUser(user){
  return { type: 'FETCH_USER', user: user}
}

export function favGems(user){
  return { type: 'FAVORITE_GEMS', userId: user}
}
