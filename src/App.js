import React, { Component } from 'react';
import './App.css';
import Column from './components/Column.js';
import Live from './components/Live.js';

class App extends Component {
	constructor(props) {
    	super(props);
		this.handleData = this.handleData.bind(this);
		this.handleDesc = this.handleDesc.bind(this);
		this.handleLoc = this.handleLoc.bind(this);
		this.handleDrop = this.handleDrop.bind(this);
    	this.state = {
      		valone: 'Product Name',
			valtwo: 'Tagline of the product',
			valfour: 'https://ph-files.imgix.net/0a73ac09-0b58-4fd1-9b20-72281c727c0e?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop',
			valfive: 'PRODUCTIVITY'
		};
  }
handleData(data) {
	  if (data === "") {
		this.setState({
		  valone: 'Product Name'
		});
	  } else {
		this.setState({
		  valone: data
		});
	  }
}
handleDesc(data) {
		if (data === "") {
			this.setState({
			  valtwo: 'Tagline of the product'
			});
		} else {
			this.setState({
			  valtwo: data
			});
		}
}
handleLoc(data) {
		if (data === "") {
			this.setState({
			  valfour: 'https://ph-files.imgix.net/0a73ac09-0b58-4fd1-9b20-72281c727c0e?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop'
			});
		} else {
			this.setState({
			  valfour: data
			});
		}
 }
handleDrop(data) {
		if (data === "") {
			this.setState({
			  valfive: 'PRODUCTIVITY'
			});
		} else {
			this.setState({
			  valfive: data
			});
		}
}
  render() {
    return (
      <div className="App">
		<div className="full">
        <Column valone={this.handleData} valtwo={this.handleDesc} valfour={this.handleLoc} valfive={this.handleDrop}/>
		<Live numone={this.state.valone} numtwo={this.state.valtwo} numfour={this.state.valfour} numfive={this.state.valfive} />
    	</div>  
	</div>
    );
  }
}

export default App;
