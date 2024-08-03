import React from 'react'
import useFetch from '.'

const Component1 = () => {

    const data = useFetch('https://jsonplaceholder.typicode.com/posts/1');

  return (
    <>
        <h1>Component1</h1>
        <div>
            {data ? JSON.stringify(data) : 'Loading ...'}
        </div>
    </>
    
  )
}

export default Component1