import React from 'react';


export default class Countdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			time: {},
			min: 1,
			sec: 10
		};
		this.timer = 0;
		this.start = this.start.bind(this);
		this.countDown = this.countDown.bind(this);
	}
	secToFinish(secs) {
		//let divisor_for_minutes = secs % (60*60);
		//let min = Math.floor(divisor_for_minutes / 60);

		//let divisor_for_seconds = divisor_for_minutes % 60;
		//let sec = Math.ceil(divisor_for_seconds);

		let obj = {
			'm': this.state.min,
			's': this.state.sec
		};
		return obj;
	}


	componentDidMount() {
		/*const {startCount} = this.props
		this.setState({
			count: startCount
		})
		this.myInterval = setInterval(() => {
			this.setState(prevState => ({
				count: prevState.count - 1
			}))
		}, 1000)
		*/
		let timeLeft = this.secToFinish(this.state.sec);
		this.setState({ time: timeLeft});
	}

	//componentWillUnmount() {
	//	clearInterval(this.myInterval)
	//}
	start() {
		if (this.timer === 0 && this.state.sec > 0) {
			this.timer = setInterval(this.countDown, 1000);
		}
	}

	countDown() {
		let min = this.state.min;
		let sec = this.state.sec - 1;
		
		if (sec < 0) {
			if (min !== 0) {
				min = min - 1;
				sec = 59;
			} else {
				this.props.final(true);
				clearInterval(this.timer);
			}
		}
		this.setState ({
			time: this.secToFinish(sec),
			min: min,
			sec: sec
		});
	}


	render() {
		this.start();
		//const {count} = this.state
		return(
			<div id="countDown">
				<h2>0{this.state.time.m}m : {this.state.time.s}s</h2>
			</div>
		)
	}
}

//Referencia en:
//https://stackoverflow.com/questions/40885923/countdown-timer-in-react