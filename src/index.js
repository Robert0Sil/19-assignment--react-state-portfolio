import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';

import App from './App';
import { projectData } from './data/datasource2.js'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App project ={projectData} />, document.getElementById('root'));
registerServiceWorker();
