import React from 'react'
import DataFetcher from '.'

const Component1 = ({data}) => {

  return (
    <>
        <h1>Component1</h1>
        <DataFetcher
          url='https://jsonplaceholder.typicode.com/posts/4'
          render={(data) => (
            <div>
              {data ? JSON.stringify(data) : 'Loading ...'}
            </div>
          )}
        />
    </>
    
  )
}

export default Component1