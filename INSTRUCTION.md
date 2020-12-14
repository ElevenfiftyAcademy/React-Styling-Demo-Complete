# Instruction for the React-Styling-Demo

## Walkthrough structure
  - Sitebar (reactstrap - class component)
  - BoxHero (radium - functional)
  - TextContent (styled components - functional)
  - Footer (material-ui - class component)

Have a different student describe what they think the output is for each component. 

Then run `npm start` in the terminal to display the actual output.

Make sure to have the students either stop the terminal from running or open up another terminal window in order to install the different dependencies.

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

  `const styles = {
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
  }`

Inside of the `<div>` in the return, add a style attribute of the boxhero property. Since this is just an object, we can dig into this styles object using dotnotation. 
  
  `<div style={styles.boxhero}>`

Now do the same thing to the button.

  `<button style={styles.button}>SHOP NOW</button>`

Let's add that an on hover effect to the button. Give the students 10-ish minutes to research and try it themselves.

`const styles = {
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
  }`

## Navbar/Sitebar.js
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

## TextContent.js
In the static terminal, install Styled Components.
    `npm install styled components`
At this time, take a moment to pull up the documentation on Styled Components.

### What is Styled Components?
*Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!* 

### Features
Styled Components is looks and acts incredibly similar to Radium expect for a couple of differences. Most notibly, the styles object is broken apart and some Radium features such as browser states cannot be altered with Styled Components.

Documentation: https://styled-components.com/

### Syntax
Start by importing Styled Components into the TextContent component.

	`import styled from 'styled-components;`

To use Styled Components, we build out a template literal for each element we want to style. 

	`
		const variableName = styled.htmlElement`
			style-property: value;
		`;
	`