import React from 'react';


export default class Countdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 45
		};
	}

	componentDidMount() {
		const {startCount} = this.props
		this.setState({
			count: startCount
		})
		this.myInterval = setInterval(() => {
			this.setState(prevState => ({
				count: prevState.count - 1
			}))
		}, 1000)
	}

	componentWillUnmount() {
		clearInterval(this.myInterval)
	}


	render() {

		const {count} = this.state
		return(
			<div>
				<h2>Current count: {count}</h2>
			</div>
		)
	}
}