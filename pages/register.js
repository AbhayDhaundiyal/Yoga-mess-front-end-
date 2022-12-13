// import { useDash } from '../contexts/dashboard';
// import { Renew } from './renew'
import React, { useState } from 'react';
import {useRouter} from 'next/router';
const Register = (props) => {
    const callLogin = async(e)=>{
        e.preventDefault();
        router.push('/login');
    }
    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    };
    // const { name, SetName, email, SetEmail, validity} = useDash();
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [verifypass, setVerifypass] = useState("");
    const [name, setName] = useState("")
    const [errorMessages, setErrorMessages] = useState({});
    const errors = {
        message: "invalid credentials"
      };
    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
    const router = useRouter();
    const submitform = async (e) =>{
        e.preventDefault();    
        if(validateEmail(email))
        {
            if(password === verifypass)
            {
                const dataparam = {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',   
                    },
                    body: JSON.stringify({
                        "Email" : `${email}`,
                        "Name" : `${name}`,
                        "Password" : `${password}`,
                        "DOB" : `${DOB.toLocaleDateString('en-GB')}`
                    })
                  }
                var res = fetch('https://kenkaneki124.pythonanywhere.com/forms/userSignup/',dataparam)
                var data
                var status = await res.then(async res =>
                {
                        if(res.status == 401)
                        {
                            data = await res.json()
                            return false;
                        }
                        else
                            return true;
                });
                if(status == false){
                    setErrorMessages({ name: "uname", message: data["message"] });
                }
                else
                    router.push('/login')
            }
            else
                setErrorMessages({ name: "uname", message: "Passwords Don't Match" });
        }
        else
            setErrorMessages({ name: "uname", message: errors.message });
    }
    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate() + 3)
    const [DOB, setDOB] = useState(defaultDate)

    const onSetDate = (event) => {
        setDOB(new Date(event.target.value))
    }

    return(
        <div className = "div">
        {/* <br></br> */}
        <h1>Register</h1><br></br>
        <form  onSubmit={submitform}>
        <p>
                <input className = "form__field" type="text" id="password" name="name" placeholder="Name" required={name}
                    onChange={(e) => setName(e.target.value)} />
                </p >
                <p>
                <input className = "form__field" type="text" id="username" name="email" placeholder="Email" autoComplete='off' required={email} 
                    onChange={(e) => setEmail(e.target.value)} />
                </p>
                <p>
                <input className = "form__field" type="password" id="password" name="password" placeholder="Password" required={password}
                    onChange={(e) => setPass(e.target.value)} />
                </p >
                <p>
                <input className = "form__field" type="password" id="password" name="verifypassword" placeholder="Confirm Password" required={verifypass}
                    onChange={(e) => setVerifypass(e.target.value)} />
                </p >
                <p>
                    <input type="date" required={DOB} value={DOB.toLocaleDateString('en-CA')} onChange={onSetDate} />
                </p >
                <p>
                    {renderErrorMessage("uname")}
                </p>
                <p>
                <input className = "button" type="submit" id="login" value="Register" />
                </p>
        </form>
                 <p>
                    <input className = "button" type="submit" onClick = {callLogin} id="login" value="Login" />
                </p>
    </div>);
};


export default Register;
