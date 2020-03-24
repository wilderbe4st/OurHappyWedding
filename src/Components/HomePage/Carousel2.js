import React from 'react'

const imgUrls = [
	require('../../resources/images/1.jpg'), 
	require('../../resources/images/2.jpg'),
	require('../../resources/images/3.jpg')
];

class Carousel extends React.Component {
	constructor (props) {
		super(props);
		
		this.state = {
			currentImageIndex: 0
		};
		
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}
	
	previousSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		
		this.setState({
			currentImageIndex: index
		});
	}
	
	nextSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index
		});
	}
	
	render () {
		return (
			<div className="carousel" style={{background:'black'}}>
				<Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
				<img src={imgUrls[this.state.currentImageIndex]} style={{width:'96.15%',paddingLeft:'1.15%'}}/>
				<Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
			</div>
		);
	}
}

const Arrow = ({ direction, clickFunction, glyph }) => (
	<div 
		className={ `slide-arrow ${direction}` } 
		onClick={ clickFunction }
        style={{marginTop:'17%',color:'white'}} 
        >
		{ glyph }
        
	</div>
);

export default Carousel
