import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { registerUserRequest } from '../../redux/Action/action';
import { loginUserRequest } from '../../redux/Action/action';

import { useNavigate } from 'react-router-dom';





function Account ()
{

    const user = useSelector( ( state ) => state.user?.user );
    const navigate = useNavigate();
    useEffect( () =>
    {
        if ( user )
        {
            navigate( '/' );
        }
    }, [ user, navigate]);

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

    const [ name, setUsername ] = useState();
    const [ password, setPassword ] = useState();
    const [ email, setEmail ] = useState();

    const [ nameLogin, setNameLogin ] = useState();
    const [ passwordLogin, setPasswordLogin ] = useState();
    console.log( nameLogin, passwordLogin )

    const dispatch = useDispatch();

    const handleSubmit = () =>
    {
        dispatch(
            registerUserRequest( {
                name: name,
                password: password,
                email: email,
            } )
        )
        setUsername( "" );
        setPassword( "" );
        setEmail( "" );
    }

    const handleLogin = ( e ) =>
    {
        e.preventDefault();
        dispatch(
            loginUserRequest(
                {
                    name: nameLogin,
                    password: passwordLogin,
                }
            ) )
        setNameLogin( "" );
        setPasswordLogin( "" );
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
                                <input type="text" placeholder="UserName" onChange={ ( e ) => setNameLogin( e.target.value ) } />
                                <input type="pass" placeholder="PassWord" onChange={ ( e ) => setPasswordLogin( e.target.value ) } />
                                <button type="submit" className="btn" onClick={ ( e ) => handleLogin( e ) }>Login</button>
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