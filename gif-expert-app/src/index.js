/* React 17
import React from 'react';
import ReactDOM from 'react-dom';
import GifExpertApp from './GifExpertApp';
import './index.css';

ReactDOM.render(
    <GifExpertApp />,
    document.getElementById('root')
);
*/

//React 18
import React from 'react';
import { createRoot } from 'react-dom/client';
import GifExpertApp from './GifExpertApp';
import './index.css';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<GifExpertApp />);