import React,{Component} from 'react';
import '../css/bootstrap.min.css';
import '../App.css';
import Data from '../data/data.json';

class Mydata extends Component {

  render(){
    var styles={
      boxShadow:'0px 6px 6px #000',
      top:'10px',
      bottom:'30px'
    }
    var styles1={textAlign:"left"}
    return (
      <div className="col-md-8">
      <div className="card bg-light border-primary" style={styles}>
      <section>
      <h2 style={styles1}>
      Experience:
      </h2>
      <hr/>
          <ul style={styles1}>
          {Data.Basics.Exp.map((pro) =>{
            return <li> {pro} </li>;
          })}

          </ul>
       </section>
       <section style={styles1}>
      <h2 >
      Achievements:
      </h2>
      <hr/>
      <ul >
          <li>{Data.Basics.Achievements}</li>
      </ul>
       </section>
       <section style={styles1}>
       <h2 >
       Skills:
       </h2>
       <hr/>
       <h3>Languages:</h3>
       {Data.Basics.Skill.languages.map((lang)=>{
             return <span>{lang} </span>
        })}
        <h3>Libraries:</h3>
        {Data.Basics.Skill.libraries.map((lib) => {
             return <span> {lib} </span>
        })}
        <h3>Databases:</h3>
        {Data.Basics.Skill.databases.map((db) => {
             return <span> {db} </span>
        })}
         </section>
         <hr/>
         <section style={styles1}>
         <h2>Education:</h2>

         <ul>
         <h6>{Data.Basics.Education}</h6><hr/>
         <h6>{Data.Basics.bt}</h6><hr/>
         <h6>{Data.Basics.in}</h6><hr/>
         <h6>{Data.Basics.ssc}</h6><hr/>

         </ul>
         </section>


      </div>
  </div>
    )
  }
}

export default Mydata;
