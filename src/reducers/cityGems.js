const initial = {
  gems: [],
  filteredGems: [],
  favGems: [],
  viewedGems: [],
}

export default function(state = initial, action){
  switch(action.type){
    case 'FETCH_GEMS':
      return {...state, gems: action.gems};
    case 'FILTER_GEMS':
      let filtered = state.gems.filter(gem => gem.category.name.includes(action.category));
      return {...state, filterGems: filtered}
    case 'FAVORITE_GEMS':
    debugger
    // state.gems.filter(gem => gem.likes.length > 0)
      // let likes = state.gems.filter(gem => gem.likes.length > 0)
      // let filterLikes = likes.filter(gem => gem.user_id.includes(action.userId))
      //  return {...state, favGems: filterLikes}
    case 'VIEWED_GEMS':
      let viewed = state.viewedGems.find(x => x.id === action.gem.id)
        if(!viewed) {
          let recentlyViewed = [action.gem, ...state.viewedGems ]
          return {...state, viewedGems: recentlyViewed}
        } else {
          return state;
        }
    default:
      return state;
  }
}
