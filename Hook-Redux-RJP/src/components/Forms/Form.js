import {useState} from 'react';

function Form() {
    
    return (
        <div>
            <h2>Register Form</h2>
            <form>
            <div>
                <input  type='text' placeholder='User Name' />
                
            </div>
            <div>
                <input type='password' placeholder='Password'  />
            
        </div>
        <div>
            <input type='email' placeholder='Email' />
            
        </div>
        <div>
            <input type='radio' name='gender' value="male" />Male
            <input type="radio" name="gender" value="female" />Female
            
        </div>
        <div>
            <select>
            <option>Select City</option>
                        <option>Mumbai</option>
                        <option>Delhi</option>
                        <option>Banglore</option>
                        <option>Hyderabad</option>
            </select>
           
            
        </div>
        <div>
        <button >Register</button>    
        </div>
        <button onClick={()=>{console.log(users)}}>Get AllUsers</button>
        </form>
        </div>

    );
}

export default Form;