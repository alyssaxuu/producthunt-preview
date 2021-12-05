import React, { Component } from 'react';
import '../App.css';

class PHCard extends Component {
  render() {

    return (
      <div className="PHCard">
		<a href={this.props.href} target="_blank">
		<div className="thumb">
		<div className="holding">
		<img alt="PH thumbnail" src={this.props.src}/>
		</div>
		</div>
		<div className="contents">
		<h3>{this.props.name}</h3>
		<h4>{this.props.desc}</h4>
		<div className="actions">
		<h5>{this.props.cat}</h5>
		<p>+ 3</p>
		<div className="buttons">
		<div className="count">
		<div className="upvote">
		</div>
		<h6>{this.props.up}</h6>
		</div>
		<div className="count2">
		<svg width="12" height="11" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg"><path d="M2.012 7.832C1.21 7.052.727 6.045.727 4.946c0-2.48 2.463-4.491 5.5-4.491 3.038 0 5.5 2.01 5.5 4.491 0 2.48-2.462 4.492-5.5 4.492a6.562 6.562 0 0 1-2.13-.35c-1.07.62-3.166 1.44-3.166 1.44s.7-1.685 1.081-2.696z" fill="#878787" fill-rule="evenodd"></path></svg>
		<h7>{this.props.comments}</h7>
		</div>
		</div>
		</div>
		</div>
		</a>
      </div>
    );
  }
}

export default PHCard;
