import React from 'react'
import withDataFetching from '.'

const Component2 = ({data}) => {

  return (
    <>
        <h1>Component2</h1>
        <div>
            {data ? JSON.stringify(data) : 'Loading ...'}
        </div>
    </>
    
  )
}

const AugmentedComponent2 = withDataFetching(Component2, 'https://jsonplaceholder.typicode.com/posts/3')

export default AugmentedComponent2