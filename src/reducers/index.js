import { combineReducers } from 'redux';

import cityGems from './cityGems';
import firstName from './users';


export default combineReducers({
  cityGems: cityGems,
  firstName: firstName
});
