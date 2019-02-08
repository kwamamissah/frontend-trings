//create an action to fetch gems from backend

export function fetchGems(gems){
  return { type: 'FETCH_GEMS', gems: gems}
}

export function filterGems(category = 1){
  return { type: 'FILTER_GEMS', category: category }
}

export function fetchImages(images){
  return { type: 'FETCH_IMAGES', images: images }
}
