const initial = {
  user: [],
  favGems: [],
}

export default function(state = initial, action){
  switch(action.type){
    case 'FETCH_USER':
      return {...state, user: action.user};
    case 'FAVORITE_GEMS':
      let me = state.user.find(i => i.id === parseInt(action.userId))
      let likedGems = me.likes.map(i => i.city_gem)
      return {...state, favGems: likedGems}
    default:
      return state;
  }
}
