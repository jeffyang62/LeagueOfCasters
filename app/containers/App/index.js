import React from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header';
import JeffPage from 'views/JeffPage'
import KennyPage from 'views/KennyPage';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class App extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <main>
                    <Route exact path="/jefftest" component={JeffPage} />
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

