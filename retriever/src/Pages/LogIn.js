import React from 'react';
import { Link } from 'react-router-dom';
import miniLogo from '../imgs/miniLogo.png'

const mainStyle = {
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/215957/pexels-photo-215957.jpeg?cs=srgb&dl=pexels-musicfactory-lehmannsound-215957.jpg&fm=jpg')",

    position: 'absolute',
    top:'0',
    
    height: "100vh",
    width:'100%',
    
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};

const divStyle = {
    backgroundColor: 'white',
    height:'350px',
    width:'350px',
    position: "absolute",
    top:'20%',
    left:'40%',

    padding:'20px',
    borderRadius: '10px',
}

const title = {
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textTransform: 'uppercase',
}

const miniLogoStyle = {
    height:'40px',
    width: '40px',
    
    position: 'relative',
    left:'43%',
}

const inputLabel = {
    fontSize:'16px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontStyle: 'italic',
}

const textInput = {
    height:'20px',
    width: '330px',
}


const buttonStyle= {
    position: 'relative',
    top:'40px',
    left:'40%', 

    fontSize:'16px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: 'white',

    backgroundImage: "linear-gradient(to right, #FD297B, #FF655B)",
    padding: '10px',

    width:'200px',
    height:'auto',
    textAlign:'center',

    borderRadius: '20px',
};

const signupStyle = {
    position: 'relative',
    top:'40px',
    left:'17%', 
}


function LogIn() {
    return(
        <div style={mainStyle}>
            <div style={divStyle}>
                <img alt='logomini' src={miniLogo} style={miniLogoStyle}/>
                <h1 style={title}> Log In</h1>
                <form>
                <label style={inputLabel}>Email: </label> <br/>
                    <input style={textInput}/>
                    <br/>

                    <label style={inputLabel}>Password: </label> <br/>
                    <input style={textInput}/>
                    <br/>

                    <Link to='/main-page' onClick={()=>{}} style={buttonStyle}>Log In</Link>
                    <p style={signupStyle}>Don't have an account. <Link to='/signup'>Sing Up</Link></p>
                </form>
            </div>
        </div>
    );
}

export default LogIn;