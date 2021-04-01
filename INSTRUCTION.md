# Instruction for the React-Styling-Demo

## Walkthrough structure
  - Sitebar (reactstrap - class component)
  - BoxHero (radium - functional)
  - TextContent (styled components - functional)
  - Footer (material-ui - class component)

Have a different student describe what they think the output is for each component. 

Then run `npm start` in the terminal to display the actual output.

Make sure to have the students either stop the terminal from running or open up another terminal window in order to install the different dependencies.

*****************************************************************

## BoxHero.js
In the static terminal, install Radium.
    `npm install radium`
At this time, take a moment to pull up the documentation on Radium.

### What is Radium?
*Radium is a set of tools to manage inline styles on React elements. It gives you powerful styling capabilities without CSS.* 

### Features
Radium essentially extends inline-styling to include some common CSS features and techniques that inline styles don't easily accommodate such as media queries, browser states (:hover, :focus, and :active) and modifiers. 

We can use Radium with classes, createClass, and stateless components.

Documentation: https://formidable.com/open-source/radium/

### Syntax
We start by importing Radium into this component.

  `import Radium from 'radium';

Then, we wrap the whole component with Radium(). We do this by refactoring the export of the component.

  `export default Radium(NameOfComponent);`

From there, we build out a styles object outside of the component. We can build a variety of keys that hold objects inside of them that contain style properties, just like regular CSS. 
**Note: The style properties are camelCased**

### Project Code
  `
    const styles = {
      boxhero: {
        backgroundColor: 'black',
        height: '80vh',
        color: '#F78A7E',
        textAlign: 'center',
        paddingTop: '12em'
      },

      button: {
        backgroundColor: '#F78A7E',
        borderColor: '#F78A7E',
        color: 'white',
        borderRadius: '5px',
        height: '4em',
        width: '10em',
      }
    }
  `

Inside of the `<div>` in the return, add a style attribute of the boxhero property. Since this is just an object, we can dig into this styles object using dotnotation. 
  
  `<div style={styles.boxhero}>`

Now do the same thing to the button.

  `<button style={styles.button}>SHOP NOW</button>`

Let's add that an on hover effect to the button. Give the students 10-ish minutes to research and try it themselves.

  `
    const styles = {
      boxhero: {
        backgroundColor: 'black',
        height: '80vh',
        color: '#F78A7E',
        textAlign: 'center',
        paddingTop: '12em'
      },

      button: {
        backgroundColor: '#F78A7E',
        borderColor: '#F78A7E',
        color: 'white',
        borderRadius: '5px',
        height: '4em',
        width: '10em',

        ':hover': {
            backgroundColor: '#FFAAA0',
            borderColor: '#FFAAA0'
        }
      }
    }
  `

*****************************************************************

## Navbar/Sitebar.js
ADD MORE CONTENT
Since we have already been working with Reactstrap, we are not going to spend a lot of time on this.

In the static terminal, install Reactstrap and Bootstrap.

    `npm install reactstrap bootstrap`

In the *index.js* add the following line to set up Bootstrap in your file. We do this so that Reactstrap has access to and can piggyback of the code Bootstrap provides

  `import 'bootstrap/dist/css/bootstrap.min.css';`

Back in Navbar/Sitebar.js, import Radium and the following items from Reactstrap:

  ` import Radium from 'radium';
    import {
      Collapse,
      Navbar,
      NavbarToggler,
      NavbarBrand,
      Nav,
      NavItem,
      NavLink 
    } from 'reactstrap';
  `

Time to implement the Reactstrap. This is something the students are already familiar with so let them put together the Reactstrap elements. All the elements are in the component. The students will just be replacing current elements with Reactstrap elements.

Let's start with implementing Radium in this component first. Challenge the students to apply a background color (#0B2249) to the whole navbar and a font color (#F78A7E) to each piece of text. Below is the styles object and the style attributes.

  `const styles = {
		navbar: {
			backgroundColor: '#0B2249'
		},
		text: {
			color: '#F78A7E'
		}
  }`

	`<div style={styles.navbar}>...</div>`
	`<NavbarBrand href="/" style={styles.text} >ORION</NavbarBrand>`
	`<NavLink href="/components/" style={styles.text}>SHOP</NavLink>`
	`<NavLink href="https://github.com/reactstrap/reactstrap" style={styles.text} >FAQ</NavLink>`
	`<NavLink href="https://github.com/reactstrap/reactstrap" style={styles.text} >SUPPORT</NavLink>`
	`<NavLink href="https://github.com/reactstrap/reactstrap" style={styles.text} >MAINTENANCE</NavLink>`

*****************************************************************

## TextContent.js
In the static terminal, install Styled Components.
    `npm install styled components`
At this time, take a moment to pull up the documentation on Styled Components.

### What is Styled Components?
*Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!* 

### Features
Styled Components looks and acts incredibly similar to Radium expect for a couple of differences. Most notibly, the styles object is broken apart and some Radium features such as browser states cannot be altered with Styled Components.

Documentation: https://styled-components.com/

### Syntax
Start by importing Styled Components into the TextContent component.

	`import styled from 'styled-components;`

