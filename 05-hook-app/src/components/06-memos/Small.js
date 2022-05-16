import React from 'react'

export const Small = React.memo(({value}) => {

  console.log('Me volvi a llamar :(');

  return (
        <small>{ JSON.stringify(value)}</small>
  )
})
