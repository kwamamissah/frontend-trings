const initial = {
  gems: [],
  filteredGems: [],
  viewedGems: []
}

export default function(state = initial, action){
  switch(action.type){
    case 'FETCH_GEMS':
      return {...state, gems: action.gems};
    case 'FILTER_GEMS':
      let filtered = state.gems.filter(gem => gem.category.name.includes(action.category));
      return {...state, filterGems: filtered}
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
