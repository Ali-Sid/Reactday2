// 30-Days-Of-React-Challenge: Day2: Intro to react
// Exercises: What is React

// 1. What is React?
/**
 * React is a JavaScript library for building reusable User Interface (UI) components easily. It was developed by Facebook and was released on May 29, 2013.
 */


// 2. What is a library?
// A library is a collection of pre-written code that is used for easier development of applications.
// Libraries

// 3. What is a single page application?
// A single page application is an application that has just one html file. Such kind of app doesn't need to reload the page during it's use and works withing a browser.

// 4. What is a component ?
// Components are reusable piece of code that divides ui into smaller pieces, making it easier to build and manage user interfaces.

// 5. What is the latest version of React?
// The latest and current version of React is 18.

// 6. What is DOM?
// Document Object Model is an interface that represents how your HTML documents are read by the browser. It allows JavaScript to manipulate, structure, and style your website.
// It allows programs and scripts to dynamically access and update the content, structure, and style of a document.

// 7. What is React Virtual DOM?
// It is the light-weight copy of the actual DOM. It is a representation of the UI components and their structure which is kept in memory and synced with the actual DOM using a library called ReactDOM without directly changing what is shown on the user's browser.

// 8. What does a web application or a website(composed of) have?
// It consists of various components such as HTML, CSS, JavaScript, JS Framework/library like React, Vue, or Angular, a Backend server (Node.js).



// Exercises: Why React?
// 1. Why did you chose to use react?
// Because it is fast, has a huge community, easier to learn, modular, scalable, flexible.

// 2. What measures do you use to know popularity ?
// I check the offical github repository of React and its alternative framework's github repos and check no. of starts, no. of times forked, stackoverflow or related websites, npm downloads, job market demand, community size.

// 3. What is more popular, React or Vue ?
// React is more popular than vue as it has gained significant popularity and has a large and active community of developers. It is widely used by many renowned companies, including Facebook, Instagram, Airbnb, and Netflix. React's popularity is evident from its high number of GitHub stars, extensive ecosystem of libraries and tools, and its frequent updates and improvements.
// Vue is also quite popular and it's difficult to say which is the clear winner over another as both are popular and used by many renowned companies.

// Exercises: JSX
// 1. What is an HTML element?
// An HTML elements is a component of an HTML document that structures and interprets a part of the HTML document. It constains a starting tag, content and an ending tag eg: <p>some content...</p>

// 2. How to write a self closing HTML element?
// To write a self-closing tag, simply open the tag, write tag name, write a slash (as you do it for a closing tag), and close the tag. eg: <img />, <br />, <hr />, <input>, etc...

// 3. What is an HTML attribute? Write some of them
// An HTML attribute provise additional information about elements it is used in the starting tag to control the behavior of an element like to adjust or to display an HTML element. eg: it can be used to style an element like color, border, etc...
// eg: <img> tag consists of src attribute to specify the path to the image to be displayed. <img src="./img/demo.png" /> or <img src="https://pexels.com/search/cats"
// eg: <a> tag is used that defines a hyperlink ehich is used to link the page with other page. Here, href attribute is used to specify the path of the link. <a href="https://google.com">Google</a>

// 4. What is JSX?
// JSX (JavaScript XML) is an extention to the javascript syntax used in React. It allows you to write HTML-like syntax code directly within the javascript file. With JSX, you can combine JS logic and HTML-like syntax in a single file.
// eg: const words = <h1>Hello World!</h1>

// 5. What is babel?
// It is a transpiler that converts JS' EcmaScript latest version to the previous versions that can run in older browsers and environments.
// It also helps to transform JSX syntax used in frameworks like React into plain JavaScript function calls.

// 6. What is a transpiler?
// A transpiler is a type of compiler that translates source-code written in one programming language into another language or translates the souce code from one version to another versions. eg: babel.

// Exercises: JSX Elements
// 1. What is a JSX element?
// A JSX element is an XML element which is used to write in a Javascript file or Jsx. It has an HTML-like syntax.
// JSX elements are virtual representations of DOM elements or components in React. 
// They resemble HTML syntax but are a syntax extension of JavaScript. 
// JSX elements are used to define the structure and composition of user interfaces in React applications.
// They can have attributes and be nested to create complex UI structures.
// JSX elements are transformed into JavaScript code and rendered by React.

