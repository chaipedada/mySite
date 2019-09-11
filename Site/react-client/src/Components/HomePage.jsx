import React, { Component } from 'react';
import background from './background.jpg'


class HomePage extends Component {
  render() {
    return (
      <div>
     	<img src={background} alt="background" style={{width: '100%'}}/>
		<div class="top-left fadeIn">Engineer | Photographer | UCLA Bruin.</div>
	  </div>
    )
  }
}
export default HomePage;