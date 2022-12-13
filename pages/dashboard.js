import { useDash } from '../contexts/dashboard';
import {useRouter} from 'next/router';
import { useEffect, useState } from 'react';


const Dashboard = (props) => {
  const Batches = ["6-7 AM", "7-8 AM", "8-9 AM", "5-6 PM"]
  const { name, SetName, email, SetEmail, validity, batch} = useDash();
  const router = useRouter();

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


  const X = async(e) =>{
    e.preventDefault();    
    router.push('/renew');
  }
 return(
    <>
      <div className="top-container">
          <h1> Welcome Back! {name} </h1>
          {validity == -1 ? <div><p className='top_para'>Your Plan Has Expired</p><div><button onClick={X}>Renew Plan</button></div></div> : 
          <div><p className='top_para'>You Have {validity} days left</p><p className='top_para'>Batch timing {Batches[batch - 1]}{}</p></div>}
      </div>.
  </>);
};


export default Dashboard;
