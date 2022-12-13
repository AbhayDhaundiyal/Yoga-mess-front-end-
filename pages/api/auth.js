const  fetch = require('cross-fetch');
const info = require('../../components/data-file/info.json');

export default async function handler(req, resp) {
    // fetching user credentials
    const credentials = req.body['credentials'];
    const dataparam = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',   
        },
        body: JSON.stringify({
              "Email": `${credentials.username}`,
              "Password": `${credentials.password}`
        })
      }
      // sending credentials to backend server for authentication
    var res =  fetch('http://127.0.0.1:8080/forms/userLogin/',dataparam);
    var data;
    var statusCode = await res.then(async res=>
                      {
                        data = await res.json()
                        if(res.status==401)
                          return 401;
                        return 200;
                      })
    if(statusCode==401)
      resp.status(401).send(false);
    else
      resp.json(data);
  }