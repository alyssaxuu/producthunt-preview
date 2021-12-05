import React, { Component } from 'react';
import '../App.css';
import * as Icon from 'react-feather';
import {Animated} from 'react-animated-css';

class Upload extends Component {
  constructor(props) {
    super(props);
	this._handleImageChange = this._handleImageChange.bind(this);
	this.otherFunction = this.otherFunction.bind(this);
    this.state = {
      file: '',
      imagePreviewUrl: '',
	  width: 0,
	  error: true
    };
	this.update = this.update.bind(this);
    }
	componentDidMount() {
  		this.update();
  		window.addEventListener('resize', this.update);
	}
	componentWillUnmount() {
  		window.removeEventListener('resize', this.update);
	}
	update() {
	  this.setState({ width: window.innerWidth });
	}
	otherFunction() {
		this.props.loc(this.state.imagePreviewUrl);
	}
  _handleImageChange(e) {
    e.preventDefault();
	if (e.target.files[0] != null) {

    let reader = new FileReader();
    let file = e.target.files[0];
	if(e.target.files[0].size > 3000000){
       this.props.temp('Oops, seems like the thumbnail suprassed the 3MB limit. Try again with a smaller file.');
		if (this.state.error == true) {
	   		this.setState({error: false });
		} else {
			this.setState({error: true });	
		}
	} else {
		this.props.temp('Fill up the fields to see how your product will look like in ProductHunt, instantly.');
		reader.onloadend = () => {
		  this.setState({
			file: file,
			imagePreviewUrl: reader.result
		  },
		this.otherFunction);
	}
	reader.readAsDataURL(file);
	}
  }
  }
  render() {
	  var upl = "Upload the product thumbnail";
	  if (this.state.width <= 851 && this.state.width >= 714) {
		  upl = "";
	  }
    return (
		<Animated
    animationIn='headShake' style={{pointerEvents: 'all!important'}} animationOut='shake' isVisible={this.state.error} animateOnMount={false}>
    <label for="upload" className="custom">
		<Icon.Upload className="fthr" stroke-width="2"/>
		{upl}
		</label>
          <input id="upload" className="upload" type="file" onChange={this._handleImageChange} />
		</Animated>
    )
  }

}
	export default Upload;