import _ from 'lodash';
import actionType from '../constants';

let initialState = {
  sections: []
}

export default (state = initialState, action) => {
  let newState = _.merge({}, state)
  switch(action.type) {
  	case actionType.LOAD_SECTIONS_SECCESS:
  		newState.sections = action.payload
  		return newState
    default:
      return state
  }
}