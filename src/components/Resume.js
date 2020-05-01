import React,{ Component} from 'react';
import '../css/bootstrap.min.css';
import Card from './Profile';
import Mydata from './Mydata';


class Resume extends Component {
render(){
  return(
    <div className="col-md-12 row">
    <Card/>
    <Mydata/>
    </div>
  )
};
}

export default Resume;
