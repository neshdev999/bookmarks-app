import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
   <Nav />
  </BrowserRouter>
 , div);
  ReactDOM.unmountComponentAtNode(div);
});
