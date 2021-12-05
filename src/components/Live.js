import React, { Component } from 'react';
import '../App.css';
import PHCard from './PHCard.js';
import { Follow } from 'react-twitter-widgets';
import GitHubButton from 'react-github-button';
require('react-github-button/assets/style.css');

class Live extends Component {
  render() {
    return (
      <div className="live">
		<div className="social">
			<Follow className="twitter" username="alyssaxuu" />
			<GitHubButton className="github" type="stargazers" namespace="alyssaxuu" repo="todo-app" />
		</div>
		<div className="alignmid">
		<div className="cards">
		<a className="wipo" target="_blank"><PHCard name="Simple Todo" href="https://www.producthunt.com/posts/simple-todo" desc="Open source task manager, straight to the point" src="https://ph-files.imgix.net/0caf659b-e997-43cc-adef-f89832bb87b5?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop" comments="22" cat="PRODUCTIVITY" up="650"/></a>
		<PHCard name={this.props.numone} desc={this.props.numtwo} up="507" cat={this.props.numfive.toUpperCase()} comments="19" src={this.props.numfour}/>
		<PHCard href="https://www.producthunt.com/posts/exposure-cards" name="Exposure Cards" comments="13" desc="Get free publicity and discover underrated content" src="https://ph-files.imgix.net/38c63558-ce1b-4e63-b443-9e93d2844460?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop" cat="MARKETING" up="460"/>
		</div>
		</div>
      </div>
    );
  }
}

export default Live;
