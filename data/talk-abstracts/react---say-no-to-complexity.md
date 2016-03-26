React is a web app framework from Facebook that focuses on the view portion. It emphasizes building UIs from components, most of which only use data that is directly passed to them. This results in components that are easy to understand, reuse, and test.

React applications naturally divide into code that addresses two separate concerns. The first is what a component should render when given certain data. The second is how events should be handled, often modifying the state of the application. React takes care of determining the minimum set of DOM changes that are required to update the UI based on changes to the state. This is done efficiently through use of a "virtual DOM". Changes to this can be quickly "diffed" against the previous version.

There are great options for the aspects of web apps that are not handled by React. For routing, many developers use react-router. For Ajax, commonly used libraries include Fetch and axios. For immutable data structures, the Immutable library from Facebook is recommended. For data management (state), Redux is becoming a defacto standard.

This talk covers everything you need to know in order to get started using React.
