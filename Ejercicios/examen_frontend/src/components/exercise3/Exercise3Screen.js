import React, { useState } from 'react';
import './Exercise3Screen.css'
import {getImage} from '../../helpers/getImage';
export const Exercise3Screen = () => {

  const [img, setImg] = useState({
    message: '',
    status: 'empty'
  })

  const handdleImgChange = () => { 
    getImage ().then( img => {
      setImg(img);
    }); 
  }
  
  return (
    <>
      <div className="row color-white-font">
          <h1 className="pb-1">Habilidades de Framework Javascript Avanzado</h1>
          <hr />
        
      </div>
      <div className="row ">
          <div className="col-sm-12 box-btn">
             <button type="button" className="btn btn-primary" onClick={handdleImgChange}>View image here!</button>
          </div>
          {   
              img.status === 'empty' &&
              <div className="col-sm-12 box-img">
                  <div className="div-img">
                    <div className="spinner spinner-border text-light" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
              </div>
          } 

          {
            img.status !== 'empty' && 
            <div className="col-sm-12 box-img">
                 <div className="div-img">
                 <img  className='animate__animated animate__zoomIn' src={img.message} alt="..."/> 
                 </div>
            </div>
          }          
      </div>
    </>
  )
}
