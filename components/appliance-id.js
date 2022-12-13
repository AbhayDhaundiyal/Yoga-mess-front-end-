const info = require(__dirname +'/data-file/info.json');
const  fetch = require('cross-fetch');


async function getdata(urls) {
   
  var jwt=[];
  var loginurl=[]
  // Traverse over the urls and add login API endpoint in the end.
  for(var i=0;i<urls.length;i++){
    if(urls[i]!=null){
      // console.log(urls[i]);
      loginurl.push(urls[i]+info.login.appliance_login_end_point);
    }
    else
      loginurl.push(null);
  }
  // console.log(loginurl);
  // defining login parameter
  const loginparam = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      
    },
    body: JSON.stringify({
      "credentials":info.login.credentials,
      "url": loginurl
    })
  }

  // calling login endpoint and asking for jwts
const response = fetch(`http:${process.env.DASHBOARD_BACKEND_SERVICE_HOST}:${process.env.DASHBOARD_BACKEND_SERVICE_PORT}/login`,loginparam);
var result = await response.then(async res => {
    var status =  await res.json();
    return status;
    })
    .catch( error=> {
      console.log(error);
      // return getdata();
    });
    // if the status is true then fetch the jwts from the response.
if(result.status==200){
  jwt = result.jwt;
  var appliance_url=[]
  for(var i=0;i<urls.length;i++){
    if(urls[i]!=null)
      appliance_url.push(urls[i]+info.appliance_id_api.endpoint);
    else
      appliance_url.push(null);
  }
  // JWTS as parameters to be passed for getting appliance id
  const dataparam = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',   
    },
    body: JSON.stringify({
      "url": appliance_url,
      "jwt" : jwt
  })
  }
const response = fetch(`http://${process.env.DASHBOARD_BACKEND_SERVICE_HOST}:${process.env.DASHBOARD_BACKEND_SERVICE_PORT}/getappliance`,dataparam);
   let res =  response.then(res=>{
                return res.json();
              })
              .catch(err=>{
                console.log(err);
              })
    // console.log( res);
   return res;
}
else
return {status:"not found"};
}

export default getdata;