// 2. Write your name in a JSX element and store it in a name variable
const name = <h1>Ali Siddiqui</h1>

// 3. Write a JSX element which displays your full name, country, title, gender, email, phone number. Use h1 for the name and p for the rest of the information and store it in a user variable.
const user = (
    <div>
        <h1>Full name: Ali Siddiqui</h1>
        <p>country: India</p>
        <p>Title: Front-end Developer</p>
        <p>Gender: Male</p>
        <p>Email: alisiddiqui465@gmail.com</p>
        <p>Phone number: +1 234 567 890</p>
    </div>
)

// 4. Write a footer JSX element
const FooterEl = (
    <footer>
        <p>&copy 2023 Website. All rights reserved.</p>
    </footer>
)


// Exercises: Inline Style

// 1. Create a style object for the main JSX
const mainStyle = {
    backgroundColor: lightgray,
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    color: 'black'
}

const Main = (
    <main className="main">
        <div style={mainStyle}>
            <h1 style={headingStyle}>This is a main section</h1>
            <p style={paragraphStyle}>This is a paragraph...</p>
        </div>
    </main>
)

// 2. Create a style object for the footer and app JSX
const footerStyle = {
    backgroundColor: 'darkgray',
    padding: '10px',
    textAlign: 'center',
    color: 'white'
}

const appStyle = {
    fontFamily: 'Arial, sans-serif'
}

const Footer = (
    <footer>
        <div style={footerStyle}>
            <p style={paragraphStyle}>&copy; 2023 My Website. All rights reserved.</p>
        </div>
    </footer>
)

const App = (
    <div style={appStyle}>
        {Main}
        {Footer}
    </div>
)

// 3. Add more styles to the JSX elements
const headingStyle = {
    fontSize: '24px',
    marginBottom: '10px',
    fontWeight: 'bold'
}

const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.5'
}

/*
.......
const mainStyle = {
  backgroundColor: 'lightgray',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  color: 'black'
}

const Main = (
  <main>
    <div style={mainStyle}>
      <h1 style={headingStyle}>This is a main section</h1>
      <p style={paragraphStyle}>This is a paragraph...</p>
    </div>
  </main>
)

const footerStyle = {
  backgroundColor: 'darkgray',
  padding: '10px',
  textAlign: 'center',
  color: 'white'
}

const appStyle = {
  fontFamily: 'Arial, sans-serif'
}

const Footer = (
  <footer>
    <div style={footerStyle}>
      <p style={paragraphStyle}>&copy; 2023 My Website. All rights reserved.</p>
    </div>
  </footer>
)

const App = (
  <div style={appStyle}>
    {Main}
    {Footer}
  </div>
)
*/

// Exercises: Internal Style
// 1. Apply different styles to your JSX elements.

const diffStyle = (
    <div>
        <style>
            {`
            .main {
                background-color: lightgray;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                color: black;
                font-family: Arial, sans-serif;
            }
            .heading {
                font-size: 24px;
                margin-bottom: 10px;
                font-weight: bold;
                color: blue;
              }
              .paragraph {
                font-size: 16px;
                line-height: 1.5;
                color: gray;
              }
              .italic {
                font-style: italic;
              }
            `}
        </style>
    </div>
)


// Exercise: Inject data to JSX
// 1. Practice how to make JSX element and injecting dynamic data(string, number, boolean, array, object)

const myName = 'Ali'
const age = 21
const isStudent = true
const hobbies = ['reading', 'writing blogs', 'singing', 'playing cricket']
const address = {
    street: 'Ali\'s street',
    city: 'Hyderabad',
    country: 'India'
}

const myDetails = () => {
    return (
        <div>
            <h1>Welcome, {myName}!</h1>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? 'Yes' : 'No'}</p>
            <p>Hobbies: {hobbies.join(', ')}</p>
            <p>Address: {address.street}, {address.city}, {address.country}</p>
        </div>
    )
}