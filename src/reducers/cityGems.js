const initial = {
  gems: [],
  filter: null,
  filterGems: []
}

export default function(state = initial, action){
  switch(action.type){
    case 'FETCH_GEMS':
      return {...state, gems: action.gems};
    case 'FILTER_GEMS':
      let filtered = state.gems.filter(gem => gem.category_id === action.category);
      debugger
      return {...state, filterGems: filtered}
    default:
      return state;
  }
}
