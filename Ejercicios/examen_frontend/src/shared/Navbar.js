import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import { useState } from 'react';
import './Navbar.css';

export const Navbar = () => {

    const [dropdown, setDropdown] = useState(false);

    const openCloseDropdown = () => {
        setDropdown(!dropdown);
    }


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
                         <Dropdown isOpen={dropdown} toggle={openCloseDropdown}>
                            <DropdownToggle caret>
                                Javascript avanzado (4)
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>
                                    <NavLink className= { ({ isActive }) => 'drop-style nav-item nav-link ' + (isActive ? 'active' : '')} to="/exercise4-platform">
                                        Listado de plataformas
                                    </NavLink>    
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink className= { ({ isActive }) => 'drop-style nav-item nav-link ' + (isActive ? 'active' : '')} to="/exercise4-projects">
                                        Buscar proyectos
                                    </NavLink>    
                                </DropdownItem>
                             </DropdownMenu>
                        </Dropdown>                         
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




