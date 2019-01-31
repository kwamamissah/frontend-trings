export default function(state = [], action){
  switch(action.type){
    case 'FETCH_GEMS':
      return action.gems;
    default:
      return state;
  }
}
