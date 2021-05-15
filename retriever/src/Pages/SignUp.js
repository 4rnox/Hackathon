import React from 'react';
import { Link } from 'react-router-dom';
//taula2 perretes {fotos, nombre, reza, location, castrado? :point_right: :point_left: , sexo, description, id, trucos}
function SingUp() {
    return(
        <div>
            <div>
                <img alt='logomini'/>
                <h1> Create account</h1>
                <form>
                    <label>Email: </label>
                    <input/>

                    <label>Password: </label>
                    <input/>

                    <label>Name: </label>
                    <input/>

                    <label>Race: </label>
                    <input/>

                    <label>Location: </label>
                    <input/>

                    <label>: </label>
                    <input/>

                    <label>Name: </label>
                    <input/>

                    <label>Race: </label>
                    <input/>
                    
                    
                </form>
            </div>  
        </div> 
    );
}

export default SingUp;