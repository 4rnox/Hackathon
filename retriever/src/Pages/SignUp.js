import React from 'react';
import { Link } from 'react-router-dom';
import miniLogo from '../imgs/miniLogo.png'
//taula2 perretes {fotos, nombre, reza, location, castrado? :point_right: :point_left: , sexo, description, id, trucos}

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

};

function SingUp() {
    return(
        <div style={mainStyle}>
            <div style={divStyle}>
                <img alt='logomini' src={miniLogo} style={miniLogoStyle}/>
                <h1 style={title}> Create account</h1>
                <form>
                    <label style={inputLabel}>Email: </label> <br/>
                    <input style={textInput}/>
                    <br/>

                    <label style={inputLabel}>Password: </label> <br/>
                    <input style={textInput}/>
                    <br/>

                    <label style={inputLabel}>Name: </label><br/>
                    <input style={textInput}/>
                    <br/>

                    <label style={inputLabel}>Race: </label><br/>
                    <input style={textInput}/>
                    <br/>

                    <label style={inputLabel}>Location: </label><br/>
                    <input style={textInput}/>
                    <br/>

                    <label style={inputLabel}>Castrated: </label><br/>
                    <label>Yes</label>
                    <input type='radio' name='castrated' value='1'/>
                    <label>No</label>
                    <input type='radio' name='castrated' value='0'/>
                    <br/>

                    <label style={inputLabel}>Gender: </label><br/>
                    <select>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    <br/>

                    <label style={inputLabel}>Description: </label><br/>
                    <input style={textInput}/>
                    <br/>

                    <label style={inputLabel}>Tricks: </label><br/>
                    <input style={textInput}/>
                    <br/>

                    <label style={inputLabel}>Photos: </label><br/>
                    <input style={textInput}/>
                    <button type='submit' onClick={()=>{}} style={buttonStyle}/>
                </form>
            </div>  
        </div> 
    );
}

export default SingUp;