var React = require('react');

var styles = {
	background: "red",
	height: 400,
	width: '400%',
	position:'absolute',
	zIndex:99,
	left:0
}

var outerStyle = {
	width:'100%',
	position: "relative",
	height: 400,
	overflow: 'hidden'
}

var innerStyle = {
	height:400,
	width:'25%',
	border:'1px solid white',
	padding:30,
	fontSize:30,
	color:'white',
	float:'left'
}

var Carrousel = React.createClass({

	getInitialState: function() {
		return {current : 0}
	},

	handleLeftClick: function(){
		console.log(styles.left)
		if(this.state.current == 0){
			var stop = 600;
			var id = setInterval(frame.bind(this), 1);
			function frame() {
				this.setState({current : this.state.current + 5});
				if (this.state.current == stop) {
					clearInterval(id);
				}else {
					styles.left+=5;
				}
			}
		}

		else{

			var stop = this.state.current;
			var id = setInterval(frame.bind(this), 1);
			function frame() {
				this.setState({current : this.state.current - 2});
				if (this.state.current == stop - 200) {
					clearInterval(id);
				}else {
					styles.left-=2;
				}
			}
		}
	},

	handleRightClick: function(){

		if(this.state.current == 600){
			var stop = 0;
			var id = setInterval(frame.bind(this), 1);
			function frame() {
				this.setState({current : this.state.current - 5});
				if (this.state.current == 0) {
					clearInterval(id);
				}else {
					styles.left-=5;
				}
			}
		}

		else{

			var stop = this.state.current;
			var id = setInterval(frame.bind(this), 1);
			function frame() {
				this.setState({current : this.state.current + 2});
				if (this.state.current == stop + 200) {
					clearInterval(id);
				}else {
					styles.left+=2;
				}
			}
		}
		
	},

	render: function(){
		return (<div style={outerStyle}>
					<span style={{position:'absolute',left:0,top:'50%',fontSize:30,zIndex:100}} onClick={this.handleLeftClick}>&#8592;</span>
			    	<span style={{position:'absolute',right:0,top:'50%',fontSize:30,zIndex:100}} onClick={this.handleRightClick}>&#8594;</span>
			    	<div style={styles}>
			    		<div style={innerStyle}>1</div>
			    		<div style={innerStyle}>2</div>
			    		<div style={innerStyle}>3</div>
			    		<div style={innerStyle}>4</div>
			    	</div>
				</div>)
	}
})

module.exports = Carrousel;