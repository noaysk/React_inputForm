import React from "react";

class ContactForm extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
    };
  }

  render() {
    let contactForm;
    if (this.state.isSubmitted) {
      contactForm = <div className="contact-submit-message">Submission Complete</div>;
    } else {
      contactForm = (
        <form>
        <p>Mail Address（required）</p>
        <input />
        <p>Inquiry Form（required）</p>
        <textarea />
        <input type='submit' value='Submit' />
        </form>
      );
    }


    return (
      <div className="contact-form">
        {contactForm}
      </div>
    );
  }
}

export default ContactForm;
