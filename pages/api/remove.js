
export default async function handler(req, resp) {
    
    const key = req.headers['key'];
    const token = req.body['token'];
    const dataparam = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',   
          'key' : key
        },
        body: JSON.stringify({
          "token": token
        })
        }
        // send request to backend server for deleting entry from the table
    var res = fetch(`http://${process.env.DASHBOARD_BACKEND_SERVICE_HOST}:${process.env.DASHBOARD_BACKEND_SERVICE_PORT}/remove`,dataparam);
    
    if(await res.then(res=>{return res.status}) ==200){
      resp.status(200).send(true);
    }
    else{
      resp.status(401).send(false);
    }
}

