const initial = {
  user: [],
  favs: []
}

export default function(state = initial, action){
  switch(action.type){
    case 'FETCH_USER':
      return {...state, user: action.user};
    case 'FAVORITE_GEMS':
      let me = state.user.find(i => i.id === parseInt(action.userId))
      let liked = me.likes.map(i => i.city_gem)
      liked.reverse()
      return {...state, favs: liked}
    default:
      return state;
  }
}
