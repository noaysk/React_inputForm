import React from 'react';

class ContactForm extends React.Component {
  render() {
    return (
      <div className='contact-form'>
        <form>
          <p>Mail Address（required）</p>
          {/* added input tag */}
          <input />
          
          <p>Inquiry Form（required）</p>
          {/* added textarea tag */}
          <textarea />
          
          {/* added submit button */}
          <input type='submit' value='Submit' />
          
        </form>
      </div>
    );
  }
}

export default ContactForm;
