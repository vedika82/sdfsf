import React from 'react'
import useFetch from './UseFetch'; //imported useFetch custom hook
import './FetchData.css'

const FetchData = () => {
  // Implement the custom hook by passing the specific url from which you want to fetch data inside the FetchData arrow function. Also include console.log to check whether data has been retrieved in the variable data
  const [data]=useFetch('https://api.npoint.io/9045c260b1565daa9e15');
  console.log(data);
  return (
    <>
{/* Now you need to fetch data from API Data Link. There are two approaches to fetch the data: */}
{/* First, implement the logic using the fetch API method within each component that needs to fetch data. Suppose you have 5 components in which you need to load the data from external source. In this case, for each component you need to write the similar logic to fetch the details. */}
{/* Second, create a reusable custom hook. This custom hook encapsulates the data fetching logic, allowing it to be reused across multiple components without the need to rewrite the entire code to fetch details in each component. */}
      <h1 className='usefetch_heading'>Use Fetch Custom Hook</h1>
     <ul className='list_data_main'>
        {/* To retrieve the data, you need to perform an iteration of the data array to fetch the entire data. You need to apply the map array method  */}
         {data && data.map((e, index)=>(
      <>
      {/* here we have multiple data in the console thata needs to be fetched  */}
      {/* selective data fetched */}
      {/* These distinct types, then can fetch data using "e" variable that you have passed as parameter in the map method. */}
      {/* Note: The e parameter contains the value of each array index for every iteration. */}
      <li key={index} className='lsit_data'>
        <h3>{e.name}</h3>
        <p><strong>Importance: </strong>{e.importance}</p>
        <p><strong>Benefits: </strong>{e.benefits}</p>
        <p><strong>Time to eat: </strong>{e.best_time_to_intake}</p>
      </li>
      </>
    ))}
     </ul>
    </>
  )
}

export default FetchData