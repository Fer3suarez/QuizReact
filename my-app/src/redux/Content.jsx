import React from 'react';
import Question from './Question';
import Answer from './Answer';
import Tips from './Tips';
import Countdown from './Countdown';



export default class Content extends React.Component {
	constructor(props) {
		super(props);
		this.contentOnAnswer = this.contentOnAnswer.bind(this);
	}
	contentOnAnswer(input) {
		this.props.gameOnAnswer(input);
	}
	render() {
		if (this.props.finished === true) {
			return(
				<div id="gameOver">
					<h1 id="msgGO">GAME OVER</h1>
					<div id="msgGO">
						HAS CONSEGUIDO {this.props.score} PUNTOS.
					</div>
				</div>
				)
		}
		return(
			<div id="contentAll">
				<img id="imagen" src = {this.props.gameQuestion.attachment.url} alt="imag"/>
				<Countdown startCount= '45'/>
				<div id="content">
					<Question question = {this.props.gameQuestion} currentQuestion = {this.props.currentQuestion}/>
					<Answer contentOnAnswer = {this.contentOnAnswer}
							question = {this.props.gameQuestion}/>
					<Tips tips = {this.props.gameQuestion.tips}/>
					
				</div>
				
			</div>
		);
	}
}


