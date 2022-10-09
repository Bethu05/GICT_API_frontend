# GICT_API_frontend
Frontend to communicate with GICT Systems backend API
## First Created a React APP
### Dependencies
  - react and react-dom
  - react-router-dom
  - npm axio
  -
### Success

#### POST THE FORM DATA
<prep>
 1. POST request without authorization header resulted in: 
  
      Status: 200 OK
      Response: `{"StatusCode":0,"Message":"Successfully Submited"}`
  
</prep>

### Problems / Challenges encountered

1. POST request without the authorization header the results is:

      Did not get the status `201 Created` code

<prep>  
2. POST request with the authorization header with 'Bearer + authorization'
      Status: 401 Unauthorized error
  
      Catch Error: `Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://developers.gictsystems.com/api/dummy/items/.  (Reason: CORS preflight response did not succeed). Status code: 401`
</prep>
 
  #### 2. GET
<prep>
1. GET request without the authorization header the results is:

      Status: 401 Unauthorized error
  
      With Error Message : `Request failed with status code 401`
  
      Response: `{"StatusCode":1,"Message":"Unauthorized Access"}`
 </prep>
 <prep>
2. POST request with the authorization header with 'Bearer + authorization'

      Status: 401 Unauthorized error
  
      Response Body: `Response body is not available to scripts (Reason: CORS Preflight Did Not Succeed)`
      
      Catch Error : `Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://developers.gictsystems.com/api/dummy/items/. (Reason: CORS request did not succeed). Status code: (null).`</prep>
