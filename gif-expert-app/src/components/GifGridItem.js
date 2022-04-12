import React from 'react'

export const GifGridItem = ( {title, url }) => {

 
  return (
    <div className="card">
        <img  className='animate__animated animate__fadeIn' src={url} alt={title}/>
        <p> { title} </p>
    </div>
  )
}
