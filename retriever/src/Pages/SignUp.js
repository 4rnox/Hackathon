import { React, useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import miniLogo from '../imgs/miniLogo.png'
//taula2 perretes {fotos, nombre, reza, location, castrado? , sexo, description, id, trucos}

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
    height:'650px',
    width:'350px',
    position: "absolute",
    top:'10%',
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
    height:'14px',
    width: '330px',
}


const buttonStyle= {
    position: 'relative',
    top:'40px',
    left:'30%', 

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
};

const loginStyle = {
    position: 'relative',
    top:'40px',
    left:'17%', 
}

function SingUp() {
    const email = useRef();
    const password = useRef();
    const name = useRef(); 
    const race = useRef();
    const location = useRef();
    const [castrated, setCastrated] = useState("Unknown");
    const gender = useRef();
    const description = useRef();
    const tricks = useRef();
    const photo = useRef();
    const [photos, setPhotos] = useState([]);
    

    const toDictionary = ()=>{
        console.log(photos);
        if(email.current.value === "" || password.current.value === "" || name.current.value === "" || race.current.value === ""
           || location.current.value  === "" || gender.current.value === ""){
            console.log("error");
        } else{ 
            console.log(photo.current.value);
        }
    }   

    return(
        <div style={mainStyle}>
            <div style={divStyle}>
                <img alt='logomini' src={miniLogo} style={miniLogoStyle}/>
                <h1 style={title}> Create account</h1>
                <form>
                    <label style={inputLabel}>Email: </label> <br/>
                    <input type='email' style={textInput} ref={email}/>
                    <br/>

                    <label style={inputLabel}>Password: </label> <br/>
                    <input type='password' style={textInput} ref={password}/>
                    <br/>

                    <label style={inputLabel}>Name: </label><br/>
                    <input style={textInput} ref={name}/>
                    <br/>

                    <label style={inputLabel}>Race: </label><br/>
                    <input style={textInput} ref={race}/>
                    <br/>

                    <label style={inputLabel}>Location: </label><br/>
                    <input style={textInput} ref={location}/>
                    <br/>

                    <label style={inputLabel}>Castrated: </label><br/>
                    <label>Yes</label>
                    <input type='radio' value='1' name='castrated' onClick={() => { setCastrated("Yes")}}/>
                    <label>No</label>
                    <input type='radio' value='0'  name='castrated' onClick={() => { setCastrated("No")}}/>
                    <br/>

                    <label style={inputLabel}>Gender: </label><br/>
                    <select ref={email} ref={gender}>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    <br/>

                    <label style={inputLabel}>Description: </label><br/>
                    <input style={textInput} ref={description}/>
                    <br/>

                    <label style={inputLabel}>Tricks: </label><br/>
                    <input style={textInput} ref={tricks}/>
                    <br/>

                    <label style={inputLabel}>Photos: </label><br/>
                    <input type="file" id="file" name="file" multiple ref={photo} onChange={() =>{setPhotos([...photos, photo.current.value])}}/>
                    <br/>

                    <Link to='/main-page' onClick={toDictionary} style={buttonStyle}>Create Profile</Link>
                    <p style={loginStyle}>Already have an account. <Link to='/login'>Log In</Link></p>
                </form>
            </div>  
        </div> 
    );
}

export default SingUp;