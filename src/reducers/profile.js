const initial = {
  user: [],
  favs: []
}

export default function(state = initial, action){
  switch(action.type){
    case 'FETCH_USER':
      let self = action.user.find(i => i.id === parseInt(localStorage.id))
      let likedGems = self.likes.map(i => i.city_gem)
      return {...state, user: action.user, favs: likedGems.reverse()};
    case 'FAVORITE_GEMS':
      let me = state.user.find(i => i.id === parseInt(action.userId))
      let liked = me.likes.map(i => i.city_gem)
      liked.reverse()
      return {...state, favs: liked}
    default:
      return state;
  }
}
