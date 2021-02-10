import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { LOGIN_ACTION_TYPE } from '../stores/loginActionTypeConstants';

function Login(props) {
    // const [username, setUserName] = useState("");
    // const [password, setPassword] = useState("");
    const userName = useRef();
    const password = useRef();

    const [authenticated, setAuthenticated] = useState(props['loggedIn']);
    // console.log('Login getting the redux state........................');
    // console.log(props);
    // console.log(authenticated)
    // console.log('========================================');

    function login(e) {
        e.preventDefault();
        console.log('++++++++++++++++ The link was clicked.');
        console.log(`username: ${userName.current.value} password: ${password.current.value}`);

        props.dispatch({ type: LOGIN_ACTION_TYPE.SUCCESSFUL_LOGIN, data: { loggedIn: true } })
        // setAuthenticated(props['loggedIn']);

        console.log("Login.login: when done  ", authenticated);
        console.log('===================================');
    }

    // use ref in the input field instead 
    // function handleChangeEvent(event) {
    //     event.preventDefault();
    //     if (event.target.name === 'password') setPassword(event.target.value)
    //     else if (event.target.name === 'username') setUserName(event.target.value)
    // }

    const LoginForm = () => {
        return (
                <form className="form-inline">
                    <input className="form-control mr-sm-2" id="username" name="username" placeholder="User Name" aria-label="UserName"
                        ref={userName}/>
                    <input className="form-control mr-sm-2" id="password" name="password" type="password" placeholder="Password" aria-label="Password"
                       ref={password} />

                       
                    <button className="btn btn-sm btn-outline-secondary" onClick={login}>Login</button>
                </form>
        )
    }
    const WelcomeText = () => {
        return (<div className='text-success'>Welcome </div>)
    }

    const Auth = () => {
        useEffect(() => {
            console.log("Login.Authenticated: ", props['loggedIn']);
            console.log(props)
            setAuthenticated(props['loggedIn'])
        }, [])

        if (authenticated) return <WelcomeText />
        else return <LoginForm />
    }

    return <Auth />;
}

export default connect((state, props) => {
    console.log(('============login connect===== state & props ========='))
    console.log(state)
    console.log(props);
    console.log('=================================')

    return {
        loggedIn: state.loggedIn
    }
})(Login)

   // $(".toggle-password").click(function() {

    //     $(this).toggleClass("fa-eye fa-eye-slash");
    //     var input = $($(this).attr("toggle"));
    //     if (input.attr("type") == "password") {
    //       input.attr("type", "text");
    //     } else {
    //       input.attr("type", "password");
    //     }
    //   });


    /**
     * <form className="form-inline">
                    <input className="form-control mr-sm-2" id="username" name="username" placeholder="User Name" aria-label="UserName"
                        value={username} onChange={handleChangeEvent} />
                    <input className="form-control mr-sm-2" id="password" name="password" type="password" placeholder="Password" aria-label="Password"
                        value={password} onChange={handleChangeEvent} />
                    <button className="btn btn-sm btn-outline-secondary" onClick={login}>Login</button>
                </form>
     */