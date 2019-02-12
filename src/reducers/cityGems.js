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
      // let filterLikes = state.gems.filter(gem => gem.likes.includes()
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
