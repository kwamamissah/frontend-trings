//create an action to fetch gems from backend

export function fetchGems(gems){
  console.log(gems)
  return { type: 'FETCH_GEMS', gems: gems}
}
