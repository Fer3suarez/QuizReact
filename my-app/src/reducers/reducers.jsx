import { combineReducers } from 'redux';
import { QUESTION_ANSWER, CHANGE_QUESTION, SUBMIT, INIT_QUESTIONS} from './actions';

function score(state = 0, action = {}) {
	switch(action.type) {
		case INIT_QUESTIONS:
			return 0;
		case SUBMIT:
			var newScore = state;
			action.payload.questions.map((question) => {
				if (question.userAnswer) {
					if (question.answer.trim().toLowerCase() === question.userAnswer.trim().toLowerCase()) {
					newScore++;
					}
				} 
			})
			return newScore;
		default:
			return state;
	}
} 

function finished(state = false, action = {}) {
	switch(action.type) {
		case INIT_QUESTIONS:
			return false;
		case SUBMIT:
			return true;
		default:
			return state;
	}
}

function currentQuestion(state = 0, action = {}) {
	switch(action.type) {
		case INIT_QUESTIONS:
			return state;
		case CHANGE_QUESTION:
			var newState;
			action.payload.buttonName === "Next" ? newState = state + 1:newState = state - 1;
			return newState
		default: 
			return state;
	}
}

function questions(state = [], action = {}) {
	switch(action.type) {
		case INIT_QUESTIONS:
			return action.payload.questions;
		case QUESTION_ANSWER:
			return state.map((question, i) => {
				return { ...question,
							userAnswer: action.payload.index === i ? action.payload.answer:question.userAnswer}
			})
		default:
			return state;
	}
}
/*function countdown(state = {count: 45, running: false}, action = {}) {
	switch(action.type) {
		case QUESTION_ANSWER: 
			return {count : state.count, running: true};
				case INIT_QUESTIONS:
					return {count : 45, running: false};
				case COUNT_DOWN:
					var newState = tick(state);
					return newState
		default:
			return state;

	}
}
*/
//function tick(state) {
//
//	var newState;
//
//	if (state.count === 0){
//
//		 newState = {count: 0, running: false};
//
//	} else {
//		 newState = {seconds: state.seconds - 1, running: true};
//	}
//
//	return newState;
//}

const GlobalState = (combineReducers({
	score,
	finished,
	currentQuestion,
	questions
}));

export default GlobalState;