import React from 'react';
import Button from './Button';

export default class Actionbar extends React.Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}
	onClick(buttonName) {
    	this.props.onClick(buttonName);
    }
  
	render() {
		return(
			<div id="actionbar">
				<Button buttonName = "Submit" onClick = {this.onClick} disabled = {this.props.finished} />
	      		<Button buttonName = "Previous" onClick = {this.onClick} disabled = {this.props.currentQuestion === 0 || this.props.finished}/>
	      		<Button buttonName = "Next" onClick = {this.onClick} disabled = {this.props.currentQuestion === 9 || this.props.finished}/>
	      		<Button buttonName = "Play Again" onClick = {this.onClick}/>
	      	</div>
		);
	}
}
