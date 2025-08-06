 import axios from 'axios';

 const  authenticateUser=(payload:any)=>{
    const url =`${process.env.BASE_URL}${process.env.AUTHENTICATION_ENDPOINT}`;
    console.log(payload);
    return axios.post(url,payload, 
        {
            headers: {
             "Content-Type": "application/json",
          }
        }).then((response:any)=>{
          console.log(response);
   return response.data;
}).catch((error:any)=>
{
    if (error.response && error.response.data && error.response.data.message) {
        console.error("Error:", error.response);
       // alert(error.response.data.message); // show backend's message
       return error.response.data;
      } else {
        console.error("Unexpected error:", error.message);
         // No response from server (backend down, network error, CORS issue)
    alert("Server is not responding. Please try again later.");
    return { error: "Server unavailable" }; // Optional: send a fallback error object
      }
}
);

}

export default authenticateUser;