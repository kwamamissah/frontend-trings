import { combineReducers } from 'redux';

import cityGems from './cityGems';
import firstName from './users';
import profile from './profile'



export default combineReducers({
  cityGems: cityGems,
  firstName: firstName,
  profile: profile

});
