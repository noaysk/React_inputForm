import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-inner'>
          <div className='footer-logo'>
          <img src='../assets/icons8-logo-50b.png' alt="logo"/>
            <p>Learn to code, learn to creative.</p>
          </div>
          <ul className='footer-list'>
            <li>company</li>
            <li>career</li>
            <li>contact</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
