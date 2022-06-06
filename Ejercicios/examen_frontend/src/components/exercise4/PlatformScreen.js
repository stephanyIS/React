import React, { useEffect, useState } from 'react'
import { getPlatforms } from '../../helpers/getPlatforms';

export const PlatformScreen = () => {

  const [plats, setPlats] = useState([]);

  useEffect(() => {
        getPlatforms().then( data => {
            loadData(data);
        }); 
   }, []);
  
   const loadData = (data)=>{
      setPlats(data);
   }

  return (
    <>
        <div className="row color-white-font">
          <h1 className="pb-1">Listado de Plataformas</h1>
          <hr className="mb-4"/>

          <table className="table table-dark">
           <thead>
             <tr>
               <th scope="col">Name</th>
               <th scope="col">Proyect count</th>
               <th scope="col">Homepage</th>
               <th scope="col">Color</th>
               <th scope="col">Default language</th>
             </tr>
           </thead>
           <tbody>
             {
                 plats.map( plat => {
                    console.log(plat);
                    return <>
                        <tr key={plat.project_count}>
                            <td>{plat.name}</td>
                            <td>{plat.project_count}</td>
                            <td>{plat.homepage}</td>
                            <td>{plat.color}</td>
                            <td>{plat.default_language}</td>
                        </tr>   
                    </>         
                 })
             }
           </tbody>
         </table>
        </div>
    </>
  )
}
