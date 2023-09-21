import React from 'react';
import Lesson from './Lesson';
import ContactForm from './ContactForm';

class Main extends React.Component {
  render() {
    const lessonList = [
      {
        name: 'HTML & CSS',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg',
        introduction: 'The appearance of a web page is created by the languages HTML and CSS. Lets learn while actually creating a web page!',
      },
      {
        name: 'Sass',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/sass.svg',
        introduction: 'Sass is a language that makes CSS more useful and efficient.',
      },
      {
        name: 'JavaScript',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg',
        introduction: 'JavaScript is a programming language with a wide range of possibilities, not only for the front end, but also for the server side.',
      },
      {
        name: 'React',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg',
        introduction: 'React is a JavaScript library that can you to create of your site like HTML.',
      },
    ];

    return (
      <div className='main-wrapper'>
        <div className='main'>
          <div className='copy-container'>
            <h1>Hello, World.</h1>
            <h2>Welcome to Programming World</h2>
          </div>
          <div className='lesson-container'>
            <h3>Your Class</h3>
            { lessonList.map((lessonItem) => {
              return (
                <Lesson
                  name={ lessonItem.name }
                  image={ lessonItem.image }
                  introduction={ lessonItem.introduction }
                />
              );
            }) }
          </div>
          <div className='contact-container'>
            <h3>Contact</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
