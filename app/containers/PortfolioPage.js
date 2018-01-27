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
import Portfolio from 'components/portfolio.js';
import { CSSTransition } from 'react-transition-group';


class PortfolioPage extends React.Component {
  
    render() {
        console.log(this.props);
         return (
            <div
                id="BOX" 
                ref='BOX' 
                className={this.props.screen.screen > 0 ? "background1": "background1 darken"}
                tabIndex="1">

                <Portfolio />


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

});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PortfolioPage));
