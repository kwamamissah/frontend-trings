import { combineReducers } from 'redux';

import cityGems from './cityGems';
import username from './users';


export default combineReducers({
  cityGems: cityGems,
  username: username
});
