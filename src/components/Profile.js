import React,{Component} from 'react';
import '../css/bootstrap.min.css';
import '../App.css';
import Pic from '../img/profile.png';
import Data from '../data/data.json';

class Profile extends Component{
render (){
  var styles= {
         boxShadow:'0px 6px 6px #000',
         top:'10px',
         bottom:'30px'
  };
  return (
    <div className="col-md-3 profile">
    <div className="card bg-light border-primary" style={styles}>
    <div className="card-body" style={{textAlign:'left'}}>
      <img src={Pic} alt="Profile_pic" style={{textAlign:'center'}}/>
      <h5 style={{color:'#007BFF'}}>{Data.Basics.name}</h5>
      <h6 >{Data.Basics.role}</h6>
      <p>{Data.Basics.mobile}</p>
      <p>{Data.Basics.email}</p>
      <p>{Data.Basics.location}</p>
      <a href="https://github.com/KalyanPaladugu/" className="a"><i class="fab fa-github-square"></i> </a>
      <a href="www.linkedin.com/in/kalyanpaladugu" className="a"> <i class="fab fa-linkedin"></i> </a>
       <a href="https://twitter.com/1243kalyan1994" className="a"> <i class="fab fa-twitter-square"></i> </a>
       <a href="https://www.facebook.com/paladugu.kalyanchakravarthi" className="a"> <i class="fab fa-facebook"></i> </a>

      </div>
    </div>
    </div>
)

}
}

export default Profile;
