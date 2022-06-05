import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Navbar = () => {


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
             <div className="container-fluid">
                 <Link className="navbar-brand" to="/">
                    <FontAwesomeIcon icon="house" /> 
                 </Link>

                 <div className="navbar-collapse">
                     <div className="navbar-nav">
                         <NavLink  className= { ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')} to="/exercise2">
                             Javascript (2)
                         </NavLink>
                         <NavLink className= { ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')} to="/exercise3">
                             Javascript avanzado (3)
                         </NavLink>
                         <NavLink className= { ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')} to="/exercise4">
                             Javascript avanzado (4)
                         </NavLink>                  
                     </div>
                 </div>
             </div>        

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">
                        Stephany Pineda
                    </span>                   
                </ul>
            </div>
        </nav>
    )
}




