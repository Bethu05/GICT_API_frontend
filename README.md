# GICT_API_frontend
Frontend to communicate with GICT Systems backend API
## First Created a React APP
### Dependencies
  - react and react-dom
  - react-router-dom
  - npm axios
 
## SUCCESSFUL OUTCOME

### POST FORM DATA
<prep>
    POST request without authorization header resulted in: 
  
        Status: 200 OK
        Response: `{"StatusCode":0,"Message":"Successfully Submited"}`
  
</prep>

### GET FORM DATA
<prep>
    GET request without the authorization header => (In this case Used own api not returning CORS error):
  
        Table refreshing: the table refreshes list and update table after 10 seconds without reloading the page
  
</prep>

## PROBLEMS / CHALLENGES ENCOUNTERED
### POST
<prep> 
  1. POST request without the authorization header the results is:

        Did not get the status `201 Created` code
</prep> 
<prep>  
    2. POST request with the authorization header including 'Bearer + authorization'
        Status: 401 Unauthorized error
  
        Catch Error: `Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://developers.gictsystems.com/api/dummy/items/.  (Reason: CORS preflight response did not succeed). Status code: 401`
</prep>
 
### GET
<prep>
    1. GET request without the authorization header the results is:

        Status: 401 Unauthorized error
    
        Catch Error Message : `message: "Request failed with status code 401", name: "AxiosError", code: "ERR_BAD_REQUEST", ...`
  
        Response: `{"StatusCode":1,"Message":"Unauthorized Access"}`
 </prep>
 <prep>
    2. GET request with the authorization header including 'Bearer + authorization'

        Status: 401 Unauthorized error
  
        Response Body: `Response body is not available to scripts (Reason: CORS Preflight Did Not Succeed)`
      
        Catch Error : `Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://developers.gictsystems.com/api/dummy/items/. (Reason: CORS request did not succeed). Status code: (null).`</prep>
