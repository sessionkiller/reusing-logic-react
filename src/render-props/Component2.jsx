import React from 'react'
import DataFetcher from '.'

const Component2 = () => {

  return (
    <>
        <h1>Component2</h1>
        <DataFetcher
          url='https://jsonplaceholder.typicode.com/posts/5'
          render={(data) => (
            <div>
              {data ? JSON.stringify(data) : 'Loading ...'}
            </div>
          )}
        />
    </>
    
  )
}

export default Component2