const initial = {
  gems: [],
  filter: null,
  filteredGems: []
}

export default function(state = initial, action){
  switch(action.type){
    case 'FETCH_GEMS':
      return {...state, gems: action.gems};
    case 'FETCH_IMAGES':
      return {...state, images: action.images}
    case 'FILTER_GEMS':
      let filtered = state.gems.filter(gem => gem.category.name.includes(action.category));
      debugger
      return {...state, filteredGems: filtered}
    default:
      return state;
  }
}
