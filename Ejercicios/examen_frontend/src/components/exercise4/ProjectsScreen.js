import React, { useEffect, useState } from 'react';
import { getProjects } from '../../helpers/getProjects';
import './ProjectsScreen.css';

export const ProjectsScreen = () => {

  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState({
      projects: [],
      status: 'empty'
  }
  );

  useEffect(() => {
  }, [data])
  


   const handdleSearch = () =>{
     
       if( inputValue.trim().length > 2){

          setData({
            projects: [],
            status: 'searching'
          })
         
          getProjects(inputValue )
            .then( projects => {
                console.log(projects)
                setData({
                  projects: projects,
                  status: 'complete'
                });
          })
        }
        console.log('Submit hecho');
        setInputValue('');
   }

   const handleInputChange = (event) =>{ 
      setInputValue(event.target.value); 
      setData({
        projects: [],
        status: 'empty'
      });
    } 
      
  return (
    <>
        <div className="row ">
            <div className="col-sm-12">
                <h1 className="pb-1 color-white-font">Buscar Proyectos</h1>
                <hr className="color-white-font" />  
            </div>
        </div>
        <div className="row pb-2">    
            <div className="col-sm-3">
                <span className="font-size-span color-white-font">Ingrese el nombre del proyecto</span>
            </div>
            <div className="col-sm-7 ">
                 <input 
                   type="text" 
                   className="width-input"
                   value= {inputValue}
                   onChange={handleInputChange}
                 />
            </div>
            <div className="col-sm-2 ">
                <button type="button" className="width-input btn btn-primary" onClick={handdleSearch}>Search</button>  
            </div>
         </div>
         <div className="row ">   
            {   
              data.status ==='searching' && 
              <div className="col-sm-12 ">
                  <div className="div-img">
                    <div className="spinner spinner-border text-light" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
              </div>
            } 
            {   
                data.status ==='complete' &&
                data.projects.map ( (project,i) => {
                return <>
                     <div className="col-sm-6 card card-style" key={i}>
                         <div className="card-body">
                           <h5 className="card-title">Name: {project.name}</h5>
                           <hr />
                           <p className="card-text">Description: {project.description}</p>
                           <p>Language: {project.language}</p>
                           <p>Platform: {project.platform}</p>
                           <p>Homepage: {project.homepage}</p>
                           <p>Repository Url: {project.repository_url}</p>
                         </div>
                      </div>
                </>
              })
            }
          </div>
      </>
   ); 
}

