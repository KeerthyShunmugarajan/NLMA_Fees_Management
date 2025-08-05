import React from "react"

const TestView=(props: any)=>{
    
    const message="Hello Frontend"
    return(
    <>
   
        <h1>My React and TypeScript App!!{""}{new Date().toLocaleDateString()}</h1>
        <h2>{message} {props.message_Parent}</h2>
        <h3>{process.env.BASE_URL}{process.env.ENDPOINT}</h3>
    </>
    )
}

export default TestView;