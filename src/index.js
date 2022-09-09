import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter , Routes , Route} from 'react-router-dom'

import RecoveryPage from './routes/RecoveryPage'
import CloudPage from './routes/CloudPage'
import ContactPage from './routes/ContactPage'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path='/Template_13/' element={<App/>} />
        <Route path='/Template_13/recovery' element={<RecoveryPage/>} />
        <Route path='/Template_13/cloud' element={<CloudPage/>} />
        <Route path='/Template_13/contact' element={<ContactPage/>} />
    </Routes>
  </BrowserRouter>
);


