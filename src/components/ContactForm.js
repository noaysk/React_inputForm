import React from "react";

class ContactForm extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      email: '',
    };
  }

  handleEmailChange(event){
    const inputValue = event.target.value;
    this.setState({email: inputValue});
    console.log(event.target.value)
  }

  
  handleSubmit(){
    this.setState
     ({isSubmitted: true});
    
 }

  render() {
    let contactForm;
    if (this.state.isSubmitted) {
      contactForm = <div className="contact-submit-message">Submission Complete</div>;
    } else {
      contactForm = (
        <form onSubmit={()=>{this.handleSubmit()}}>
        <p>Mail Address（required）</p>
        <input value={this.state.email} 
        onChange={(event)=>{this.handleEmailChange(event)}}       
        />
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
