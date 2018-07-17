import React, { Component } from 'react';
import './Breadcrumb.css';

class Breadcrumb extends Component {

	render () {
		return (
			<div>
				<br/>
				<ul class="breadcrumb">
					<li>Bldg</li>
					<li><a href="#">123</a></li>
					<li><a href="#">125</a></li>
					<li><a href="#">151</a></li>
				</ul>
			</div>
		);
	}
}

export { Breadcrumb }
