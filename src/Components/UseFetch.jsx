
// In the above example, an arrow function is declared that takes a single parameter named url.
// This method has been export as default.
import {useState ,useEffect } from 'react'
// The url variable is passed as a parameter in the useFetch arrow function to specify the exact URL of a specific website from which any component can easily fetch data
const UseFetch = (url) => {
    const [data, setData]= useState();
     useEffect(()=>{
        fetch(url).then((res)=>res.json())
        .then((data)=>setData(data))
    },[])
return [data]
}
// useEffect: This is a React Hook used for performing side effects in functional components. It’s typically used for fetching data, subscribing to events, or any other side effects that don’t involve rendering.
// fetch(url): This initiates an HTTP request to the specified url.
// .then((res) => res.json()): This converts the response from the server to JSON format.
// .then((data) => setData(data)): This sets the retrieved data to the state variable data. setData is a function that updates the state in React functional components.
export default UseFetch
