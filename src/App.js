import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './css/bootstrap.min.css';
import Profile from './img/swa.jpg';
import Resume from './components/Resume';

class App extends React.Component  {
  render(){
    var styles={
    boxShadow:'0px 6px 6px -6px #000',
    top:'100px'
  };
  return (
    <div className="App">
    <Router>
    <Route exact path='/' render={() =>(
      <div className="col-md-3 offset-4" >
      <div className="card bg-default" style={styles}>
      <div className="card-body">
                <img src={Profile} alt="Profile_Pic"/>
                <h4>Apparao Swami K</h4>
                <Link to="/swami-react-profile" className="btn btn-primary btn-block btn-sm" style={styles}> View Profile </Link>

      </div>
      </div>
      </div>
    )} />

  <Route path="/swami-react-profile" exact component={Resume} />
    </Router>
    </div>
  );
}
}

export default App;
