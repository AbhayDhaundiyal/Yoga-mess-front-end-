const  fetch = require('cross-fetch');
const info = require('./data-file/info.json')

async function getapplianceurl() {
    const param = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "token": info.token
        })
      }
      // sending token and getting urls of environments from backend server.
      const response = fetch(`http:${process.env.DASHBOARD_BACKEND_SERVICE_HOST}:${process.env.DASHBOARD_BACKEND_SERVICE_PORT}/getapplianceurl`,param);
      var res = await response.then(async res => {
            return res.json();
        })
        .catch(err=>{
            console.log(err);
          })
          return res;
}
export default getapplianceurl;