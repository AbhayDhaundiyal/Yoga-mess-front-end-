

export default async function handler(req, resp) {
    
    const doc = req.body['doc'];
    const token = req.body['token'];
    const dataparam = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',   
        },
        body: JSON.stringify({
            "doc" : doc,
            "token": token
        })
      }

      // send request to backend server for inserting entry in the table
    var res = fetch(`http://${process.env.DASHBOARD_BACKEND_SERVICE_HOST}:${process.env.DASHBOARD_BACKEND_SERVICE_PORT}/insert`,dataparam);
    if(await res.then(res=>{return res.status}) ==200){
      resp.status(200).send(true);
    }
    else{
      resp.status(401).send(false);
    }
}