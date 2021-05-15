import React from 'react';
import { Link } from 'react-router-dom';
import navbarLogo from '../imgs/DoggerLogo.png';

const backgroundImg = {
    backgroundImage: "url('https://images.pexels.com/photos/215957/pexels-photo-215957.jpeg?cs=srgb&dl=pexels-musicfactory-lehmannsound-215957.jpg&fm=jpg')",

    position: 'absolute',
    top:'0',
    
    height: "100vh",
    width:'100%',
    
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};

const navbarDiv = {
    width: '100%',
};

const navbar = {
    display: 'flex',
    width: '100%',
};

const mainText = {
    height:'80%',
    display: "flex",
    flexDirection:'column',
    
    justifyContent: "center",
    alignItems: "center",
}

const sloganStyle = {
    color: 'white',
    fontSize: '120px',
}

const buttonStyle = {
    fontSize:'16px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: 'white',

    backgroundImage: "linear-gradient(to right, #FD297B, #FF655B)",
    padding: '5px',

    width:'200px',
    height:'auto',
    textAlign:'center',

    borderRadius: '20px',
}

const logoStyle = {
    position: 'absolute',
    top:'15px',
    left:'10px',
}

const linkStyle = {
    position:'absolute',
    top:'15px',
    right:'20px',
    padding: '10px',
    paddingTop:'7px',

    backgroundColor:'white',
    borderRadius:'5px',

    textDecoration: 'none',
    textTransform: 'uppercase',
    textAlign:'center',
    fontSize:'16px',
    fontWeight: 'bold',
    
    color:'#FD297B',

    height:'20px',
    width:'60px',

}
//
function Home() {
    return(
        <div style={backgroundImg}>
            <div>
                <nav style={navbar}>
                <Link to='/'><img src={navbarLogo} style={logoStyle}/></Link>
                    <Link to='/login' style={linkStyle}>Log In</Link>
                </nav>
            </div>
            <div style={mainText}>
                <h1 style={sloganStyle}>Paw Right<br/></h1>
                <Link to='/signup' style={buttonStyle}>Create Account</Link> 
            </div>
        </div>
    );
}

export default Home;