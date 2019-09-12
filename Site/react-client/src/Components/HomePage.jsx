import React, { Component } from 'react';
import background from './background.jpg'


class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			job_title: 'programmer',
			fav_hobby: 'photography'
		}
	}

	increment() {
		this.setState((prevState) => {
			return {count: prevState.count + 1}
		});
	}

	decrement() {
		this.setState((prevState) => {
			return {count: prevState.count - 1}
		});
	}


 	render() {
 		return (
 			<div>
 				<div class="home-container">
					<img class="background-image" src={background} alt="background" style={{width: '100%'}}/>
					<div class="top-left fadeIn">Engineer | Photographer | UCLA Bruin.</div>
				</div>
				<div class="organizations org-text">Organizations
					<p> I am a {this.state.job_title}</p>
					<p> My favorite hobby is {this.state.fav_hobby}</p>
					<p>
						<button onClick={() => this.increment()}>+1</button> 
						Count: {this.state.count}
						<button onClick={() => this.decrement()}>-1</button>
					</p>
				</div>
			</div>
		)
	}
}
export default HomePage;