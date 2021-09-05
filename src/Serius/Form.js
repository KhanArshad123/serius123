import React from "react";
import "./All.css";
import simpleReactValidator from 'simple-react-validator';
const initialstate={
    name:"",
        contact:"",
        email:""
}
class Form extends React.Component {
constructor(props)
{
    super(props);
    this.state={
        name:"",
        contact:"",
        email:"",
        submitted:false,
    }
    this.validator=new simpleReactValidator();
    this.handleValidate=this.handleValidate.bind(this);
}
handleValidate=(e)=>
{e.preventDefault();
if(this.validator.allValid())
{
this.handleSubmit();
this.validator.hideMessages();
}
else
{
this.validator.showMessages();
this.forceUpdate();
}
}
 handleSubmit=(e)=>
{
   
   this.setState({...initialstate,submitted:true})
}
handleChange=(e)=>
{ 
    this.setState({
    [e.target.name]:e.target.value,submitted:false
})
}
  render() {


    return (
      <>
        <div className="grpHead">Travelling as a group? Get a Quote</div>
        <div className="form">
            <form style={{textAlign:"left"}}  autoComplete="off">
            <label >
                Your name
            </label>
            <input name="name" type="text" value={this.state.name}className="input" onChange={this.handleChange.bind(this)}/>
            <div style={{color:"red"}}>
                {this.validator.message("Name",this.state.name,'required|alpha_space')}
            </div>
            <label >
                Contact
            </label>
            <input name="contact" value={this.state.contact} type="text" className="input" onChange={this.handleChange.bind(this)}/>
            <div style={{color:"red"}}>
                {this.validator.message("Contact",this.state.contact,'required|phone')}
            </div>
            <label >
                Email
            </label>
            <input name="email" type="text"  value={this.state.email}className="input" onChange={this.handleChange.bind(this)}/>
            <div style={{color:"red"}}>
                {this.validator.message("Email",this.state.email,'required|email')}
            </div>
  {this.state.submitted?<span style={{backgroundColor:"#95e8b2" ,fontSize:"10px",height:"20px"}}>We hear you! We will get back to you for planning your vacation</span>:null}
            <div style={{textAlign:"center"}}><button className="submit" onClick={this.handleValidate.bind(this)}>Submit</button></div>
            </form>
        </div>
      </>
    );
  }
}
export default Form;
