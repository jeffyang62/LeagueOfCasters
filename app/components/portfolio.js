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
  
    }

    render() {
        return (

            <div>
               
                <div
                    id="SPRITE"
                    width="200px"
                    height="150px"
                    className="sprite horizontalPosition" 
                />
            </div>
        );
    }
}

export default mainPage;

