import { useState, useRef } from 'react';
import { useDispatch, } from 'react-redux';

import { useSelector } from 'react-redux';
import { registerUserRequest } from '../../redux/Action/action';



function Account ()
{
    const loginFormRef = useRef( null );
    const regFormRef = useRef( null );
    const indicatorRef = useRef( null );

    const register = () =>
    {
        regFormRef.current.style.transform = "translateX(0px)";
        loginFormRef.current.style.transform = "translateX(0px)";
        indicatorRef.current.style.transform = "translateX(100px)";
    };

    const login = () =>
    {
        regFormRef.current.style.transform = "translateX(300px)";
        loginFormRef.current.style.transform = "translateX(300px)";
        indicatorRef.current.style.transform = "translateX(0px)";
    };

    const [ userName, setUsername ] = useState( "" );
    const [ password, setPassword ] = useState( "" );
    const [ email, setEmail ] = useState( "" );

    const dispatch = useDispatch();

    const handleSubmit = ( e ) =>
    {
        dispatch(
            registerUserRequest( {
                userName: userName,
                password: password,
                email: email,
            } )
        )
    }

    return (
        <div className="account-page">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img src="" />
                    </div>
                    <div className="col-2">
                        <div className="form-container">
                            <div className="form-btn">
                                <span onClick={ () => { login() } }>Login</span>
                                <span onClick={ () => { register() } }>Register</span>
                                <hr ref={ indicatorRef } id="Indicator"></hr>
                            </div>
                            <form ref={ loginFormRef } id="LoginForm">
                                <input type="text" placeholder="UserName" />
                                <input type="pass" placeholder="PassWord" />
                                <button type="submit" className="btn">Login</button>
                                <a href="#">Forgot Password</a>
                            </form>
                            <form ref={ regFormRef } id="RegForm">
                                <input type="text" placeholder="UserName" onChange={ ( e ) => setUsername( e.target.value ) } />
                                <input type="email" placeholder="Email" onChange={ ( e ) => setEmail( e.target.value ) } />
                                <input type="pass" placeholder="PassWord" onChange={ ( e ) => setPassword( e.target.value ) } />
                                <button type="submit" className="btn" onClick={ () => handleSubmit() }>Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Account;