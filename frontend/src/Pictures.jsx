import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Box from 'react-layout-components';

class Pictures extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    alert(`selected=${selectedIndex}, direction=${e.direction}`);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
		<Box width={500} height={500}>
		  <Carousel
			activeIndex={index}
			direction={direction}
			onSelect={this.handleSelect}
		  >
			<Carousel.Item>
			  <img width={900} height={500} alt="900x500" src="/carousel.png" />
			  <Carousel.Caption>
				<h3>First slide label</h3>
				<p>Gangsta sapizzle velizzle, break it down volutpizzle, suscipit quis, nizzle vizzle, dawg</p>
			  </Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
			  <img width={900} height={500} alt="900x500" src="/carousel.png" />
			  <Carousel.Caption>
				<h3>Second slide label</h3>
				<p>In brizzle habitasse shiz dictumst. Pizzle dapibizzle.</p>
			  </Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
			  <img width={900} height={500} alt="900x500" src="/carousel.png" />
			  <Carousel.Caption>
				<h3>Third slide label</h3>
				<p>
				  Lorem crazy funky fresh nizzle amizzle, black adipiscing shizzle my nizzle.
				</p>
				  </Carousel.Caption>
				</Carousel.Item>
		  </Carousel>
		</Box>
		);
	  }
}


export { Pictures }