To use Styled Components, we build out a template literal for each element we want to style. 

	`
		const VariableName = styled.htmlElement`
			style-property: value;
		`;
	`

Things to note for this syntax are:
  - The backticks after the htmlElement declaration, 
  - The styling properties are written just like our normal CSS properties, and
  - Each key-value pair is separated by a semi-colon 

### Project Code

For this component, we will create three (3) different template literals to style out project: a wrapper, a header, and text styling.

Time to build the first one: the wrapper. We will do this between the import statements and the function declaration.

  `
    const Wrapper = styled.div`
      height: 27vh;
      width: 80vw;
      margin: auto;
      margin-top: 3em;
    `
  `

Let's break this down. We are styling a div and setting the height, width, margin, and margin-top. The next step is to apply it. Time to refactor some code!

We will target each of the nested `<div>`s, the ones that are wrapping each `<h3>` and `<p>` tags. Let's change those from `<div>`s to `<Wrapper>`. Make sure to remember to change the closing tags as well.

Time to work on the other two template literals. As you build these, ask the students to help you.

`
  const Header = styled.h3`
    color: #A27581;
  `

  const Text = styled.p`
    color: #564962;
  `
`

Replace the `<h3>` and `<p>` tags in the `<Wapper>` tags with `<Header>` and `<Text>` respectively.

*****************************************************************

## Footer.js
In the static terminal, install Material-UI.
    `npm install prop-types @material-ui/core @material-ui/icons`
At this time, take a moment to pull up the documentation on Material-UI. This styling library has really good documentation! Click the hamburger icon in the upper left corner, click components, and then choose a component and show code by clicking the <> button. 

### What is Material-UI?
*Material-UI is a framework created to bridge React and Material Design back in 2014. Material Design is a design language that Google developed around the same time. It is one of the most popular styling libraries and is used by more than 1M developers in over 180 countries.*

### Features
Material-UI is similar to ReactStrap in that we import different Material-UI components from this library into each component of our project and call these components in the JSX portion of the file. Material-UI includes the ability to create a customized theme, import icons, and leans on Flexbox to manage the site's layout.


Documentation: https://material-ui.com/


### Syntax
Brace yourselves as we are going to do quite a bit of importing and refactoring in this component.

#### PropTypes

Start by importing PropTypes into the Footer component.

	`import PropTypes from 'prop-types;`

We saw this a little in the React modules. Ask the students if they recall or can guess what this package does?

PropTypes is part of the React Framework. Similar to TypeScript, we can use React's built-in package to typecheck the props for a component.

Documentation: https://reactjs.org/docs/typechecking-with-proptypes.html

To use PropTypes, we build out an object with key-value pairs for the component we want to ensure the types are correct. 

	`
		ComponentName.propTypes = {
			key: PropTypes.dataType.isRequired,
		};
	`

Things to note for this syntax are:
  - We are assigning a propTypes to a component, 
  - We are building an object, and
  - Each key-value pair is separated by a comma 

For this component, we will be creating a style object which we want to ensure is an object.

Add the following lines of code below your closing curly brace of the component and above the compoment export.

  `
    Footer.propTypes = {
      classes: PropTypes.object.isRequired,
    };
  `

#### WithStyles

Time to add some Material-UI Styling. For this to work, we first need to include the withStyles API from Material-UI.

At the top of our component, in our import statements, add the following import:

  `import {withStyles} from "@material-ui/core/styles"`

Documentation: https://material-ui.com/styles/basics/#higher-order-component-api;

Let's take a bit of a deeper dive into this styling API. We can use this API in a couple of different ways depending on our project. There is the option to implement this as a hook as well! For this project, we are using it as a Higher Order API. 

Higher Order Components are not specific to Material-UI. This isn't even a react thing! Higher Order Components (HOCs) are a technique React uses to reuse component logic. It's a pattern that interacts smoothly with React's dataflow. In a nutshell, an HOC is a function that takes in a component and returns a new component. 

Here is the syntax for using the withStyles API:

  `withStyles(stylesObject)(ComponentName)`

We need to add a few more things before we can fully implement the withStyles API.

#### Styles Object

Just like with the other styling tools/libraries, we need to set up a styles object. The syntax for the properties is similar to Radium: each key-value pair is separated by commas, the keys are written using camelCasing, and the values are strings.

Let's build one that styles an element at its root. Write the following code below the import statement and the component declaration:

  `
    const styles = {
      root: {
        width: "100%",
        marginTop: "5em",
        backgroundColor: "#0B2249",
        color: "#F78A7E"
      }
    }
  `

Time to work on the other two template literals. As you build these, ask the students to help you.

`
  const Header = styled.h3`
    color: #A27581;
  `

  const Text = styled.p`
    color: #564962;
  `
`

Replace the `<h3>` and `<p>` tags in the `<Wapper>` tags with `<Header>` and `<Text>` respectively.

*****************************************************************