import React from "react";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      email: "",
      hasEmailError: false,
    };
  }

  handleEmailChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === "";
    this.setState({ email: inputValue, hasEmailError: isEmpty });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.email.length > 0) {
      this.setState({ isSubmitted: true });
      console.log("submit");
    }else{
        this.setState({ hasEmailError: true });
        console.log("unsubmit");
    }
  };

  render() {
    let emailErrorText;
    if (this.state.hasEmailError) {
      emailErrorText = (
        <p className="contact-message-error">Email address is required</p>
      );
    }

    let contactForm;
    if (this.state.isSubmitted) {
      contactForm = (
        <div className="contact-submit-message">Submission Complete</div>
      );
    } else {
      contactForm = (
        <form onSubmit={this.handleSubmit}>
          <p>Mail Address（required）</p>
          <input
            value={this.state.email}
            onChange={(event) => {
              this.handleEmailChange(event);
            }}
          />

          {emailErrorText}

          <p>Inquiry Form</p>
          <textarea />
          <input type="submit" value="Submit" />
        </form>
      );
    }

    return <div className="contact-form">{contactForm}</div>;
  }
}

export default ContactForm;
