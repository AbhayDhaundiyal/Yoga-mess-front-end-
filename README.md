# Appliance id API

## <b> Setup </b>
```bash
# Install dependencies
npm install

# Serve on localhost:3000
npm start
```

# API Docs

## Introduction
The frontend API helps to communicate with backend API and perform certain task like authorizing the user, inserting and removing data to the database.

## Allowed HTTPs requests:
POST: To login and insert new Table entries.  
DELETE: To delete an entry from the database.

## Description Of Usual Server Responses:
200 OK - the request was successful  

400 Bad Request - the request could not be understood or was missing required parameters.

401 - The request is asking for unauthorised access.

## API Endpoints

POST /auth # Login to AltairOne Dashboard.

POST /insert # Send request to Backend Server to Insert Table entry to the database.

POST /update # Send request to Backend Server to update Document entry to the database.

DELETE /remove # Send request to Backend Server to remove entry from the database.

## <b>POST /auth</b>

### Resource URL
http://<API_URL>:3000/auth

### Resource Information

- Response Format : JSON
- Authentication : required

### Parameters

- credentials(required): 
  - description: User credentials which are used to view the dashboard.
  - example:   
     ---
            {
                "credentials" : {
                                   "username": "xxx",
                                   "password": "xxx"                 
            }
    ---

### Example Request
```bash
curl --location --request POST 'http://localhost:8000/api/auth' \
--header 'Content-Type: application/json' \
--data-raw '{
                "credentials" : {
                                   "username": "xxx",
                                   "password": "xxx"                 
                                }
}'
```
### Example Response

```bash
status: 200
{
    "edit_access": true
}

OR

status: 200
{
    "edit_access": false
}

OR

status: 401
body: false
```

## <b>POST /insert</b>

### Resource URL
http://<API_URL>:3000/insert

### Resource Information

- Response Format : JSON
- Authentication : not required

### Parameters

- Entries(required): 
  - description: Object of dashboard table entries to be stored on database.
  - example:   
     ---
            {
              "doc" : {
                    _key: nanoid(),
                    resource_group: "xxx",
                    k8s_cluster: "xxx",
                    k8s_namespace: "xxx",
                    A1_environment: "xxx",
                    web_gitlab_branch: "xxx",
                    jenkins_gitlab_branch: e"xxx",
                    A1_URl: "xxx",
                    PCLM_URL: "xxx",
                    ArangoDB_URL: ["xxx"],
                    Graphana_url: "xxx",
                    Status: "xxx",
                    Remarks: "xxx",
                    HPC_appliance_id_url: "xxx",
                    HPC_appliance_id: "xxx",
                    HPC_appliance_name: "xxx",
                }
            }
    ---
- token(required): 
  - description: Token 
  - example:   
     ---
                        {
                            "token":"KKF6wqSTl6eh1UhbTDNG"
                        }
    ---

### Example Request
```bash
curl --location --request POST 'http://localhost:8000/api/insert' \
--header 'Content-Type: application/json' \
--header 'key: 12311' \
--data-raw '{
    "doc": {        "_key": "xxx",
                    "resource_group": "xxx",
                    "k8s_cluster": "xxx",
                    "k8s_namespace": "xxx",
                    "A1_environment": "xxx",
                    "web_gitlab_branch": "xxx",
                    "jenkins_gitlab_branch": "xxx",
                    "A1_URl": "xxx",
                    "PCLM_URL": "xxx",
                    "ArangoDB_URL": ["xxx"],
                    "Graphana_url": "xxx",
                    "Status": "xxx",
                    "Remarks": "xxx",
                    "HPC_appliance_id_url": "xxx",
                    "HPC_appliance_id": "xxx",
                    "HPC_appliance_name": "xxx"
                },
     "token" : "jt4D79tfA5IsthFbBfrB"
}'
```
### Example Response

```bash
status: 200
body: true

OR

status: 401
body: false
```

## <b>POST /update</b>

### Resource URL
http://<API_URL>:3000/update

### Resource Information

- Response Format : JSON
- Authentication : not required

### Parameters

- Entries(required): 
  - description: Object of dashboard table entries to be updated on database.
  - example:   
     ---
            {
              "doc" : {
                    _key: entrykey,
                    resource_group: "xxx",
                    k8s_cluster: "xxx",
                    k8s_namespace: "xxx",
                    A1_environment: "xxx",
                    web_gitlab_branch: "xxx",
                    jenkins_gitlab_branch: "xxx",
                    A1_URl: "xxx",
                    PCLM_URL: "xxx",
                    ArangoDB_URL: ["xxx"],
                    Graphana_url: "xxx",
                    Status: "xxx",
                    Remarks: "xxx",
                    HPC_appliance_id_url: "xxx",
                    HPC_appliance_id: "xxx",
                    HPC_appliance_name: "xxx",
                }
            }
    ---
- token(required): 
  - description: Token 
  - example:   
     ---
                        {
                            "token":"KKF6wqSTl6eh1UhbTDNG"
                        }
    ---

### Example Request
```bash
curl --location --request POST 'http://localhost:8000/api/update' \
--header 'Content-Type: application/json' \
--data-raw '{
    "doc": {        "_key": "xxx",
                    "resource_group": "xxx",
                    "k8s_cluster": "xxx",
                    "k8s_namespace": "xxx",
                    "A1_environment": "xxx",
                    "web_gitlab_branch": "xxx",
                    "jenkins_gitlab_branch": "xxx",
                    "A1_URl": "xxx",
                    "PCLM_URL": "xxx",
                    "ArangoDB_URL": ["xxx"],
                    "Graphana_url": "xxx",
                    "Status": "xxx",
                    "Remarks": "xxx",
                    "HPC_appliance_id_url": "xxx",
                    "HPC_appliance_id": "xxx",
                    "HPC_appliance_name": "xxx"
                },
     "token" : "jt4D79tfA5IsthFbBfrB"
}'
```
### Example Response

```bash
status: 200
body: true

OR

status: 401
body: false
```

## <b>DELETE /remove</b>

### Resource URL
http://<API_URL>:3000/remove

### Resource Information

- Response Format : JSON
- Authentication : not required

### Parameters

- key(required): 
  - description: The key of the document entry which need to be deleted from the database.
  - example:   
     ---
            headers: {
              'Content-Type': 'application/json',   
              'key' : "13422"
            }
    ---
- token(required): 
  - description: Token require 
  - example:   
     ---
                        {
                            "token":"KKF6wqSTl6eh1UhbTDNG"
                        }
    ---
### Example Request
```bash
curl --location --request DELETE 'http://localhost:8000/api/remove' \
--header 'Content-Type: application/json' \
--header 'key: xxx' \
--data-raw '{
     "token" : "KKF6wqSTl6eh1UhbTDNG"
}'
```
### Example Response

```bash
status: 200
body: true

OR

status: 401
body: false
```
