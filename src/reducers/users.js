export default function(state = localStorage.getItem('name'), action){
  switch(action.type){
    case 'LOGIN_USER':
      return action.user;
    case "LOGOUT_USER":
      return null 
    default:
      return state;
  }
}
