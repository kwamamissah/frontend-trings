const initial = {
  user: [],
  favGems: [],
}

export default function(state = initial, action){
  switch(action.type){
    case 'FETCH_USER':
      return {...state, user: action.user};
    default:
      return state;
  }
}
