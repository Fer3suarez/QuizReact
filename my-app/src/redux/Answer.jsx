
import React from 'react';


export default class Answer extends React.Component {
	constructor(props) {
		super(props);
		this.answerOnAnswer = this.answerOnAnswer.bind(this);
	}
	answerOnAnswer(input){
		this.props.contentOnAnswer(input);
	}
	render() {
		return(
			<div id="answer">
				<input id="inputAnswer" placeholder="Type your answer here" type="text" value={this.props.question.userAnswer || ""} onChange = {(e) => {
					this.answerOnAnswer(e.target.value);
				}}/>
			</div>
		);

	}
}