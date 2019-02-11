const initial = {
  gems: [],
  filter: null,
  filteredGems: [],
  viewedGems: []
}

export default function(state = initial, action){
  switch(action.type){
    case 'FETCH_GEMS':
      return {...state, gems: action.gems};
    case 'FETCH_IMAGES':
      return {...state, images: action.images}
    case 'FILTER_GEMS':
      let filtered = state.gems.filter(gem => gem.category.name.includes(action.category));
      return {...state, filteredGems: filtered}
    case 'VIEWED_GEMS':
      let viewed = state.viewedGems.find(x => x.id === action.gem.id)
        if(!viewed) {
          let recentlyViewed = state.viewedGems.concat(action.gem)
          return {...state, viewedGems: recentlyViewed}
        }
    default:
      return state;
  }
}
