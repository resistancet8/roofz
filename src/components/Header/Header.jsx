import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './Header.scss';
import { Button, Modal } from 'semantic-ui-react';
import Register from './../Register/Register';

const Header = ({ history }) => {
  let [ modalOpen, changeModalOpen ] = useState(false);

  const show = () => { changeModalOpen(true) }
  const close = () => { changeModalOpen(false) }

  return (
    <div id="header">
      <Register open={modalOpen} close={close} />
      <div className="left">
        <h1 className="m-0 font-weight-bold" onClick={e => history.push('/')}>RoofzNfloorz</h1>
        <ul>
          <li>Customer Service</li>
          <li>Home Loans</li>
        </ul>
      </div>
      <div className="right">
        <Button class="mr-1" basic color='grey' size='large'>
          Post Property
          </Button>
        <Button primary size='large' onClick={show}>
          Sign up or Log in
          </Button>
      </div>
    </div>
  );
}

export default withRouter(Header);