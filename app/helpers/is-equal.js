import Ember from 'ember';

export function isEqual(params/*, hash*/) {
	if(params[0] == params[1]){
		return true;
	}
	else{
		return false;
	}
}

export default Ember.Helper.helper(isEqual);
