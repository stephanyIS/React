import React from 'react'
import PropTypes from 'prop-types';
//impt

export const GifGridItem = ( {title, url }) => {

 
  return (
    <div className="card">
        <img  className='animate__animated animate__fadeIn' src={url} alt={title}/>
        <p> { title} </p>
    </div>
  )
}


GifGridItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string .isRequired
}