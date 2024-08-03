import React from 'react'
import withDataFetching from '.'

const Component1 = ({data}) => {

  return (
    <>
        <h1>Component1</h1>
        <div>
            {data ? JSON.stringify(data) : 'Loading ...'}
        </div>
    </>
    
  )
}

const AugmentedComponent1 = withDataFetching(Component1, 'https://jsonplaceholder.typicode.com/posts/1')

export default AugmentedComponent1