var React = require('react');
var Twit = require('twit'); //dependicy to handle the request
var twit_keys = require('./twit_keys');//authentication keys and tokens

var styles = {
	background: "lightgray",
	height: 400,
	width: '400%',
	position:'absolute',
	zIndex:98,
	left:'0'
}

var outerStyle = {
	width:'100%',
	position: "relative",
	height: 400,
	overflow: 'hidden'
}

var innerStyleContainer={
	width:'25%',
	height:400,
	float:'left'
}
var innerStyle = {
	height:400,
	width:'33.3%',
	fontSize:200,
	color:'white',
	float:'left',
}

var innerStyle2 = {
	height:400,
	width:'33.4%',
	fontSize:200,
	color:'white',
	float:'left',
}

var Carrousel = React.createClass({

	getInitialState: function() {
		return {current : 0}
	},

	handleLeftClick: function(){
	
		if(this.state.current != -300){
			var stop = this.state.current -100;
			var id = setInterval(frame.bind(this), 1);
			function frame() {
				this.setState({current : this.state.current - 1});
				if (this.state.current == stop) {

					console.log(styles.left+" "+this.state.current);
					clearInterval(id);
					styles.left = parseFloat(styles.left) - 1 +'%';
					this.forceUpdate();

				}else {
					var actual = parseFloat(styles.left);
					styles.left = actual - 1 +'%'; 
				}
			}
		}

		else{
			var stop = 0;
			var id = setInterval(frame.bind(this), 1);
			function frame() {
				this.setState({current : this.state.current + 5});
				if (this.state.current == stop) {
					clearInterval(id);
					styles.left = parseFloat(styles.left) + 5 +'%';
					this.forceUpdate();
				}else {
					var actual = parseFloat(styles.left);
					styles.left = actual + 5 +'%';;
				}
			}
		}
	},

	handleRightClick: function(){

		if(this.state.current != 0){
			var stop = this.state.current +100;
			var id = setInterval(frame.bind(this), 1);
			function frame() {
				this.setState({current : this.state.current + 1});
				if (this.state.current == stop) {

					console.log(styles.left+" "+this.state.current);
					clearInterval(id);
					styles.left = parseFloat(styles.left) + 1 +'%';
					this.forceUpdate();

				}else {
					var actual = parseFloat(styles.left);
					styles.left = actual + 1 +'%'; 
				}
			}
		}

		else{
			var stop = -300;
			var id = setInterval(frame.bind(this), 1);
			function frame() {
				this.setState({current : this.state.current - 5});
				if (this.state.current == stop) {
					clearInterval(id);
					styles.left = parseFloat(styles.left) - 5 +'%';
					this.forceUpdate();
				}else {
					var actual = parseFloat(styles.left);
					styles.left = actual - 5 +'%';;
				}
			}
		}
		
	},

	render: function(){
		return (<div style={outerStyle}>
					<span style={{position:'absolute',left:0,top:'50%',fontSize:30,zIndex:99}} onClick={this.handleRightClick}>&#8592;</span>
			    	<span style={{position:'absolute',right:0,top:'50%',fontSize:30,zIndex:99}} onClick={this.handleLeftClick}>&#8594;</span>
			    	<div style={styles}>
			    	 	<div style={innerStyleContainer}>
			    	 		<div style={innerStyle}>1</div>
			    			<div style={innerStyle}>2</div>
			    			<div style={innerStyle2}>3</div>
			    	 	</div>
			    	 	<div style={innerStyleContainer}>
			    	 		<div style={innerStyle}>4</div>
			    			<div style={innerStyle}>5</div>
			    			<div style={innerStyle2}>6</div>
			    	 	</div>
			    	 	<div style={innerStyleContainer}>
			    	 		<div style={innerStyle}>7</div>
			    			<div style={innerStyle}>8</div>
			    			<div style={innerStyle2}>9</div>
			    	 	</div>
			    	 	<div style={innerStyleContainer}>
			    	 		<div style={innerStyle}>10</div>
			    			<div style={innerStyle}>11</div>
			    			<div style={innerStyle2}>12</div>
			    	 	</div>

			    	</div>
				</div>)
	}
});

module.exports = Carrousel;