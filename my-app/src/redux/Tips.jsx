import React from 'react';


export default class Tips extends React.Component {
	
	
	render() {
		return(
			<div>
				<div id="titleTips">Tips </div>
				<ul>
					{this.props.tips.map((tip) => 
						<li id="tip">{this.props.tips.size === 0 ? "There aren't tips for this question":tip}</li>
					)}
				</ul>
			</div>
		);

	}
}