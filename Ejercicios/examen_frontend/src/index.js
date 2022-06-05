import React from 'react';
import ReactDOM from 'react-dom/client';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faHouse } from '@fortawesome/free-solid-svg-icons'
import { AppExam } from './AppExam';

library.add(fab, faCheckSquare, faCoffee, faHouse);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <AppExam />
);


