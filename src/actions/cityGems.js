//create an action to fetch gems from backend

export function fetchGems(gems){
  return { type: 'FETCH_GEMS', gems: gems}
}

export function filterGems(category){
  return { type: 'FILTER_GEMS', category: category }
}

export function fetchImages(images){
  return { type: 'FETCH_IMAGES', images: images }
}

export function viewedGems(gem){
  return { type: 'VIEWED_GEMS', gem: gem}
}

export function favGems(user){
  return { type: 'FAVORITE_GEMS', userId: user}
}
