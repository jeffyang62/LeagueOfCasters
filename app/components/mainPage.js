import React from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { keyPressed, updatePosition, keyPressedUp, initialLoad, mouseDown } from 'actions/index.js';
import { KeyCodes } from 'constants';
import sprite from 'assets/sprites/stand1.png';
import sprite2 from 'assets/sprites/stand1_reverse.png';
import Intro from 'components/Intro.js';

class mainPage extends React.Component {
 
    componentDidMount = () => {
        console.log(this.props)
        this.props.initLoad(this.props.position);
        
        console.log("loading...");

        setInterval(() => {
            this.props.onUpdatePosition();
        }, 100);
        
        document.addEventListener('keydown', (key) => this.props.onKeyPress(key, this.props.position));
        document.addEventListener('keyup', (key) => this.props.onKeyPressUp(key, this.props.position));
        document.addEventListener('mousedown', (key) => this.props.onMouseDown(key, this.props.position));   
    }

    render() {
        return (

            <div>
                <div className = "row">
                    <div className = {this.props.position.horizontal >= this.props.position.limits[0]? this.props.position.horizontal < this.props.position.limits[1]? "col s3 door BLUE door_show": "col s3 door BLUE" : "col s3 door BLUE door_show"}>
                        <div className = "title"><p>About me</p></div>
                    </div>
                    <div className = {this.props.position.horizontal >= this.props.position.limits[1]? this.props.position.horizontal < this.props.position.limits[2]? "col s3 door PURPLE door_show": "col s3 door PURPLE" : "col s3 door PURPLE"}>
                        <div className = "title"><p>Portofolio</p></div>
                    </div>
                    <div className = {this.props.position.horizontal >= this.props.position.limits[2]? this.props.position.horizontal < this.props.position.limits[3]? "col s3 door RED door_show": "col s3 door RED" : "col s3 door RED"}>
                        <div className = "title"><p>Resume</p></div>
                    </div>
                    <div className = {this.props.position.horizontal >= this.props.position.limits[3]? this.props.position.horizontal < this.props.position.limits[4]? "col s3 door YELLOW door_show": "col s3 door YELLOW" : "col s3 door YELLOW"}>
                        <div className = "title"><p>Contact me</p></div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default mainPage;

