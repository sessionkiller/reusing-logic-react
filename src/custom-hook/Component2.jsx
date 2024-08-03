import React from 'react'
import useFetch from '.';

const Component2 = () => {
  const data = useFetch('https://jsonplaceholder.typicode.com/posts/2');

  return (
    <>
        <h1>Component2</h1>
        <div>
            {data ? JSON.stringify(data) : 'Loading ...'}
        </div>
    </>
    
  )
}

export default Component2