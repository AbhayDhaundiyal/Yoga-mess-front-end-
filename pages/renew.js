import { useDash } from '../contexts/dashboard';
import {useRouter} from 'next/router';
import { useEffect, useState } from 'react';


const  fetch = require('cross-fetch');


const Renew = (props) => {
    const router = useRouter();
    const [val, setVal] = useState(0);
    const {email, validity, SetValidity, Batch, SetBatch} = useDash();
    // const [errorMessages, setErrorMessages] = useState("");
    // const errors = {
    //     message: "Unable to make payments"
    //   };
    // console.log(email)
    const {isAuthenticated} = useDash();
    useEffect(() => {
        // redirect to login page if user is not logged in
          if (!isAuthenticated) {
              router.push('/login');
          }
      }, []);
      
      // run loader until the page state is resolved
      if (!isAuthenticated) {
          return <p>redirecting to login page...</p>;
      }
    const Pay = async(e) =>{
        e.preventDefault()
    const dataparam = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',   
        },
        body: JSON.stringify({
            "Email" : `${email}`,
            "batch" : `${val}`
        })
    }
    // console.log(dataparam.body)
    var res = fetch('http://127.0.0.1:8080/forms/userUpdate/',dataparam)
    var data
    var status = await res.then(async res=>
    {
        if(res.status==200)
        {
            data = await res.json()
            return true;
        }
        else
            return false;
    });
    if(status == true)
    {
        SetBatch(data["Batch"])
        SetValidity(data["Validity"])
        router.push('/dashboard')
    }
    else
        router.push('/login')
  }
 return(
    <>
    <h2>Select Batch</h2>
        <form id="renew-form" onSubmit={Pay}>
            <p>
            <input className = "button" type="submit" id="username" value="Batch 6-7 AM"
                onClick={(e) => setVal(1)}/>
            </p>
            <p>
            <input className = "button" type="submit" id="password" value="Batch 7-8 AM"
                onClick={(e) => setVal(2)}/>
            </p >
            <p>
            <input className = "button" type="submit" id="password" value="Batch 8-9 AM"
                onClick={(e) => setVal(3)}/>
            </p >
            <p>
            <input className = "button" type="submit" id="password" value="Batch 5-6 PM"
                onClick={(e) => setVal(4)}/>
            </p >
        </form>
  </>);
};


export default Renew;
