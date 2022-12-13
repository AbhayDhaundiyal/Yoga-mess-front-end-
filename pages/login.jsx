import Head from 'next/head'
import React, { useState } from 'react';
import { useDash } from '../contexts/dashboard';
import {useRouter} from 'next/router';
import FullPageLoader from '../public/Pageloader';
const  fetch = require('cross-fetch');


const Login = () => {
    
    const router = useRouter();
    const { name, SetName, email, SetEmail, validity, SetValidity,setIsAuthenticated} = useDash();
    const [username, setUser] = useState("");
    const [password, setPass] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessages, setErrorMessages] = useState({});
    const errors = {
        message: "invalid credentials"
      };
    const callRegister = async(e)=>{
        e.preventDefault();
        router.push('/register');
    }
    const submitform = async(e) => {
        e.preventDefault();
        
        // store user credentials
        const Entry = {username: username, password: password};
        const dataparam = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',   
            },
            body: JSON.stringify({
                "credentials" : {
                                   "username": `${Entry.username}`,
                                   "password": `${Entry.password}`
                                }
            })
          }
        // pass credentials to api for authentication with backend api.
        var res = fetch('/api/auth',dataparam);
        var data
        var status = await res.then(async res=>
                    {
                    if(res.status==401)
                        return false;
                    else
                    {
                        data = await res.json()
                        return true;
                    }
                    });
        if(status==true){
            // set state of is sumbitted to true
            setIsSubmitted(true);
            SetName(data['Name']);
            SetEmail(data['Email']);
            SetValidity(data['Validity']);
            // call login function which will change the state of user login to true
            // login();
            // push the page to dashboard page
            setIsAuthenticated(true);
            router.push('/dashboard');
            // <Route path="/dashboard" element={<Dashboard/>} />
        }
        else
        {
            setErrorMessages({ name: "uname", message: errors.message }); 
        }
    }
    
    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


    const renderForm = (
        <>
        <Head>
            <title>Already a member ?</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <body id="body">
        <div id="login-form-wrap" className='top-container'>
        <h1>Already a member ?</h1>
        <form id="form__group" onSubmit={submitform}>
            <p className='top_para'>
            <input className = "form__field" type="text" id="username" name="username" placeholder="Username" autoComplete='off' required value={username} 
                onChange={(e) => setUser(e.target.value)} />
            </p>
            <p>
            <input className = "form__field" type="password" id="password" name="password" placeholder="Password" required value={password}
                onChange={(e) => setPass(e.target.value)} />
            </p >
            <p>
            {renderErrorMessage("uname")}
            </p>
            <p>
            <input className = "button" type="submit" id="login" value="Login" />
            </p>
        
        </form>
        <input className = "button" type="submit" onClick={callRegister} id="login" value="Register"/>
        </div>

        </body>
        </>
        )
        
    return (
        <div className="app">
        {isSubmitted?<FullPageLoader />:renderForm}
        </div>
        
    )
}


export default Login;
