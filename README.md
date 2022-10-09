# GICT_API_frontend
Frontend to communicate with GICT Systems backend API
## First Created a React APP
### Dependencies
  - npm axios

### Problems / Challenges encountered
#### 1. POST
1. POST request without the authorization header the results is:

  **401 Unauthorized error**
  
2. POST request with the authorization header with 'Bearer + authorization'

  **401 Unauthorized error**
  ```
    `Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://developers.gictsystems.com/api/dummy/items/.  (Reason: CORS preflight response did not succeed). Status code: 401`
  ```
  #### 2. GET
1. GET request without the authorization header the results is:

  **401 Unauthorized error**
  
  With Error Message : `Request failed with status code 401`
  
  Response: `{"StatusCode":1,"Message":"Unauthorized Access"}`
  
2. POST request with the authorization header with 'Bearer + authorization'

  **401 Unauthorized error**
  
  Response Body: `Response body is not available to scripts (Reason: CORS Preflight Did Not Succeed)`
  
  ```
    `Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://developers.gictsystems.com/api/dummy/items/. (Reason: CORS request did not succeed). Status code: (null).`
  ```
