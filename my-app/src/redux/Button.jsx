import React from 'react';

//const buttonStyle = {
//  height: '30px',
//  width: '100px',
  //style = {buttonStyle}
//};

export default class Button extends React.Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
    	this.props.onClick(this.props.buttonName);
}

    render(){
    	return (
    		<button id="button" onClick = {this.onClick} disabled = {this.props.disabled}>{this.props.buttonName}</button>
    		);
    }
}
