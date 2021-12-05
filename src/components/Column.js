import React, { Component } from 'react';
import '../App.css';
import emoji from 'react-easy-emoji';
import Upload from './Upload.js';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

	  const options = [
  'Productivity', 'Developer Tools', ' Artificial Intelligence ', ' Tech ', ' Wearables ', ' Home ', ' Books ', ' Games ', ' Touch Bar Apps ', ' User Experience ', ' Marketing ', ' Internet of Things ', ' Design Tools ', ' Analytics ', ' Photography ', ' Growth Hacking ', ' Bots ', ' iPhone ', ' Mac ', ' APIs ', ' Slack ', ' Web App ', ' Task Management ', ' Social Media Tools ', ' Prototyping ', ' Health and Fitness ', ' Open Source ', ' Education ', ' Messaging ', ' Writing Tools ', ' Android ', ' Facebook ', ' Product Hunt ', ' Venture Capital ', ' Chrome Extensions ', ' Virtual Reality ', ' Netflix ', ' Music ', ' Augmented Reality ', ' GitHub ', ' News ', ' Email ', ' Travel ', ' Calendar and Scheduling ', ' Nomad Lifestyle ', ' Branding ', ' E-Commerce ', ' Coffee ', ' LinkedIn ', ' GIFs ', ' Fintech ', ' iMessage Apps ', ' Drones ', ' SEO Tools ', ' Twitter ', ' Freelance ', ' Software Engineering ', ' Spotify ', ' Crowdfunding ', ' Email Marketing ', ' Snapchat ', ' Advertising ', ' Cryptocurrencies ', ' Sketch ', ' SaaS ', ' Investing ', ' Instagram ', ' A/B Testing ', ' Typography ', ' Startup Books ', ' Wordpress ', ' Medium ', ' Text Editors ', ' Amazon ', ' Design Books ', ' Virtual Assistants ', ' reddit ', ' Maps ', ' Biohacking ', ' Google ', ' Mac Menu Bar Apps ', ' YouTube ', ' Learn a Language ', ' Sales ', ' Photoshop ', ' Hiring and Recruiting ', ' Movies ', ' Apple ', ' Art ', ' Meditation ', ' Payment ', ' Facebook Messenger ', ' Time Tracking ', ' Email Newsletters ', ' Pokemon ', ' Hardware ', ' Funny ', ' Green Tech ', ' Emoji ', ' Robots ', ' Windows ', ' Privacy ', ' Wi-Fi ', ' Fashion ', ' Alexa Skills ', ' Spreadsheets ', ' Icons ', ' Space ', ' 3D Printing ', ' Customer communication ', ' Video Streaming ', ' Outdoors ', ' Cooking ', ' Public Relations ', ' Google Home ', ' Airbnb ', ' Dropbox ', ' On-Demand ', ' iPad ', ' Delivery ', ' Wallpaper ', ' Linux ', ' Uber ', ' Backpacks ', ' Note ', ' Meetings ', ' Beauty ', ' TV ', ' Apple Watch ', ' Free Games ', ' Anonymous ', ' Indie Games ', ' Sports ', ' Kindle ', ' Apple TV ', ' SoundCloud ', ' Events ', ' PC ', ' Drinking ', ' Standing Desks ', ' Emulators ', ' Couples ', ' Transportation ', ' Board Games ', ' Legal ', ' Telegram ', ' Strategy games ', ' Oculus Rift ', ' Dating ', ' Dogs ', ' Batteries ', ' Phone Cases ', ' Parenting ', ' Cars ', ' Charity and Giving ', ' Kids ', ' CSM Tools ', ' Ad Blockers ', ' Star Wars ', ' Pets ', ' Gear VR ', ' Puzzle Games ', ' Science Books ', ' Safari Extensions ', ' Cats ', ' Firefox Extensions ', ' PS4 ', ' Squarespace ', ' Politics ', ' Adventure Games ', ' Wine ', ' Card Games ', ' Sneakers and Shoes ', ' Open World Games ', ' Retro Games ', ' Moving and Storage ', ' Weather Apps ', ' Comics and Graphic Novels ', ' Biking ', ' Action Games ', ' Art Books ', ' Party ', ' Adult Coloring Books ', ' Cooking Books ', ' RPGs ', ' Sci-fi Games ', ' Novels ', ' ARKit ', ' Crafting games ', ' History Books ', ' Jewelry ', ' Simulation games ', ' Alarm Clocks ', ' Xbox One ', ' DJing ', ' Word Games ', ' Fantasy Games ', ' Tabletop Games ', ' Custom iPhone Keyboards ', ' Fashion Books ', ' PlayStation VR ', ' Funny Games ', ' Platformers ', ' Soccer ', ' Yoga Books ', ' MMOs ', ' Football ', ' Celebrities ', ' Donald Trump ', ' Sports Games ', ' Skateboarding ', ' Basketball ', ' FPS ', ' Isometric games ', ' Horror Games ', ' Historical Games ', ' Swimming ', ' Surfing ', ' 3DS ', ' HTC Vive ', ' Driving Games ', ' Crime Books ', ' Thriller Books ', ' Horror Books ', ' Fighting games ', ' Tower Defense Games ', ' Golf ', ' Tennis ', ' Zombie Games ', ' Boxing ', ' Kanye West ', ' Wii U ', ' Drake ', ' Baseball ', ' DJ Khaled ', ' Vita ', ' Quantified Self '
];

class Column extends Component {
constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
	this.handleDesc = this.handleDesc.bind(this);
	this.handleCat = this.handleCat.bind(this);
	this.handleLoc = this.handleLoc.bind(this);
	this.handleTemp = this.handleTemp.bind(this);
	this._onSelect = this._onSelect.bind(this);
	this.state = {
		char: 0,
		drop: options[0],
		temp: 'Fill up the fields to see how your product will look like in ProductHunt, instantly.'
	};
  }
  handleChange(event) {
	 this.props.valone(event.target.value);
  }
  handleDesc(event) {
	 this.props.valtwo(event.target.value);
	 const charCount = event.target.value.length;
     this.setState({ char: charCount});
  }
	handleCat(event) {
	 this.props.valthree(event.target.value);
  }
	handleLoc(data) {
	 this.props.valfour(data);
  }
	handleTemp(data) {
		this.setState({ temp:data })
	}
_onSelect (option) {
    this.setState({drop: option});
	this.props.valfive(option.label);
  }
  render() {
	  const defaultOption = this.state.drop;
    return (
        <div className="column">
		<div className="midcol">
		<div className="logo">
			<img alt="Logo" src={require('../assets/cat.png')}/>
		</div>		
			<h1>ProductHunt product previewer</h1>
			<h2>Product name</h2>
			<input onChange={this.handleChange} type="text" placeholder="Ex: ProductHunt previewer" /><br/>
			<h2 className="contchar">Tagline</h2><span className="chars">{this.state.char}/60 characters</span><br/>
			<input onChange={this.handleDesc} maxLength="60" type="text" placeholder="Open source task manager" />
			<h2>Topic</h2>
			<Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
			<Upload loc={this.handleLoc} temp={this.handleTemp}/>
			<hr />
			<h8>{this.state.temp}<br/><br/>Made with {emoji('❤️')} by <a href="https://alyssax.com">Alyssa</a></h8>
		</div>
		</div>
    );
  }
}

export default Column;
