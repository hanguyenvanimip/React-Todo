import * as types from './../constants/ActionTypes';
import {findIndex} from 'lodash';

var s4 = () => {
    return  Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var randomID = () => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

let tasks = JSON.parse(localStorage.getItem('tasks'));
let initialState =tasks?tasks: [];

let myReducer = (state = initialState,action) =>
{
	switch(action.type)
	{
		case types.LIST_ALL:
			return state;
		case types.ADD_TASK:
			let newTask = {
				id : randomID(),
				name : action.task.name,
				status : parseInt(action.task.status)
			}
			state.push(newTask);
			localStorage.setItem('tasks',JSON.stringify(state) );
			return [...state];

		case types.UPDATE_STATUS:
			let index = findIndex(state, function(o) { return o.id === action.task.id });
			state[index].status =state[index].status===1? 0:1;
			console.log(state);
			localStorage.setItem('tasks',JSON.stringify(state) );
			return [...state];
		
	    default:
	    	return state;
	}
}

export default myReducer;