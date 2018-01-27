import React from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { keyPressed, updatePosition, keyPressedUp, initialLoad, mouseDown, changeScreen } from 'actions/index.js';
import { KeyCodes } from 'constants';
import sprite from 'assets/sprites/stand1.png';
import sprite2 from 'assets/sprites/stand1_reverse.png';
import Intro from 'components/Intro.js';
import MainPage from 'components/mainPage.js';
import { CSSTransition } from 'react-transition-group';


class HomePage extends React.Component {
   
    render() {
         return (
            <div
                id="BOX" 
                ref='BOX' 
                className={this.props.screen.screen > 0 ? "background1": "background1 darken"}
                tabIndex="1">

                {this.props.screen.screen > 0 ? <MainPage {...this.props} /> : <Intro {...this.props}/>}


            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { 
        position: state.position,
        screen: state.screen, 
    };
}


const mapDispatchToProps = (dispatch) => ({
    onKeyPress: (event, position) => dispatch(keyPressed(event, position)),
    onKeyPressUp: (key, position) => dispatch(keyPressedUp(key, position)),
    
    onUpdatePosition: (pos) => dispatch(updatePosition(pos)),
    initLoad: (props) => dispatch(initialLoad(props)),
    nextScreen: () => dispatch(changeScreen(1)),
    onMouseDown: (event, position) => dispatch(mouseDown(event, position)),

});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));
