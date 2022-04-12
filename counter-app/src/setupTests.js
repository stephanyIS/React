
//import '@testing-library/jest-dom/extend-expect'; viene con el creat react app por defecto

//Importacion para las ayudas de los tests
import '@testing-library/jest-dom'
//Importaciones para enzyme y su respectiva configuración
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
//Configuracion para los snapshots  
import {createSerializer} from 'enzyme-to-json';


Enzyme.configure({ adapter: new Adapter() });// enzyme
expect.addSnapshotSerializer(createSerializer({mode: 'deep'})); //snapshot enzume to json
