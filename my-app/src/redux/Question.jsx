import React from 'react';

export default class Question extends React.Component {
	render() {
		return(
			<div>
				<div id="numQuestion">Question {this.props.currentQuestion + 1}</div>
				<div id="question">{this.props.question.question}</div>
			</div>	
		);
	}
}