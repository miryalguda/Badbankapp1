
import "bootstrap/dist/css/bootstrap.min.css"

import {UserContext } from "../LoginApp2"

import {useNavigate, Link} from "react-router-dom"

import React from "react"




function Card (props){
    function classes(){
        const bg = props.bgcolor ? ' bg- ' + props.bgcolor : ' ';
        const  txt = props.txtcolor ? ' text-' + props.txtcolor: ' text -white ';
            return 'card bg-primary mt-5 col-md-5 mx-auto w-4 ' + bg + txt;

}

return(

    <div className=  {classes() } style = {{ backgroundImage: "linear-gradient(79deg, #3ff0de , #7b83f5, #cd59f3 )", marginTop: "10rem", maxWidth: "36rem", maxHeight: "36rem", border: "2px solid grey", boxShadow: '2px 3px 3px 2px  #803300 '}}>
        <div className="card-header" style= {{fontSize: "2vw"}}>{props.header}</div>
        <div className ="card-body">
          {props.title && (<h5 className="card-title"> {props.title} </h5>)}
          {props.text && (<p className="card-text"> {props.text} </p>)}
            {props.body}
            {props.status && (<div id ="createStatus"> {props.status} </div>)} 
        </div>

    </div>
);

}



function Loginpage () {
    const [show, setShow]       = React.useState(true);
    const[status, setStatus]    = React.useState('');
    const[name, setName]        = React.useState('');
    
    const[password, setPassword]= React.useState('');
    
    const ctx = React.useContext (UserContext);
    const navigate = useNavigate();


function validate(field, label){
    if (!field){
        setStatus('Error:' + label);
        setTimeout (()=> setStatus ('', 5000));
        return false;
    }
    return true;
}

    function clearForm () {
    setName ('');
   
    setPassword ('');
    setShow (true);
    navigate('/Code')

}


function handleCreate() {
 
    console.log(name, password);
   
    if(!validate(password,      'password')) return;
    ctx.users.push({name,  password });
    setShow(false);
   
    
}



    return (
        <>
        <div className = "text-center " style={{marginTop: "5rem", color: "white"}}> <h2>Login page</h2></div>
        <Card 
         bgcolor ="primary"
         header="Login"
         status = {status}
         body = {show ? (
                <>
                Username <br/>
                    <input type="input"  className= "form-control"
                        id = "name" placeholder = "Enter Username"
                        value = {name} onChange={e => setName(e.currentTarget.value)} /> <br/> 

                

                Password <br/>    
                    <input type="password"  className= "form-control"
                        id = "password" placeholder = "Enter password"
                        value = {password} onChange={e => setPassword(e.currentTarget.value)} /> <br/>              
                
                <button type= "submit" className="btn btn-light" 
                        onClick = {handleCreate}>Login</button>
               
                </>

                 ) : (

                <>
                
                <h5>Success</h5>
                <button type= "submit" className="btn btn-light" 
                        onClick ={clearForm}>submit</button>

                </>

  

         )} 




         />

    </>

    )
 }   
         
         
        
        
    


export default Loginpage