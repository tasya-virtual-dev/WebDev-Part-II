/*
 * A simple React component
 */
class Application extends React.Component {
  render() {
    return React.createElement("div", null,
    React.createElement("h1", null, "Hello, ES6 and React 0.13!"),
    React.createElement("p", null, "More info ",
    React.createElement("a", { href: "https://github.com/bradleyboy/codepen-react", target: "_blank" }, "here"), "."));


  }}


/*
      * Render the above component into the div#app
      */
React.render(React.createElement(Application, null), document.getElementById('app'));