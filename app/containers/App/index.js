import React from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header';
import HomePage from 'views/HomePage';
import PortfolioPage from 'views/PortfolioPage';
import KennyPage from 'views/KennyPage';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class App extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <main>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/portfolio" component={PortfolioPage} />
                    <Route exact path="/kennyroute" component={KennyPage} />

                </main>

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


const mapStateToProps = (state) => {
    return {}
}
   
const mapDispatchToProps = (dispatch) => ({

    
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

