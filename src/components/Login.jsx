import React from 'react';
import './css/login.css'

function Login(props){
    return(
        <div className='main-login-control'>
            <form>
                <input type='text'  placeholder="Eneter your Registered Username"/>
                <input type='password' required  placeholder="Eneter your Registered Password"/>
                <div className='btn-3'>
                    <button>Submit</button>
                </div>
                <div className='text-3'>
                    <p>Forgotten password?</p>
                </div>
                <div className='btn-4'>
                    <button>Create new account</button>
                </div>
            </form>
        </div>
    );
}

export default Login;